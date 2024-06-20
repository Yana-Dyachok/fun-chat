import { SOCKET_URL } from "./const";
import { MessageType } from "../types/enum";
import {
  getRequest,
  getRequestSendMessage,
  getUsersRequest,
  getRequestHistoryMessage,
  getRequestOneMessage,
  getRequestServerOneMessage,
  getRequestEditMessage,
} from "./request";
import { st } from "../utils/session-storage";
import { popup } from "../view/popup/popup";
import { resp } from "./response";

class Websocket {
  private socket: WebSocket;

  constructor() {
    this.socket = SOCKET_URL;

    this.initListeners();
  }

  private initListeners(): void {
    this.socket.addEventListener("message", this.onMessage);
    this.socket.addEventListener("open", () => {
      popup.deletePopup();
    });
    this.socket.addEventListener("close", () => {
      popup.createPopupElements("Сonnection to the server");
    });
  }

  private onMessage = (e: MessageEvent): void => {
    const response = JSON.parse(e.data);

    switch (response.type) {
      case MessageType.logout: {
        resp.logoutResponse(response);
        break;
      }
      case MessageType.login: {
        resp.loginResponse(response);
        break;
      }
      case MessageType.external_login: {
        resp.loginExternal(response);
        break;
      }
      case MessageType.external_logout: {
        resp.logoutExternal(response);
        break;
      }
      case MessageType.inactive_user: {
        resp.inactiveUsersResponse(response);
        break;
      }
      case MessageType.active_user: {
        resp.activeUsersResponse(response);
        break;
      }
      case MessageType.send_msg: {
        resp.sendMsgResponse(response);
        break;
      }
      case MessageType.msg_from_user: {
        resp.fromMessageResponse(response);
        break;
      }

      case MessageType.msg_read: {
        resp.readMsgResponse(response);
        break;
      }
      case MessageType.delete_msg: {
        resp.deleteMsgResponse(response);
        break;
      }
      case MessageType.msg_deliver: {
        resp.deliverMsgResponse(response);
        break;
      }
      case MessageType.edit_msg: {
        resp.editMsgResponse(response);
        break;
      }
      case MessageType.error: {
        resp.errorResponse(response);
        break;
      }
      default:
        break;
    }
  };

  logIn(login: string, password: string): void {
    const id = Date.now().toString();
    st.saveUser({ id, login, password });
    this.socket.send(
      JSON.stringify(getRequest(id, login, password, MessageType.login)),
    );
  }

  logOut(): void {
    const userCurrent = st.getUser();

    const request = {
      id: userCurrent?.id,
      type: MessageType.logout,
      payload: {
        user: {
          login: userCurrent?.login,
          password: userCurrent?.password,
        },
      },
    };

    this.socket.send(JSON.stringify(request));
    st.removeUser();
  }

  getActiveUsers(): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(getUsersRequest(id, MessageType.active_user)),
    );
  }

  getInActiveUsers(): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(getUsersRequest(id, MessageType.inactive_user)),
    );
  }

  sendMessage(toUser: string, text: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(
        getRequestSendMessage(id, MessageType.send_msg, toUser, text),
      ),
    );
  }

  getAllMessages(login: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(
        getRequestHistoryMessage(id, MessageType.msg_from_user, login),
      ),
    );
  }

  getReadMessage(idMs: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(getRequestOneMessage(id, MessageType.msg_read, idMs)),
    );
  }

  deleteMessage(idMs: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(getRequestOneMessage(id, MessageType.delete_msg, idMs)),
    );
  }

  deleteServerMessage(idMs: string): void {
    this.socket.send(
      JSON.stringify(getRequestServerOneMessage(MessageType.delete_msg, idMs)),
    );
  }

  editMessage(idMs: string, text: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(
        getRequestEditMessage(id, MessageType.edit_msg, idMs, text),
      ),
    );
  }
}

export const ws = new Websocket();
