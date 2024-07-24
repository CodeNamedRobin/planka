export default {
  /* Router */

  LOCATION_CHANGE_HANDLE: 'LOCATION_CHANGE_HANDLE',
  LOCATION_CHANGE_HANDLE__BOARD_FETCH: 'LOCATION_CHANGE_HANDLE__BOARD_FETCH',

  /* Socket */

  SOCKET_DISCONNECT_HANDLE: 'SOCKET_DISCONNECT_HANDLE',
  SOCKET_RECONNECT_HANDLE: 'SOCKET_RECONNECT_HANDLE',
  SOCKET_RECONNECT_HANDLE__CORE_FETCH: 'SOCKET_RECONNECT_HANDLE__CORE_FETCH',

  /* Login */

  LOGIN_INITIALIZE: 'LOGIN_INITIALIZE',
  AUTHENTICATE: 'AUTHENTICATE',
  AUTHENTICATE__SUCCESS: 'AUTHENTICATE__SUCCESS',
  AUTHENTICATE__FAILURE: 'AUTHENTICATE__FAILURE',
  USING_OIDC_AUTHENTICATE: 'USING_OIDC_AUTHENTICATE',
  USING_OIDC_AUTHENTICATE__SUCCESS: 'USING_OIDC_AUTHENTICATE__SUCCESS',
  USING_OIDC_AUTHENTICATE__FAILURE: 'USING_OIDC_AUTHENTICATE__FAILURE',
  AUTHENTICATE_ERROR_CLEAR: 'AUTHENTICATE_ERROR_CLEAR',

  /* Core */

  CORE_INITIALIZE: 'CORE_INITIALIZE',
  CORE_INITIALIZE__CONFIG_FETCH: 'CORE_INITIALIZE__CONFIG_FETCH',
  LOGOUT: 'LOGOUT',
  LOGOUT__ACCESS_TOKEN_INVALIDATE: 'LOGOUT__ACCESS_TOKEN_INVALIDATE',

  /* Modals */

  MODAL_OPEN: 'MODAL_OPEN',
  MODAL_CLOSE: 'MODAL_CLOSE',

  /* Users */

  USER_CREATE: 'USER_CREATE',
  USER_CREATE__SUCCESS: 'USER_CREATE__SUCCESS',
  USER_CREATE__FAILURE: 'USER_CREATE__FAILURE',
  USER_CREATE_HANDLE: 'USER_CREATE_HANDLE',
  USER_CREATE_ERROR_CLEAR: 'USER_CREATE_ERROR_CLEAR',
  USER_UPDATE: 'USER_UPDATE',
  USER_UPDATE__SUCCESS: 'USER_UPDATE__SUCCESS',
  USER_UPDATE__FAILURE: 'USER_UPDATE__FAILURE',
  USER_UPDATE_HANDLE: 'USER_UPDATE_HANDLE',
  USER_EMAIL_UPDATE: 'USER_EMAIL_UPDATE',
  USER_EMAIL_UPDATE__SUCCESS: 'USER_EMAIL_UPDATE__SUCCESS',
  USER_EMAIL_UPDATE__FAILURE: 'USER_EMAIL_UPDATE__FAILURE',
  USER_EMAIL_UPDATE_ERROR_CLEAR: 'USER_EMAIL_UPDATE_ERROR_CLEAR',
  USER_PASSWORD_UPDATE: 'USER_PASSWORD_UPDATE',
  USER_PASSWORD_UPDATE__SUCCESS: 'USER_PASSWORD_UPDATE__SUCCESS',
  USER_PASSWORD_UPDATE__FAILURE: 'USER_PASSWORD_UPDATE__FAILURE',
  USER_PASSWORD_UPDATE_ERROR_CLEAR: 'USER_PASSWORD_UPDATE_ERROR_CLEAR',
  USER_USERNAME_UPDATE: 'USER_USERNAME_UPDATE',
  USER_USERNAME_UPDATE__SUCCESS: 'USER_USERNAME_UPDATE__SUCCESS',
  USER_USERNAME_UPDATE__FAILURE: 'USER_USERNAME_UPDATE__FAILURE',
  USER_USERNAME_UPDATE_ERROR_CLEAR: 'USER_USERNAME_UPDATE_ERROR_CLEAR',
  USER_AVATAR_UPDATE: 'USER_AVATAR_UPDATE',
  USER_AVATAR_UPDATE__SUCCESS: 'USER_AVATAR_UPDATE__SUCCESS',
  USER_AVATAR_UPDATE__FAILURE: 'USER_AVATAR_UPDATE__FAILURE',
  USER_DELETE: 'USER_DELETE',
  USER_DELETE__SUCCESS: 'USER_DELETE__SUCCESS',
  USER_DELETE__FAILURE: 'USER_DELETE__FAILURE',
  USER_DELETE_HANDLE: 'USER_DELETE_HANDLE',
  USER_TO_CARD_ADD: 'USER_TO_CARD_ADD',
  USER_TO_CARD_ADD__SUCCESS: 'USER_TO_CARD_ADD__SUCCESS',
  USER_TO_CARD_ADD__FAILURE: 'USER_TO_CARD_ADD__FAILURE',
  USER_TO_CARD_ADD_HANDLE: 'USER_TO_CARD_ADD_HANDLE',
  USER_FROM_CARD_REMOVE: 'USER_FROM_CARD_REMOVE',
  USER_FROM_CARD_REMOVE__SUCCESS: 'USER_FROM_CARD_REMOVE__SUCCESS',
  USER_FROM_CARD_REMOVE__FAILURE: 'USER_FROM_CARD_REMOVE__FAILURE',
  USER_FROM_CARD_REMOVE_HANDLE: 'USER_FROM_CARD_REMOVE_HANDLE',
  USER_TO_BOARD_FILTER_ADD: 'USER_TO_BOARD_FILTER_ADD',
  USER_FROM_BOARD_FILTER_REMOVE: 'USER_FROM_BOARD_FILTER_REMOVE',

  /* Projects */

  PROJECT_CREATE: 'PROJECT_CREATE',
  PROJECT_CREATE__SUCCESS: 'PROJECT_CREATE__SUCCESS',
  PROJECT_CREATE__FAILURE: 'PROJECT_CREATE__FAILURE',
  PROJECT_CREATE_HANDLE: 'PROJECT_CREATE_HANDLE',
  PROJECT_UPDATE: 'PROJECT_UPDATE',
  PROJECT_UPDATE__SUCCESS: 'PROJECT_UPDATE__SUCCESS',
  PROJECT_UPDATE__FAILURE: 'PROJECT_UPDATE__FAILURE',
  PROJECT_UPDATE_HANDLE: 'PROJECT_UPDATE_HANDLE',
  PROJECT_BACKGROUND_IMAGE_UPDATE: 'PROJECT_BACKGROUND_IMAGE_UPDATE',
  PROJECT_BACKGROUND_IMAGE_UPDATE__SUCCESS: 'PROJECT_BACKGROUND_IMAGE_UPDATE__SUCCESS',
  PROJECT_BACKGROUND_IMAGE_UPDATE__FAILURE: 'PROJECT_BACKGROUND_IMAGE_UPDATE__FAILURE',
  PROJECT_DELETE: 'PROJECT_DELETE',
  PROJECT_DELETE__SUCCESS: 'PROJECT_DELETE__SUCCESS',
  PROJECT_DELETE__FAILURE: 'PROJECT_DELETE__FAILURE',
  PROJECT_DELETE_HANDLE: 'PROJECT_DELETE_HANDLE',

  /* Project managers */

  PROJECT_MANAGER_CREATE: 'PROJECT_MANAGER_CREATE',
  PROJECT_MANAGER_CREATE__SUCCESS: 'PROJECT_MANAGER_CREATE__SUCCESS',
  PROJECT_MANAGER_CREATE__FAILURE: 'PROJECT_MANAGER_CREATE__FAILURE',
  PROJECT_MANAGER_CREATE_HANDLE: 'PROJECT_MANAGER_CREATE_HANDLE',
  PROJECT_MANAGER_CREATE_HANDLE__PROJECT_FETCH: 'PROJECT_MANAGER_CREATE_HANDLE__PROJECT_FETCH',
  PROJECT_MANAGER_DELETE: 'PROJECT_MANAGER_DELETE',
  PROJECT_MANAGER_DELETE__SUCCESS: 'PROJECT_MANAGER_DELETE__SUCCESS',
  PROJECT_MANAGER_DELETE__FAILURE: 'PROJECT_MANAGER_DELETE__FAILURE',
  PROJECT_MANAGER_DELETE_HANDLE: 'PROJECT_MANAGER_DELETE_HANDLE',

  /* Boards */

  BOARD_CREATE: 'BOARD_CREATE',
  BOARD_CREATE__SUCCESS: 'BOARD_CREATE__SUCCESS',
  BOARD_CREATE__FAILURE: 'BOARD_CREATE__FAILURE',
  BOARD_CREATE_HANDLE: 'BOARD_CREATE_HANDLE',
  BOARD_FETCH: 'BOARD_FETCH',
  BOARD_FETCH__SUCCESS: 'BOARD_FETCH__SUCCESS',
  BOARD_FETCH__FAILURE: 'BOARD_FETCH__FAILURE',
  BOARD_UPDATE: 'BOARD_UPDATE',
  BOARD_UPDATE__SUCCESS: 'BOARD_UPDATE__SUCCESS',
  BOARD_UPDATE__FAILURE: 'BOARD_UPDATE__FAILURE',
  BOARD_UPDATE_HANDLE: 'BOARD_UPDATE_HANDLE',
  BOARD_DELETE: 'BOARD_DELETE',
  BOARD_DELETE__SUCCESS: 'BOARD_DELETE__SUCCESS',
  BOARD_DELETE__FAILURE: 'BOARD_DELETE__FAILURE',
  BOARD_DELETE_HANDLE: 'BOARD_DELETE_HANDLE',

  /* Board memberships */

  BOARD_MEMBERSHIP_CREATE: 'BOARD_MEMBERSHIP_CREATE',
  BOARD_MEMBERSHIP_CREATE__SUCCESS: 'BOARD_MEMBERSHIP_CREATE__SUCCESS',
  BOARD_MEMBERSHIP_CREATE__FAILURE: 'BOARD_MEMBERSHIP_CREATE__FAILURE',
  BOARD_MEMBERSHIP_CREATE_HANDLE: 'BOARD_MEMBERSHIP_CREATE_HANDLE',
  BOARD_MEMBERSHIP_CREATE_HANDLE__PROJECT_FETCH: 'BOARD_MEMBERSHIP_CREATE_HANDLE__PROJECT_FETCH',
  BOARD_MEMBERSHIP_UPDATE: 'BOARD_MEMBERSHIP_UPDATE',
  BOARD_MEMBERSHIP_UPDATE__SUCCESS: 'BOARD_MEMBERSHIP_UPDATE__SUCCESS',
  BOARD_MEMBERSHIP_UPDATE__FAILURE: 'BOARD_MEMBERSHIP_UPDATE__FAILURE',
  BOARD_MEMBERSHIP_UPDATE_HANDLE: 'BOARD_MEMBERSHIP_UPDATE_HANDLE',
  BOARD_MEMBERSHIP_DELETE: 'BOARD_MEMBERSHIP_DELETE',
  BOARD_MEMBERSHIP_DELETE__SUCCESS: 'BOARD_MEMBERSHIP_DELETE__SUCCESS',
  BOARD_MEMBERSHIP_DELETE__FAILURE: 'BOARD_MEMBERSHIP_DELETE__FAILURE',
  BOARD_MEMBERSHIP_DELETE_HANDLE: 'BOARD_MEMBERSHIP_DELETE_HANDLE',

  /* Labels */

  LABEL_CREATE: 'LABEL_CREATE',
  LABEL_CREATE__SUCCESS: 'LABEL_CREATE__SUCCESS',
  LABEL_CREATE__FAILURE: 'LABEL_CREATE__FAILURE',
  LABEL_CREATE_HANDLE: 'LABEL_CREATE_HANDLE',
  LABEL_UPDATE: 'LABEL_UPDATE',
  LABEL_UPDATE__SUCCESS: 'LABEL_UPDATE__SUCCESS',
  LABEL_UPDATE__FAILURE: 'LABEL_UPDATE__FAILURE',
  LABEL_UPDATE_HANDLE: 'LABEL_UPDATE_HANDLE',
  LABEL_DELETE: 'LABEL_DELETE',
  LABEL_DELETE__SUCCESS: 'LABEL_DELETE__SUCCESS',
  LABEL_DELETE__FAILURE: 'LABEL_DELETE__FAILURE',
  LABEL_DELETE_HANDLE: 'LABEL_DELETE_HANDLE',
  LABEL_TO_CARD_ADD: 'LABEL_TO_CARD_ADD',
  LABEL_TO_CARD_ADD__SUCCESS: 'LABEL_TO_CARD_ADD__SUCCESS',
  LABEL_TO_CARD_ADD__FAILURE: 'LABEL_TO_CARD_ADD__FAILURE',
  LABEL_TO_CARD_ADD_HANDLE: 'LABEL_TO_CARD_ADD_HANDLE',
  LABEL_FROM_CARD_REMOVE: 'LABEL_FROM_CARD_REMOVE',
  LABEL_FROM_CARD_REMOVE__SUCCESS: 'LABEL_FROM_CARD_REMOVE__SUCCESS',
  LABEL_FROM_CARD_REMOVE__FAILURE: 'LABEL_FROM_CARD_REMOVE__FAILURE',
  LABEL_FROM_CARD_REMOVE_HANDLE: 'LABEL_FROM_CARD_REMOVE_HANDLE',
  LABEL_TO_BOARD_FILTER_ADD: 'LABEL_TO_BOARD_FILTER_ADD',
  LABEL_FROM_BOARD_FILTER_REMOVE: 'LABEL_FROM_BOARD_FILTER_REMOVE',

  /* Lists */

  LIST_CREATE: 'LIST_CREATE',
  LIST_CREATE__SUCCESS: 'LIST_CREATE__SUCCESS',
  LIST_CREATE__FAILURE: 'LIST_CREATE__FAILURE',
  LIST_CREATE_HANDLE: 'LIST_CREATE_HANDLE',
  LIST_UPDATE: 'LIST_UPDATE',
  LIST_UPDATE__SUCCESS: 'LIST_UPDATE__SUCCESS',
  LIST_UPDATE__FAILURE: 'LIST_UPDATE__FAILURE',
  LIST_UPDATE_HANDLE: 'LIST_UPDATE_HANDLE',
  LIST_SORT: 'LIST_SORT',
  LIST_SORT__SUCCESS: 'LIST_SORT__SUCCESS',
  LIST_SORT__FAILURE: 'LIST_SORT__FAILURE',
  LIST_SORT_HANDLE: 'LIST_SORT_HANDLE',
  LIST_EMPTY: 'LIST_EMPTY',
  LIST_EMPTY__SUCCESS: 'LIST_EMPTY__SUCCESS',
  LIST_EMPTY__FAILURE: 'LIST_EMPTY__FAILURE',
  LIST_EMPTY_HANDLE: 'LIST_EMPTY_HANDLE',
  LIST_DELETE: 'LIST_DELETE',
  LIST_DELETE__SUCCESS: 'LIST_DELETE__SUCCESS',
  LIST_DELETE__FAILURE: 'LIST_DELETE__FAILURE',
  LIST_DELETE_HANDLE: 'LIST_DELETE_HANDLE',

  /* Cards */

  CARD_CREATE: 'CARD_CREATE',
  CARD_CREATE__SUCCESS: 'CARD_CREATE__SUCCESS',
  CARD_CREATE__FAILURE: 'CARD_CREATE__FAILURE',
  CARD_CREATE_HANDLE: 'CARD_CREATE_HANDLE',
  CARD_FETCH: 'CARD_FETCH',
  CARD_FETCH__SUCCESS: 'CARD_FETCH__SUCCESS',
  CARD_FETCH__FAILURE: 'CARD_FETCH__FAILURE',
  CARD_UPDATE: 'CARD_UPDATE',
  CARD_UPDATE__SUCCESS: 'CARD_UPDATE__SUCCESS',
  CARD_UPDATE__FAILURE: 'CARD_UPDATE__FAILURE',
  CARD_UPDATE_HANDLE: 'CARD_UPDATE_HANDLE',
  CARD_DUPLICATE: 'CARD_DUPLICATE',
  CARD_DUPLICATE__SUCCESS: 'CARD_DUPLICATE__SUCCESS',
  CARD_DUPLICATE__FAILURE: 'CARD_DUPLICATE__FAILURE',
  CARD_DELETE: 'CARD_DELETE',
  CARD_DELETE__SUCCESS: 'CARD_DELETE__SUCCESS',
  CARD_DELETE__FAILURE: 'CARD_DELETE__FAILURE',
  CARD_DELETE_HANDLE: 'CARD_DELETE_HANDLE',
  TEXT_FILTER_IN_CURRENT_BOARD: 'TEXT_FILTER_IN_CURRENT_BOARD',

  /* Tasks */

  TASK_CREATE: 'TASK_CREATE',
  TASK_CREATE__SUCCESS: 'TASK_CREATE__SUCCESS',
  TASK_CREATE__FAILURE: 'TASK_CREATE__FAILURE',
  TASK_CREATE_HANDLE: 'TASK_CREATE_HANDLE',
  TASK_UPDATE: 'TASK_UPDATE',
  TASK_UPDATE__SUCCESS: 'TASK_UPDATE__SUCCESS',
  TASK_UPDATE__FAILURE: 'TASK_UPDATE__FAILURE',
  TASK_UPDATE_HANDLE: 'TASK_UPDATE_HANDLE',
  TASK_DELETE: 'TASK_DELETE',
  TASK_DELETE__SUCCESS: 'TASK_DELETE__SUCCESS',
  TASK_DELETE__FAILURE: 'TASK_DELETE__FAILURE',
  TASK_DELETE_HANDLE: 'TASK_DELETE_HANDLE',

  /* Attachments */

  ATTACHMENT_CREATE: 'ATTACHMENT_CREATE',
  ATTACHMENT_CREATE__SUCCESS: 'ATTACHMENT_CREATE__SUCCESS',
  ATTACHMENT_CREATE__FAILURE: 'ATTACHMENT_CREATE__FAILURE',
  ATTACHMENT_CREATE_HANDLE: 'ATTACHMENT_CREATE_HANDLE',
  ATTACHMENT_UPDATE: 'ATTACHMENT_UPDATE',
  ATTACHMENT_UPDATE__SUCCESS: 'ATTACHMENT_UPDATE__SUCCESS',
  ATTACHMENT_UPDATE__FAILURE: 'ATTACHMENT_UPDATE__FAILURE',
  ATTACHMENT_UPDATE_HANDLE: 'ATTACHMENT_UPDATE_HANDLE',
  ATTACHMENT_DELETE: 'ATTACHMENT_DELETE',
  ATTACHMENT_DELETE__SUCCESS: 'ATTACHMENT_DELETE__SUCCESS',
  ATTACHMENT_DELETE__FAILURE: 'ATTACHMENT_DELETE__FAILURE',
  ATTACHMENT_DELETE_HANDLE: 'ATTACHMENT_DELETE_HANDLE',

  /* Activities */

  ACTIVITIES_FETCH: 'ACTIVITIES_FETCH',
  ACTIVITIES_FETCH__SUCCESS: 'ACTIVITIES_FETCH__SUCCESS',
  ACTIVITIES_FETCH__FAILURE: 'ACTIVITIES_FETCH__FAILURE',
  ACTIVITIES_DETAILS_TOGGLE: 'ACTIVITIES_DETAILS_TOGGLE',
  ACTIVITIES_DETAILS_TOGGLE__SUCCESS: 'ACTIVITIES_DETAILS_TOGGLE__SUCCESS',
  ACTIVITIES_DETAILS_TOGGLE__FAILURE: 'ACTIVITIES_DETAILS_TOGGLE__FAILURE',
  ACTIVITY_CREATE_HANDLE: 'ACTIVITY_CREATE_HANDLE',
  ACTIVITY_UPDATE_HANDLE: 'ACTIVITY_UPDATE_HANDLE',
  ACTIVITY_DELETE_HANDLE: 'ACTIVITY_DELETE_HANDLE',

  /* Comment activities */

  COMMENT_ACTIVITY_CREATE: 'COMMENT_ACTIVITY_CREATE',
  COMMENT_ACTIVITY_CREATE__SUCCESS: 'COMMENT_ACTIVITY_CREATE__SUCCESS',
  COMMENT_ACTIVITY_CREATE__FAILURE: 'COMMENT_ACTIVITY_CREATE__FAILURE',
  COMMENT_ACTIVITY_UPDATE: 'COMMENT_ACTIVITY_UPDATE',
  COMMENT_ACTIVITY_UPDATE__SUCCESS: 'COMMENT_ACTIVITY_UPDATE__SUCCESS',
  COMMENT_ACTIVITY_UPDATE__FAILURE: 'COMMENT_ACTIVITY_UPDATE__FAILURE',
  COMMENT_ACTIVITY_DELETE: 'COMMENT_ACTIVITY_DELETE',
  COMMENT_ACTIVITY_DELETE__SUCCESS: 'COMMENT_ACTIVITY_DELETE__SUCCESS',
  COMMENT_ACTIVITY_DELETE__FAILURE: 'COMMENT_ACTIVITY_DELETE__FAILURE',

  /* Notifications */

  NOTIFICATION_CREATE_HANDLE: 'NOTIFICATION_CREATE_HANDLE',
  NOTIFICATION_DELETE: 'NOTIFICATION_DELETE',
  NOTIFICATION_DELETE__SUCCESS: 'NOTIFICATION_DELETE__SUCCESS',
  NOTIFICATION_DELETE__FAILURE: 'NOTIFICATION_DELETE__FAILURE',
  NOTIFICATION_DELETE_HANDLE: 'NOTIFICATION_DELETE_HANDLE',
};
