import { EApiMethods, TBEResp, TSignOutResult } from '@global/types';
import { API_ROUTES } from '@global/api/routes';
import { AppError } from '@global/utils';
import { AuthLocalStorage, UserLocalStorage } from '@global/libs/localStorage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '@global/context/auth.context';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../useApi';

export const useSignOut = () => {
  const { sendProtectedRequest } = useApi();
  const authCtx = useAuthContext();
  const navigate = useNavigate();
  const quertClient = useQueryClient();
  const {
    mutate: mutationFn,
    isSuccess,
    error,
    reset,
  } = useMutation<TBEResp<TSignOutResult>, AppError, unknown, unknown>({
    mutationFn: () =>
      sendProtectedRequest<unknown, TSignOutResult>(
        EApiMethods.POST,
        API_ROUTES.auth.signOut,
      ),
    onSettled: () => {
      AuthLocalStorage.removeAccessToken();
      AuthLocalStorage.removeRefreshToken();
      UserLocalStorage.removeUser();
      authCtx.dispatch({ type: 'signOut', payload: null });
      quertClient.clear();
      navigate('/signIn');
    },
  });

  return { mutationFn, isSuccess, error, reset };
};
