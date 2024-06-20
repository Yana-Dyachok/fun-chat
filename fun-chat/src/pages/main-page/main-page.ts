import Page from "../../utils/page/page";
import Header from "../../core/components/header/header";
import { contentView } from "../../view/main-view/content-view";
import { createFooterElements } from "../../core/components/footer/footer";

class MainPage extends Page {
  static TextObject = {
    MainTitle: "Main Page",
  };

  private header: Header;

  constructor(id: string) {
    super(id);
    this.header = new Header();
  }

  render() {
    this.container.append(
      this.header.getRootElement(),
      contentView.getRootElement(),
      createFooterElements(),
    );
    return this.container;
  }
}

export default MainPage;
