import LogoutButton from "./logout-button/logout_button";
import InfoButton from "../info-btn/info-btn";
import "./header.scss";
import { state } from "../../../state/state";

class Header {
  private header: HTMLElement;

  private logoutButton: LogoutButton;

  private infoButton: InfoButton;

  constructor() {
    this.header = document.createElement("header");
    this.header.classList.add("header");
    this.logoutButton = new LogoutButton();
    this.infoButton = new InfoButton();
  }

  private createHeaderElements(): void {
    const article = document.createElement("article");
    article.classList.add("header__article");
    const userName = document.createElement("label");
    userName.classList.add("header__label", "header__user-name");
    userName.textContent = `User: ${state.getUser().login}`;
    const title = document.createElement("label");
    title.classList.add("header__label", "header__title");
    title.textContent = "Fun Chat";
    article.append(userName, title);
    this.header.append(
      article,
      this.infoButton.getRootElement(),
      this.logoutButton.getRootElement(),
    );
  }

  getRootElement(): HTMLElement {
    this.createHeaderElements();
    return this.header;
  }
}

export default Header;
