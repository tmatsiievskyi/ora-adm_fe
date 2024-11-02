import { EApiMethods, TBEResp, TEmployee } from '@global/types';
import { useQuery } from '@tanstack/react-query';
import { API_ROUTES } from '@global/api/routes';
import { useAuthContext } from '@global/context/auth.context';
import { sendAuthGuardedRequest } from '@global/utils';
import { AppError } from '../../../utils/error.util';
import { QUERY_KEYS } from '../../queryKeys';

export const useEmployees = () => {
  const authCtx = useAuthContext();
  const { data, isPending, error } = useQuery<TBEResp<TEmployee[]>, AppError>({
    queryKey: [QUERY_KEYS.employees],
    queryFn: () =>
      sendAuthGuardedRequest<unknown, TEmployee[]>(
        () => authCtx.dispatch({ type: 'signOut', payload: null }),
        EApiMethods.GET,
        API_ROUTES.employees.all,
      ),
  });

  return { data, isPending, error };
};
