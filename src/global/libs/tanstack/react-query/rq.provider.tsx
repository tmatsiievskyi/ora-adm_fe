import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { FC, PropsWithChildren, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppError } from '@global/utils';
import { enqueueSnackbar } from 'notistack';

export const WithReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            staleTime: 60 * 1000 * 60,
            retry: 0,
          },
        },
        queryCache: new QueryCache({
          onError: (error) => {
            if (error instanceof AppError) {
              const parsedErrors = error.parsedResp.errors?.map((item) =>
                JSON.parse(item),
              );
              const isAuthTokenExpired = parsedErrors?.some(
                (item) =>
                  item.message === 'Token expired' && item.statusCode === 401,
              );

              if (isAuthTokenExpired) return;
            }

            let errorMessage = 'Somethind went wrong';

            if (error instanceof AppError) {
              console.log(error.parsedResp.message);

              errorMessage = error.parsedResp.message ?? 'Somethind went wrong';
            }

            enqueueSnackbar(errorMessage, {
              variant: 'error',
            });
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            let errorMessage = 'Somethind went wrong';

            if (error instanceof AppError) {
              const parsedErrors = error.parsedResp.errors?.map((item) =>
                JSON.parse(item),
              );
              const isAuthTokenExpired = parsedErrors?.some(
                (item) =>
                  item.message === 'Token expired' && item.statusCode === 401,
              );

              console.log(error.parsedResp.message);

              errorMessage = error.parsedResp.message ?? 'Somethind went wrong';

              if (isAuthTokenExpired) return;
            }

            enqueueSnackbar(`Something went wrong: /d ${errorMessage}`, {
              variant: 'error',
            });
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children} <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
