import { MessageType } from "./enum";

export interface IRequest {
  id: string;
  type: string;
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}

export interface IRequestExternal {
  id: null;
  type: string;
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface IRequestActiveUsers {
  id: string;
  type: string;
  payload: null;
}

export interface IRequestInactiveUsers {
  id: string;
  type: string;
  payload: null;
}

export interface IResponseLogin {
  id: string;
  type: string;
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface IResponseActiveUser {
  id: string;
  type: string;
  payload: {
    users: [];
  };
}

export interface IResponseInactiveUser {
  id: string;
  type: string;
  payload: {
    users: [];
  };
}

export interface IErrorLogin {
  id: string;
  type: MessageType.error;
  payload: {
    error: string;
  };
}

export interface IUser {
  id: string;
  login: string;
  password: string;
}

export interface IUserIsLogined {
  login: string;
  isLogined: boolean;
}

export interface ISendMessage {
  id: string;
  type: string;
  payload: {
    message: {
      to: string;
      text: string;
    };
  };
}

export interface IMessageStatus {
  isDelivered: boolean;
  isReaded: boolean;
  isEdited: boolean;
}

export interface IMessage {
  id: string;
  from: string;
  to: string;
  text: string;
  datetime: number;
  status: IMessageStatus;
}

export interface IResponseMessage {
  id: string;
  type: string;
  payload: {
    message: IMessage;
  };
}

export interface IEditedMessages {
  message: {
    id: string;
    text: string;
    status: {
      isEdited: boolean;
    };
  };
}

export interface IEditContent {
  message: {
    id: string;
    text: string;
  };
}

export interface IResponseEditMessage {
  id: string;
  type: string;
  payload: IEditedMessages;
}

export interface IEditUserMessage {
  id: null;
  type: string;
  payload: IEditedMessages;
}

export interface IRequestEditMessage {
  id: string;
  type: string;
  payload: IEditContent;
}

export interface IDeleteMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
    };
  };
}

export interface IResponseDeleteMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
      status: {
        isDeleted: boolean;
      };
    };
  };
}

export interface IHistoryMessage {
  id: string;
  type: string;
  payload: {
    user: {
      login: string;
    };
  };
}

export interface IResponseHistoryMessage {
  id: string;
  type: string;
  payload: {
    messages: [];
  };
}

export interface IDeliverMessage {
  id: null;
  type: string;
  payload: {
    message: {
      id: string;
      status: {
        isDelivered: boolean;
      };
    };
  };
}

export interface IReadMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
    };
  };
}

export interface IServerMessage {
  id: null;
  type: string;
  payload: {
    message: {
      id: string;
    };
  };
}

export interface IIsReaded {
  message: {
    id: string;
    status: {
      isReaded: boolean;
    };
  };
}

export interface IResponseReadMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
      status: {
        isReaded: boolean;
      };
    };
  };
}
