const Errors = {
    NOT_ENOUGH_RIGHTS: {
        notEnoughRights: 'Not enough rights',
    },
    LIST_NOT_FOUND: {
        listNotFound: 'List not found',
    },
};

module.exports = {
    inputs: {
        id: {
            type: 'string',
            regex: /^[0-9]+$/,
            required: true,
        },
    },

    exits: {
        notEnoughRights: {
            responseType: 'forbidden',
        },
        listNotFound: {
            responseType: 'notFound',
        },
    },

    async fn(inputs) {
        const { currentUser } = this.req;

        const { list } = await sails.helpers.lists
            .getProjectPath(inputs.id)
            .intercept('pathNotFound', () => Errors.LIST_NOT_FOUND);

        const boardMembership = await BoardMembership.findOne({
            boardId: list.boardId,
            userId: currentUser.id,
        });

        if (!boardMembership) {
            throw Errors.LIST_NOT_FOUND;
        }

        if (boardMembership.role !== BoardMembership.Roles.EDITOR) {
            throw Errors.NOT_ENOUGH_RIGHTS;
        }

        const updatedList = await List.findOne({ id: inputs.id });
        const cards = await sails.helpers.lists.getCards(inputs.id);
        const board = await Board.findOne({ id: updatedList.boardId });
        const project = await Project.findOne({ id: board.projectId });
        cards.forEach(async (card) => {
            await sails.helpers.cards.deleteOne.with({
                project,
                board,
                list: updatedList,
                record: card,
                actorUser: currentUser,
                request: this.req,
            });
        });

        if (!updatedList) {
            throw Errors.LIST_NOT_FOUND;
        }

        return {
            item: updatedList,
            included: {
                cards,
            },
        };
    },
};
