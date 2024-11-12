import { QUERY_KEYS } from '@global/api/queryKeys';
import { API_ROUTES } from '@global/api/routes';
import { useAuthContext } from '@global/context/auth.context';
import {
  EApiMethods,
  TBEResp,
  TSubservice,
  TUseEmployeesProps,
} from '@global/types';
import { AppError, sendAuthGuardedRequest } from '@global/utils';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useSubservices = ({ page = 1, limit }: TUseEmployeesProps) => {
  const authCtx = useAuthContext();
  const { data, isPending, error, isError, isPlaceholderData, isFetching } =
    useQuery<TBEResp<Record<string, TSubservice[]>>, AppError>({
      queryKey: [QUERY_KEYS.subservices, { page, limit }],
      queryFn: () =>
        sendAuthGuardedRequest<unknown, Record<string, TSubservice[]>>(
          () => authCtx.dispatch({ type: 'signOut', payload: null }),
          EApiMethods.GET,
          `${API_ROUTES.subservices.all}?page=${page}&pageSize=${limit}`,
        ),
      placeholderData: keepPreviousData,
    });

  return { data, isPending, error, isError, isPlaceholderData, isFetching };
};
