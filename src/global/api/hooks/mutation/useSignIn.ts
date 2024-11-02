import { AuthLocalStorage } from '@global/libs/localStorage';
import {
  EApiMethods,
  TBEResp,
  TSignInResult,
  TSignInSchema,
  TUseSignIn,
} from '@global/types';
import { AppError } from '@global/utils';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from '@global/api/routes';
import { useAuthContext } from '@global/context/auth.context';
import { useApi } from '../useApi';

export const useSignIn = (): TUseSignIn => {
  const { sendRequest } = useApi();
  const authCtx = useAuthContext();
  const navigate = useNavigate();
  const {
    mutate: mutationFn,
    isSuccess,
    error,
    reset,
  } = useMutation<TBEResp<TSignInResult>, AppError, TSignInSchema, unknown>({
    mutationFn: (data) =>
      sendRequest<TSignInSchema, TSignInResult>(
        EApiMethods.POST,
        API_ROUTES.auth.signIn,
        data,
      ),
    onSuccess: (respResult) => {
      const { data } = respResult;
      AuthLocalStorage.setAccessToken(data!.tokens.accessToken);
      AuthLocalStorage.setRefreshToken(data!.tokens.refreshToken);
      authCtx.dispatch({ type: 'signIn', payload: data!.user });
      navigate('/dashboard/complexes');
    },
  });

  return { mutationFn, isSuccess, error, reset };
};
