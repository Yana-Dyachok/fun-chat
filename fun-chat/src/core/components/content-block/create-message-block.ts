import {
  createDiv,
  createLabel,
} from "../dialog-content/create-dialog-elements";
import { formatDate } from "../../../utils/format-date";
import { IMessage } from "../../../types/interfaces";
import { state } from "../../../state/state";
import DeleteButton from "../delete-btn/delete-btn";
import EditButton from "../edit-button/edit-btn";
import "./message-block.scss";

class MessageBlock {
  private deleteButton: DeleteButton;

  private editButton: EditButton;

  constructor() {
    this.deleteButton = new DeleteButton();
    this.editButton = new EditButton();
  }

  createMessageBlock = (message: IMessage): HTMLDivElement => {
    const { id, from, to, text, datetime, status } = message;
    const messageBlock: HTMLDivElement = createDiv("message__block");
    messageBlock.setAttribute("data-message-block", `${id}`);
    const messageContainer: HTMLDivElement = createDiv("message__container");
    const messageHeader: HTMLDivElement = createDiv("message__header");
    const messageUser: HTMLElement = createLabel("message__user");
    const messageDate: HTMLElement = createLabel("message__date");
    messageDate.textContent = formatDate(datetime);
    messageHeader.append(messageUser, messageDate);
    const messageText: HTMLDivElement = createDiv("message__text");
    messageText.setAttribute("data-message-text", `${id}`);
    const messageFooter: HTMLDivElement = createDiv("message__footer");
    const messageEditStatus: HTMLElement = createLabel("message__edit-status");
    messageEditStatus.textContent = `${status.isEdited ? "edit" : ""}`;
    messageEditStatus.setAttribute("data-message-edit", `${id}`);
    const messageStatus: HTMLElement = createLabel("message__status");
    if (state.getUser().login === from) {
      messageUser.textContent = "you";
      messageContainer.classList.remove("users-message");
      messageStatus.textContent = `${status.isReaded ? "readed" : status.isDelivered ? "delivered" : "sent"}`;
      this.deleteButton = new DeleteButton();
      this.deleteButton.deleteMessage(id);
      this.editButton = new EditButton();
      this.editButton.editMessage(id);
      messageFooter.append(
        this.deleteButton.getRootElement(),
        this.editButton.getRootElement(),
      );
    } else {
      messageUser.textContent = from;
      messageContainer.classList.add("users-message");
    }
    messageFooter.append(messageEditStatus, messageStatus);
    messageContainer.append(messageHeader, messageText, messageFooter);
    messageBlock.append(messageContainer);
    messageText.textContent = text;
    return messageBlock;
  };
}
export const messageBlock = new MessageBlock();
