import { QUERY_KEYS } from '@global/api/queryKeys';
import { API_ROUTES } from '@global/api/routes';
import { useAuthContext } from '@global/context/auth.context';
import { EApiMethods, TBEResp, TSubservice } from '@global/types';
import { AppError, sendAuthGuardedRequest } from '@global/utils';
import { useQuery } from '@tanstack/react-query';

export const useSubservices = () => {
  const authCtx = useAuthContext();
  const { data, isPending, error } = useQuery<TBEResp<TSubservice[]>, AppError>(
    {
      queryKey: [QUERY_KEYS.subservices],
      queryFn: () =>
        sendAuthGuardedRequest<unknown, TSubservice[]>(
          () => authCtx.dispatch({ type: 'signOut', payload: null }),
          EApiMethods.GET,
          API_ROUTES.subservices.all,
        ),
    },
  );

  return { data, isPending, error };
};
