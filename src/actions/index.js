import { createAction } from 'redux-actions';

export const addMessage = createAction('MESSAGE_ADD');
export const updateNewMessageText = createAction('NEW_MESSAGE_TEXT_UPDATE');
export const setCurentChannelId = createAction('CURRENT_CHANNEL_ID_SET');
export const addChannel = createAction('CHANNEL_ADD');
export const removeChannel = createAction('CHANNEL_REMOVE');
export const renameChannel = createAction('CHANNEL_RENAME');
export const setSocketConnectionStatus = createAction('SOCKET_CONNECTION_STATUS_SET');
export const openModal = createAction('MODAL_OPEN');
export const closeModal = createAction('MODAL_CLOSE');
export const setRequestError = createAction('REQUEST_ERROR_SET');
export const startRequest = createAction('REQUEST_START');
export const finishRequest = createAction('REQUEST_FINISH');
