import { TEmployee, TSignInSchema, TSignUpSchema, TUser } from '@global/types';
import { AppError } from '@global/utils';
import { UseMutateFunction } from '@tanstack/react-query';

export enum EApiMethods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
}

export type TMongoDoc = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TMutateFn<TInitData, TResultData, TError = Error> = {
  mutationFn: UseMutateFunction<TResultData, TError, TInitData, unknown>;
  isSuccess: boolean;
  error: AppError | null;
  reset?: () => void;
};

export type TBEResp<T> = {
  data: T | null;
  meta: Record<string, number> | null;
  errors: string[] | null;
  message: string | null;
};

export type TUseEmployees = {
  data: TBEResp<TEmployee[]> | undefined;
  isPending: boolean;
  error?: AppError | null;
};

export type TUseEmployeesProps = {
  page: number;
  limit: number;
};

export type TAuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type TRefreshResult = {
  tokens: TAuthTokens;
};

export type TSignInResult = {
  user: TUser;
  tokens: TAuthTokens;
};

export type TSignOutResult = TBEResp<string>;

export type TUseSignUp = TMutateFn<TSignUpSchema, TBEResp<TUser>>;
export type TUseSignIn = TMutateFn<
  TSignInSchema,
  TBEResp<TSignInResult>,
  AppError
>;
