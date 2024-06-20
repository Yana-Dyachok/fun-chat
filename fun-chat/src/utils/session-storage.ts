import { IUser } from "../types/interfaces";

class SessionStorage {
  public saveUser = (user: IUser): void => {
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  public getUser = (): IUser | null => {
    const user = sessionStorage.getItem("user");
    if (!user) return null;

    return JSON.parse(user);
  };

  public removeUser = (): void => {
    sessionStorage.removeItem("user");
  };

  public savePage = (page: string): void => {
    sessionStorage.setItem("page", page);
  };

  public getPage = (): string => {
    const page = sessionStorage.getItem("page");
    if (!page) return "";
    return page;
  };
}

export const st = new SessionStorage();
