import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return children ?? <Outlet />;
};
