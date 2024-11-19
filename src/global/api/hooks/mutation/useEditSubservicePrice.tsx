import { useMutation } from '@tanstack/react-query';
import { EApiMethods, TBEResp, TSubservice } from '@global/types';
import { API_ROUTES } from '@global/api/routes';
import { AppError } from '@global/utils';
import { TUpdateSubservicePriceSchema } from '@global/types/schema/subservice.schema';
import { useApi } from '../useApi';

export const useEditSubservicePrice = () => {
  const { sendAuthGuardedRequest } = useApi();

  const {
    mutate: mutationFn,
    data,
    isSuccess,
    error,
    isPending,
  } = useMutation<
    TBEResp<TSubservice>,
    AppError,
    TUpdateSubservicePriceSchema,
    unknown
  >({
    mutationFn: (clientData: { id: string; price: number }) =>
      sendAuthGuardedRequest(
        () => {},
        EApiMethods.PUT,
        API_ROUTES.subservices.updatePrice(clientData.id),
        { price: clientData.price },
      ),
  });

  return { mutationFn, data, isSuccess, error, isPending };
};
