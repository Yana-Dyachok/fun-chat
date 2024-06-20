// import { SOCKET_URL } from "./const";
// import { MessageType } from "../types/enum";
// import { getExternalRequest, getRequest, getUsersRequest } from "./request";
// import { st } from "../utils/session-storage";
// import { ws } from "./websocket";

// class WebsocketRequest {
//   private socket: WebSocket;

//   constructor(socket: WebSocket) {
//     this.socket =socket;
//   }

//   logIn(login: string, password: string): void {
//     const id = Date.now().toString();
//     st.saveUser({ id, login, password });
//     this.socket.send(
//       JSON.stringify(getRequest(id, login, password, MessageType.login)),
//     );
//   }

//   logOut(): void {
//     const userCurrent = st.getUser();

//     const request = {
//       id: userCurrent?.id,
//       type: MessageType.logout,
//       payload: {
//         user: {
//           login: userCurrent?.login,
//           password: userCurrent?.password,
//         },
//       },
//     };

//     this.socket.send(JSON.stringify(request));
//     st.removeUser();
//   }

//   externalLogin(login: string, isLogined: boolean): void {
//     this.socket.send(
//       JSON.stringify(
//         getExternalRequest(login, isLogined, MessageType.external_login),
//       ),
//     );
//   }

//   getActiveUsers(): void {
//     const id = Date.now().toString();
//     this.socket.send(
//       JSON.stringify(getUsersRequest(id, MessageType.active_user)),
//     );
//   }

//   getInActiveUsers(): void {
//     const id = Date.now().toString();
//     this.socket.send(
//       JSON.stringify(getUsersRequest(id, MessageType.inactive_user)),
//     );
//   }

//   //   externalLogOut(): void {
//   //     this.socket.send(
//   //         JSON.stringify(
//   //             getExternalRequest(login, isLogined, MessageType.external_logout)
//   //         )
//   //     );
//   // }
// }

// export const wsr = new WebsocketRequest();
