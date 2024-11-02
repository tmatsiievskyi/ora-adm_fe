import { useQuery } from '@tanstack/react-query';
import { EApiMethods, TBEResp, TUser } from '@global/types';
import { QUERY_KEYS } from '@global/api/queryKeys';
import { API_ROUTES } from '@global/api/routes';
import { AppError } from '@global/utils';
import { UserLocalStorage } from '@global/libs/localStorage';
import { useApi } from '../useApi';

// const fetchMe = async () => {
//   const resp = await sendAuthGuardedRequest<undefined, TUser>(
//     () => {},
//     EApiMethods.GET,
//     API_ROUTES.users.me,
//   );

//   return resp.data!;
// };

export const useMe = (enabled: boolean = true) => {
  const { sendAuthGuardedRequest } = useApi();
  const {
    data: respResult,
    isPending,
    error,
    isSuccess,
  } = useQuery<TBEResp<TUser>, AppError>({
    queryKey: [QUERY_KEYS.me],
    queryFn: () =>
      sendAuthGuardedRequest<unknown, TUser>(
        () => {},
        EApiMethods.GET,
        API_ROUTES.users.me,
      ),
    enabled,
    select: (resp) => resp,
    refetchInterval: 1000 * 60,
    refetchIntervalInBackground: true,
  });

  if (isSuccess && respResult.data) {
    UserLocalStorage.setUser(respResult.data);
  }

  return { data: respResult, isPending, error };
};
