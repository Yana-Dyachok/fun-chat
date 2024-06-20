import ResultValidation from "./result-validation";

class FormValidation extends ResultValidation {
  private isValidUserName: boolean = false;

  private isValidPassword: boolean = false;

  static userName: string = "";

  static password: string = "";

  setupValidation(): void {
    const userNameInput: HTMLInputElement | null = document.getElementById(
      "user-name",
    ) as HTMLInputElement;
    const passwordInput: HTMLInputElement | null = document.getElementById(
      "password",
    ) as HTMLInputElement;
    const errorUserName: HTMLDivElement | null =
      document.querySelector(".user-name__error");
    const errorPassword: HTMLDivElement | null =
      document.querySelector(".password__error");
    if (userNameInput) {
      userNameInput.addEventListener("input", () => {
        const { value } = userNameInput!;
        this.isValidUserName = /^[A-Z][a-zA-Z-]{2,}$/.test(value);
        if (this.isValidUserName) {
          this.validityIsTrue(userNameInput, errorUserName!);
          FormValidation.userName = value;
        } else {
          this.validityNameIsFalse(userNameInput, errorUserName!, value, 3);
        }
        this.toggleBtnDisabled();
      });
    }

    if (passwordInput) {
      passwordInput.addEventListener("input", () => {
        const { value } = passwordInput!;
        this.isValidPassword = /^(?=.*\d)(?=.*[A-Z]).{4,}$/.test(value);
        if (this.isValidPassword) {
          this.validityIsTrue(passwordInput, errorPassword!);
          FormValidation.password = value;
        } else {
          this.validityPasswordIsFalse(passwordInput, errorPassword!, value, 4);
        }
        this.toggleBtnDisabled();
      });
    }
  }

  toggleBtnDisabled(): void {
    const enterBtn: HTMLButtonElement | null =
      document.querySelector(".enter__btn");
    if (enterBtn) {
      if (!this.updateValidity(this.isValidUserName, this.isValidPassword)) {
        enterBtn.setAttribute("disabled", "disabled");
      } else {
        enterBtn.removeAttribute("disabled");
      }
    }
  }
}

export default FormValidation;
