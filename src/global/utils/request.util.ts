import { EApiMethods, TBEResp } from '@global/types';
import { AuthLocalStorage } from '@global/libs/localStorage';
import { AppError } from './error.util';
// eslint-disable-next-line import/no-cycle
import { refreshAccessToken } from './token.util';

export const sendRequest = async <TBody = unknown, TResult = unknown>(
  method: EApiMethods,
  path: string,
  body?: TBody,
  authToken?: string | null,
  init?: RequestInit,
) => {
  const resp = await fetch(`${import.meta.env.VITE_HTTP_SERVER}/${path}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && { Authorization: `Bearer: ${authToken}` }),
      ...init?.headers,
    },
  });

  if (resp.status >= 400 || !resp.ok) {
    const respData = (await resp.json()) as TBEResp<null>;
    throw new AppError(`${method}:${path} has failed`, respData);
  }

  return (await resp.json()) as TBEResp<TResult>;
};

export const sendProtectedRequest = <TBody = unknown, TResult = unknown>(
  method: EApiMethods,
  path: string,
  body?: TBody,
  useRefreshToken: string | boolean | null = false,
  init?: RequestInit,
) => {
  const authToken = useRefreshToken
    ? AuthLocalStorage.getRefreshToken()
    : AuthLocalStorage.getAccessToken();

  if (!authToken) throw new Error('Auth token is missing');

  return sendRequest<TBody, TResult>(method, path, body, authToken, init);
};

export const sendAuthGuardedRequest = async <TBody = unknown, TResp = unknown>(
  userIsNotAuthCb: () => void,
  method: EApiMethods,
  path: string,
  body?: TBody,
  init?: RequestInit,
) => {
  try {
    return await sendProtectedRequest<TBody, TResp>(
      method,
      path,
      body,
      undefined,
    );
  } catch (error) {
    if (error instanceof AppError) {
      const parsedErrors = error.parsedResp.errors?.map((item) =>
        JSON.parse(item),
      );
      const isAuthTokenExpired = parsedErrors?.some(
        (item) => item.message === 'Token expired' && item.statusCode === 401,
      );

      if (isAuthTokenExpired) {
        try {
          await refreshAccessToken();
        } catch (e) {
          userIsNotAuthCb();
          throw e;
        }

        return sendProtectedRequest<TBody, TResp>(
          method,
          path,
          body,
          undefined,
          init,
        );
      }
    }

    throw error;
  }
};
