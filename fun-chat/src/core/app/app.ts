import InfoPage from "../../pages/info-page/info-page";
import MainPage from "../../pages/main-page/main-page";
import Page from "../../utils/page/page";
import LoginPage from "../../pages/login-page/login-page";
import FormValidation from "../components/form-validation/form-validation";
import ErrorPage from "../../pages/error-page/error-page";
import { state } from "../../state/state";

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId: string = "current-page";

  private formValidation: FormValidation;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === "main") {
      state.getUser().isLogined
        ? (page = new MainPage(idPage))
        : (window.location.hash = "login");
    } else if (idPage === "info") {
      page = new InfoPage(idPage);
    } else if (idPage === "login") {
      state.getUser().isLogined
        ? (window.location.hash = "main")
        : (page = new LoginPage(idPage));
    } else {
      page = new ErrorPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange(): void {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.formValidation = new FormValidation();
  }

  run() {
    App.renderNewPage("login");
    this.enableRouteChange();
    window.location.hash = "login";
    this.formValidation.setupValidation();
    window.addEventListener("hashchange", () => {
      this.formValidation.setupValidation();
    });
  }
}

export default App;
