class ResultValidation {
  validityIsTrue(
    inputElement: HTMLInputElement,
    errorElement: HTMLDivElement,
  ): void {
    inputElement.classList.remove("error");
    inputElement.classList.add("valid");
    errorElement.innerHTML = "";
  }

  validityNameIsFalse(
    inputElement: HTMLInputElement,
    errorElement: HTMLDivElement,
    value: string,
    validLength: number,
  ): void {
    inputElement.classList.add("error");
    inputElement.classList.remove("valid");
    const errorArray: boolean[] = [
      /^[A-Z]/.test(value),
      /^[A-Za-z-]*$/.test(value),
      value.length >= validLength,
    ];

    const errorMessages: string[] = [
      "* The first letter must be capitalized",
      "* Only English letters and hyphens are allowed",
      `* At least ${validLength} characters long`,
    ];

    for (let i = errorElement.children.length; i < 3; i += 1) {
      errorElement.append(document.createElement("p"));
    }

    for (let i = 0; i < 3; i += 1) {
      errorElement.children[i].textContent = !errorArray[i]
        ? errorMessages[i]
        : "";
    }
  }

  validityPasswordIsFalse(
    inputElement: HTMLInputElement,
    errorElement: HTMLDivElement,
    value: string,
    validLength: number,
  ): void {
    inputElement.classList.add("error");
    inputElement.classList.remove("valid");

    const errorPassword: boolean[] = [
      /^(?=.*\d)/.test(value),
      /^(?=.*[A-Z])/.test(value),
      value.length >= validLength,
    ];

    const errorMessagesPassword: string[] = [
      "* At least 1 number (0-9)",
      "* At least 1 uppercase English letter",
      `* At least ${validLength} characters long`,
    ];

    for (let i = errorElement.children.length; i < 3; i += 1) {
      errorElement.append(document.createElement("p"));
    }

    for (let i = 0; i < 3; i += 1) {
      errorElement.children[i].textContent = !errorPassword[i]
        ? errorMessagesPassword[i]
        : "";
    }
  }

  updateValidity(isValidFirst: boolean, isValidSecond: boolean): boolean {
    return isValidFirst && isValidSecond;
  }
}

export default ResultValidation;
