import { EApiMethods, TRefreshResult } from '@global/types';
import { API_ROUTES } from '@global/api';
import { AuthLocalStorage } from '@global/libs/localStorage';
// eslint-disable-next-line import/no-cycle
import { sendProtectedRequest } from './request.util';

let debouncedPromise: Promise<unknown> | null;
let debouncedResolve: (...args: unknown[]) => void;
let debouncedReject: (...args: unknown[]) => void;
let timeout: number;

export const refreshAccessToken = async () => {
  window.clearTimeout(timeout);

  if (!debouncedPromise) {
    debouncedPromise = new Promise((res, rej) => {
      debouncedResolve = res;
      debouncedReject = rej;
    });
  }

  timeout = window.setTimeout(() => {
    const executeLogic = async () => {
      const resp = await sendProtectedRequest<undefined, TRefreshResult>(
        EApiMethods.POST,
        API_ROUTES.auth.refresh,
        undefined,
        AuthLocalStorage.getRefreshToken(),
      );

      if (resp.data?.tokens.accessToken && resp.data?.tokens.refreshToken) {
        AuthLocalStorage.setAccessToken(resp.data?.tokens.accessToken);
        AuthLocalStorage.setRefreshToken(resp.data?.tokens.refreshToken);
      }
    };

    executeLogic().then(debouncedResolve).catch(debouncedReject);

    debouncedPromise = null;
  }, 200);

  return debouncedPromise;
};
