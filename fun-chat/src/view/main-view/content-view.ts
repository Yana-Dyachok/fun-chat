import SendButton from "../../core/components/send-btn/send-btn";
import Content from "../../core/components/content-block/content";
import {
  createUserAside,
  createUserSearch,
  createUserList,
} from "../../core/components/aside-content/create-aside";
import {
  createArticle,
  createInputMessage,
  createLabel,
  createDialogInputForm,
  createDialogContent,
} from "../../core/components/dialog-content/create-dialog-elements";
import "./content.scss";
import "../../core/components/aside-content/aside-content.scss";
import "../../core/components/dialog-content/dialog-container.scss";

class ContentView {
  contentClass: Content;

  private content: HTMLElement;

  private sendButton: SendButton;

  userAside: HTMLElement = createUserAside();

  dialogContainer: HTMLElement = createArticle("dialog__container");

  userSearch: HTMLInputElement = createUserSearch();

  userList: HTMLElement = createUserList();

  userHeaderName: HTMLElement = createLabel("dialog__name");

  userHeaderStatus: HTMLElement = createLabel("dialog__status");

  inputMessage: HTMLInputElement = createInputMessage();

  dialogHeader: HTMLElement = createArticle("dialog__header");

  dialogForm: HTMLFormElement = createDialogInputForm();

  dialogContent: HTMLElement = createDialogContent();

  constructor() {
    this.content = document.createElement("main");
    this.content.classList.add("main");
    this.sendButton = new SendButton();
    this.contentClass = new Content(
      this.userSearch,
      this.userList,
      this.dialogForm,
      this.inputMessage,
      this.dialogContent,
      this.userHeaderName,
      this.userHeaderStatus,
      this.sendButton,
    );
  }

  updateUsersList(): void {
    this.contentClass.createAllUsers();
  }

  private createUserAsideElements(): void {
    this.contentClass.searchUser();
    this.userAside.append(this.userSearch, this.userList);
  }

  private createUserDialogElements(): void {
    this.dialogHeader.append(this.userHeaderName, this.userHeaderStatus);
    this.dialogForm.append(this.inputMessage, this.sendButton.getRootElement());
    this.dialogContainer.append(
      this.dialogHeader,
      this.dialogContent,
      this.dialogForm,
    );
  }

  private createContentElements(): void {
    this.createUserAsideElements();
    this.createUserDialogElements();
    this.content.append(this.userAside, this.dialogContainer);
  }

  getRootElement(): HTMLElement {
    this.createContentElements();
    return this.content;
  }
}

export const contentView = new ContentView();
