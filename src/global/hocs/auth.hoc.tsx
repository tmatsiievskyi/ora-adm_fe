import { useMe } from '@global/api';
import { ESpinnerType, WithSpinner } from 'components/Spinner';
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export const WithAuthCheck: FC<PropsWithChildren> = ({ children }) => {
  const { data, isPending, error } = useMe();
  const isLoggedIn = data && !error;

  if (isPending) return <WithSpinner type={ESpinnerType.FULL_SCREEN} />;

  if (!isLoggedIn) {
    return <Navigate to='/signOut' />;
  }

  return children;
};
