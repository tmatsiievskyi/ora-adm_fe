import { UserLocalStorage } from '@global/libs/localStorage';
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export const WithAuthInitCheck: FC<PropsWithChildren> = () => {
  const user = UserLocalStorage.getUser();

  if (!user) return <Navigate to='signIn' />;

  return <Navigate to='dashboard/complexes' />;
};
