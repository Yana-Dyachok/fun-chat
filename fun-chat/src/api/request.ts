import {
  IRequest,
  IRequestExternal,
  IRequestActiveUsers,
  ISendMessage,
  IHistoryMessage,
  IReadMessage,
  IServerMessage,
  IRequestEditMessage,
  IDeliverMessage,
} from "../types/interfaces";

export const getRequest = (
  id: string,
  login: string,
  password: string,
  messageType: string,
): IRequest => ({
  id,
  type: messageType,
  payload: {
    user: {
      login,
      password,
    },
  },
});

export const getExternalRequest = (
  login: string,
  isLogined: boolean,
  messageType: string,
): IRequestExternal => ({
  id: null,
  type: messageType,
  payload: {
    user: {
      login,
      isLogined,
    },
  },
});

export const getUsersRequest = (
  id: string,
  messageType: string,
): IRequestActiveUsers => ({
  id,
  type: messageType,
  payload: null,
});

export const getRequestSendMessage = (
  id: string,
  messageType: string,
  toUser: string,
  text: string,
): ISendMessage => ({
  id,
  type: messageType,
  payload: {
    message: {
      to: toUser,
      text,
    },
  },
});

export const getRequestHistoryMessage = (
  id: string,
  messageType: string,
  login: string,
): IHistoryMessage => ({
  id,
  type: messageType,
  payload: {
    user: {
      login,
    },
  },
});

export const getRequestOneMessage = (
  id: string,
  messageType: string,
  idMs: string,
): IReadMessage => ({
  id,
  type: messageType,
  payload: {
    message: {
      id: idMs,
    },
  },
});

export const getRequestServerOneMessage = (
  messageType: string,
  idMs: string,
): IServerMessage => ({
  id: null,
  type: messageType,
  payload: {
    message: {
      id: idMs,
    },
  },
});

export const getRequestEditMessage = (
  id: string,
  messageType: string,
  idMs: string,
  textEdited: string,
): IRequestEditMessage => ({
  id,
  type: messageType,
  payload: {
    message: {
      id: idMs,
      text: textEdited,
    },
  },
});

export const getRequestDeliverMessage = (
  messageType: string,
  idMs: string,
  status: boolean,
): IDeliverMessage => ({
  id: null,
  type: messageType,
  payload: {
    message: {
      id: idMs,
      status: {
        isDelivered: status,
      },
    },
  },
});
