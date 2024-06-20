import { st } from "../../../utils/session-storage";
import Button from "../button/button";

class InfoButton extends Button {
  constructor() {
    super("info__btn", "btn", "Info", "button");

    this.onClick(() => {
      st.savePage(window.location.hash);
      window.location.hash = "info";
    });
  }
}

export default InfoButton;
