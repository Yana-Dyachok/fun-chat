import Button from "../button/button";
import { ws } from "../../../api/websocket";

class DeleteButton extends Button {
  constructor() {
    super("message__delete-btn", "message__delete", "", "button");
  }

  deleteMessage(dataset: string): void {
    const content: HTMLElement | null =
      document.querySelector(".dialog__content");
    this.onClick(() => {
      if (dataset) {
        ws.deleteMessage(dataset);
        // ws.deleteServerMessage(dataset)
        const messageBlock = document.querySelector(
          `[data-message-block="${dataset}"]`,
        );
        if (messageBlock && content) {
          content.removeChild(messageBlock);
        }
      }
    });
  }
}

export default DeleteButton;
