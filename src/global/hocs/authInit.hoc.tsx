import { FC } from 'react';
import { Navigate } from 'react-router-dom';

export const WithAuthInitCheck: FC = () => {
  console.log('auth checked'); // TODO: add check
  const loggedIn = true;

  if (!loggedIn) return <Navigate to='signIn' />;

  return <Navigate to='dashboard/complexes' />;
};
