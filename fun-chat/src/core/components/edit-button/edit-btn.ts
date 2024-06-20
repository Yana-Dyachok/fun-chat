import Button from "../button/button";
import { ws } from "../../../api/websocket";

class EditButton extends Button {
  constructor() {
    super("message__edit-btn", "message__edit", "", "button");
  }

  editMessage(dataset: string): void {
    this.onClick(() => {
      if (dataset) {
        const messageText: HTMLDivElement | null = document.querySelector(
          `[data-message-text="${dataset}"]`,
        );
        const edit: HTMLDivElement | null = document.querySelector(
          `[data-message-edit="${dataset}"]`,
        );
        if (messageText) {
          const currentText = messageText.textContent || "";
          const inputElement = document.createElement("input");
          inputElement.classList.add("message__edit-text");
          inputElement.value = currentText;
          messageText.replaceWith(inputElement);

          inputElement.addEventListener("keyup", (event) => {
            if (event.key === "Enter" && inputElement.value.length > 0) {
              const newText = inputElement.value.trim();
              const newMessageText = document.createElement("div");
              newMessageText.textContent = newText;
              newMessageText.setAttribute("data-message-block", `${dataset}`);
              newMessageText.classList.add("message__text");
              inputElement.replaceWith(newMessageText);
              ws.editMessage(dataset, newText);
              if (edit) edit.textContent = "edit";
            }
          });
        }
      }
    });
  }
}

export default EditButton;
