import { TUser } from '@global/types';

const USER_KEY = 'ora-adm_user';

export class UserLocalStorage {
  static getUser() {
    const user = localStorage.getItem(USER_KEY);

    return user ? (JSON.parse(user) as TUser) : undefined;
  }

  static setUser(user: TUser) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  static removeUser() {
    localStorage.removeItem(USER_KEY);
  }
}
