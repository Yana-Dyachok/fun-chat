import Page from "../../utils/page/page";
import InfoButton from "../../core/components/info-btn/info-btn";
import EnterButton from "../../core/components/enter-btn/enter-btn";
import {
  createInput,
  createLabel,
  createErrorElements,
} from "../../core/components/create-login-input/input-field-create";

class LoginPage extends Page {
  static TextObject = {
    LoginTitle: "Login Page",
  };

  private infoBtn: InfoButton;

  private enterBtn: EnterButton;

  form: HTMLFormElement = document.createElement("form");

  constructor(id: string) {
    super(id);
    this.infoBtn = new InfoButton();
    this.enterBtn = new EnterButton();
  }

  render() {
    const wrapper: HTMLDivElement = document.createElement("div");
    wrapper.classList.add("wrapper");
    this.form.classList.add("login__form");
    this.form.append(
      createLabel("user-name", "Name:"),
      createInput("text", "user-name"),
      createErrorElements("user-name__error"),
      createLabel("password", "Password:"),
      createInput("password", "password"),
      createErrorElements("password__error"),
      this.enterBtn.getRootElement(),
    );

    wrapper.append(this.form, this.infoBtn.getRootElement());
    this.container.append(wrapper);
    return this.container;
  }
}

export default LoginPage;
