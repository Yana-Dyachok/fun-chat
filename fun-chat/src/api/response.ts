import { state } from "../state/state";
import { popup } from "../view/popup/popup";
import { contentView } from "../view/main-view/content-view";
import {
  IMessage,
  IResponseHistoryMessage,
  IResponseMessage,
  IErrorLogin,
  IResponseLogin,
  IRequestExternal,
  IResponseInactiveUser,
  IResponseActiveUser,
  IDeliverMessage,
  IResponseDeleteMessage,
  IResponseEditMessage,
  IResponseReadMessage,
} from "../types/interfaces";

class ResponseMethods {
  loginResponse(response: IResponseLogin) {
    const { payload } = response;
    const { user } = payload;
    state.setUser(user);
    if (user.isLogined) window.location.hash = "main";
  }

  loginExternal(response: IRequestExternal) {
    const { payload } = response;
    const { user } = payload;
    state.externalLogin(user);
    contentView.updateUsersList();
  }

  logoutResponse(response: IResponseLogin) {
    const { payload } = response;
    const { user } = payload;
    state.setUser(user);
    state.removeAllData();
    if (!user.isLogined) window.location.hash = "login";
  }

  logoutExternal(response: IRequestExternal) {
    const { payload } = response;
    const { user } = payload;
    state.externalLogout(user);
    contentView.updateUsersList();
  }

  inactiveUsersResponse(response: IResponseInactiveUser) {
    const { payload } = response;
    const { users } = payload;
    state.setInactiveUsers(users);
    contentView.updateUsersList();
  }

  activeUsersResponse(response: IResponseActiveUser) {
    const { payload } = response;
    const { users } = payload;
    state.setActiveUsers(users);

    contentView.updateUsersList();
  }

  sendMsgResponse(response: IResponseMessage) {
    const { payload } = response;
    const { message } = payload;
    state.setMessage(message);
    contentView.contentClass.updateMessageBlock();
  }

  fromMessageResponse(response: IResponseHistoryMessage): void {
    const { payload } = response;
    const { messages } = payload;

    messages.forEach((message: IMessage) => {
      state.setMessage(message);
      console.log(state.setMessage(message));
    });
  }

  readMsgResponse(response: IResponseReadMessage) {
    const { payload } = response;
    const { message } = payload;
  }

  deliverMsgResponse(response: IDeliverMessage) {
    const { payload } = response;
    const { message } = payload;
  }

  deleteMsgResponse(response: IResponseDeleteMessage) {
    const { payload } = response;
    const { message } = payload;
    state.setDeletedMessage(message.id);
  }

  editMsgResponse(response: IResponseEditMessage) {
    const { payload } = response;
    const { message } = payload;
  }

  errorResponse(response: IErrorLogin): void {
    const { payload } = response;
    window.location.hash = "login";
    popup.createPopupElements(payload.error);
  }
}

export const resp = new ResponseMethods();
