import Button from "../../core/components/button/button";

import "./popup.scss";

class CreatePopup {
  private okBtn: Button;

  constructor() {
    this.okBtn = new Button("popup__btn", "btn", "Ok", "button");
  }

  createPopupElements(text: string): void {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup__content");
    const popupText = document.createElement("h3");
    popupText.classList.add("popup__text");
    popupText.textContent = text[0].toUpperCase() + text.slice(1, text.length);
    popupContent.append(
      popupText,
      text !== "Сonnection to the server" ? this.okBtn.getRootElement() : "",
    );
    const popupBody = document.createElement("div");
    popupBody.classList.add("popup__body");
    popupBody.append(popupContent);
    popup.append(popupBody);
    document.body.append(popup);
    this.closePopup();
  }

  closePopup(): void {
    this.okBtn.onClick(() => {
      const popup: HTMLDivElement | null = document.querySelector(".popup");
      if (popup) {
        document.body.removeChild(popup);
      }
    });
  }

  deletePopup(): void {
    const popup: HTMLDivElement | null = document.querySelector(".popup");
    if (popup) {
      document.body.removeChild(popup);
    }
  }
}

export const popup = new CreatePopup();
