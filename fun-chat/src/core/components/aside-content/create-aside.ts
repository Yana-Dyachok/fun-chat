import { IUserIsLogined } from "../../../types/interfaces";

export const createUserItem = (
  user: IUserIsLogined,
  count: number,
): HTMLElement => {
  const userItem = document.createElement("li");
  userItem.classList.add("aside-user__item");

  const userStatus = document.createElement("div");
  userStatus.classList.add(
    "aside-user__status",
    `${user.isLogined ? "active" : "inactive"}`,
  );
  const userName = document.createElement("label");
  userName.classList.add("aside-user__name");
  userName.textContent = user.login;
  const userMessages = document.createElement("label");
  userMessages.classList.add("aside-user__messages");
  if (count > 0) userMessages.classList.add("has-messages");
  userMessages.textContent = `${count > 0 ? count : ""}`;
  userItem.append(userStatus, userName, userMessages);
  return userItem;
};

export const createUserSearch = (): HTMLInputElement => {
  const userSearch = document.createElement("input");
  userSearch.classList.add("aside-user__search");
  userSearch.placeholder = "Search";
  return userSearch;
};

export const createUserAside = (): HTMLElement => {
  const userAside = document.createElement("aside");
  userAside.classList.add("aside-user");
  return userAside;
};
export const createUserList = (): HTMLElement => {
  const userList = document.createElement("ul");
  userList.classList.add("aside-user__list");
  return userList;
};
