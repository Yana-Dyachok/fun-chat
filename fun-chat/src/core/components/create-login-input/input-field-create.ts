import "./input_field.scss";

export const createInput = (type: string, id: string): HTMLInputElement => {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.classList.add("login__input");
  input.required = true;
  return input;
};

export const createLabel = (
  forLabel: string,
  text: string,
): HTMLLabelElement => {
  const label = document.createElement("label");
  label.htmlFor = forLabel;
  label.textContent = text;
  return label;
};

export const createErrorElements = (classError: string): HTMLDivElement =>
  Object.assign(document.createElement("div"), {
    className: `login__error ${classError}`,
  });
