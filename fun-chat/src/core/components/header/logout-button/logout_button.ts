import Button from "../../button/button";
import { ws } from "../../../../api/websocket";

class LogoutButton extends Button {
  constructor() {
    super("logout__btn", "btn", "Log out", "button");

    this.onClick(() => {
      ws.logOut();
    });
  }
}

export default LogoutButton;
