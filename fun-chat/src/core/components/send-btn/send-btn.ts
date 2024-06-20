import Button from "../button/button";

class SendButton extends Button {
  constructor() {
    super("send__btn", "btn", "Send", "submit");

    this.setDisabled(true);
  }
}

export default SendButton;
