import { useMutation } from '@tanstack/react-query';
import { EApiMethods, TBEResp } from '@global/types';
import { AppError } from '@global/utils';
import { TGenerateQRSchema } from '@global/types/schema';
import { API_ROUTES } from '@global/api/routes';
import { useApi } from '../useApi';

export const useGenerateQR = () => {
  const { sendRequest } = useApi();

  const {
    mutate: mutationFn,
    data,
    isSuccess,
    error,
    isPending,
  } = useMutation<TBEResp<string>, AppError, TGenerateQRSchema, unknown>({
    mutationFn: (clienData) =>
      sendRequest(EApiMethods.POST, API_ROUTES.qr.generate, clienData),
  });

  return { mutationFn, data, isSuccess, error, isPending };
};
