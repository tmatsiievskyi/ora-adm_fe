import {
  EApiMethods,
  TBEResp,
  TSignUpSchema,
  TUser,
  TUseSignUp,
} from '@global/types';
import { AppError } from '@global/utils';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from '@global/api/routes';
import { useApi } from '../useApi';

export const useSignUp = (): TUseSignUp => {
  const { sendRequest } = useApi();
  const navigate = useNavigate();
  const {
    mutate: mutationFn,
    isSuccess,
    error,
  } = useMutation<TBEResp<TUser>, AppError, TSignUpSchema, unknown>({
    mutationFn: (data) =>
      sendRequest<TSignUpSchema, TUser>(
        EApiMethods.POST,
        API_ROUTES.auth.signUp,
        data,
      ),
    onSuccess: () => {
      enqueueSnackbar(
        'Account has been created. You will be able to login after approve',
        { variant: 'success', autoHideDuration: 10000 },
      );
      navigate('/signIn');
    },
  });

  return { mutationFn, isSuccess, error };
};
