import "./button.scss";

class Button {
  private button: HTMLButtonElement;

  constructor(
    className: string,
    commonClassName: string,
    text: string,
    type: string,
  ) {
    this.button = document.createElement("button");
    this.button.classList.add(className);
    this.button.classList.add(commonClassName);
    this.button.setAttribute("type", `${type}`);
    this.button.textContent = text;
  }

  getRootElement(): HTMLButtonElement {
    return this.button;
  }

  setDisabled(disabled: boolean): void {
    if (disabled) {
      this.button.setAttribute("disabled", "disabled");
    } else {
      this.button.removeAttribute("disabled");
    }
  }

  onClick(callback: () => void): void {
    this.button.addEventListener("click", callback);
  }

  handleUpdateButtonClick(callback: () => void): void {
    this.button.addEventListener("click", callback);
  }

  removeEventListener(eventType: string, callback: () => void): void {
    this.button.removeEventListener(eventType, callback);
  }
}

export default Button;
