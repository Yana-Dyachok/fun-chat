export const createInputMessage = (): HTMLInputElement => {
  const inputMessage: HTMLInputElement | null = document.createElement("input");
  inputMessage.classList.add("dialog__input");
  inputMessage.placeholder = "Message";
  inputMessage.disabled = true;
  return inputMessage;
};

export const createArticle = (className: string): HTMLElement => {
  const article: HTMLElement | null = document.createElement("article");
  article.classList.add(className);
  return article;
};

export const createLabel = (className: string): HTMLElement => {
  const label: HTMLElement | null = document.createElement("label");
  label.classList.add(className);
  return label;
};

export const createDialogContent = (): HTMLElement => {
  const dialogContent: HTMLElement | null = document.createElement("article");
  dialogContent.classList.add("dialog__content");
  const contentText: HTMLElement | null = createLabel("dialog__label");
  contentText.textContent = "Send your first message";
  dialogContent.append(contentText);
  dialogContent.scrollTop =
    dialogContent.scrollHeight - dialogContent.clientHeight;
  return dialogContent;
};

export const createContentText = (): HTMLElement => {
  const contentText: HTMLElement | null = createLabel("dialog__label");
  contentText.textContent = "Send your first message";
  return contentText;
};
export const createDialogInputForm = (): HTMLFormElement => {
  const dialogForm: HTMLFormElement | null = document.createElement("form");
  dialogForm.classList.add("dialog__form");
  return dialogForm;
};

export const createDiv = (className: string): HTMLDivElement => {
  const div: HTMLDivElement | null = document.createElement("div");
  div.classList.add(className);
  return div;
};

export const createButton = (className: string): HTMLButtonElement => {
  const btn: HTMLButtonElement | null = document.createElement("button");
  btn.classList.add(className);
  return btn;
};
