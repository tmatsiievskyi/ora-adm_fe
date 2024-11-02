/* eslint-disable react/display-name */ // TODO: fix
import { FC, PropsWithChildren } from 'react';
import { WithAuthProvider } from './auth.context';

const mergedProviders = (providers: FC<PropsWithChildren>[]) => {
  return providers.reduce((Acc, Provider) => {
    return (props) => {
      return (
        <Provider>
          <Acc {...props} />
        </Provider>
      );
    };
  });
};

export const WithAppContextProvider = mergedProviders([WithAuthProvider]);
