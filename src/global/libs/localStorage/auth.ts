const ACCESS_TOKEN_KEY = 'ora-adm_accessToken';
const REFRESH_TOKEN_KEY = 'ora-adm_refreshToken';

export class AuthLocalStorage {
  static getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  static setAccessToken(token: string) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

  static removeAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  static getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  static setRefreshToken(token: string) {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  static removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}
