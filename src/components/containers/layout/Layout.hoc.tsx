import { PropsWithChildren, FC } from 'react';
import { Outlet } from 'react-router-dom';

import type { TLayouts } from '@/types/containers';
import { AuthLayout } from './Auth.layout';
import { MainLayout } from './Main.layout';
import { UserLayout } from './User.layout';

type TWithLayoutProps<T = TLayouts> = PropsWithChildren<{ layout: T }>;

const layouts = {
  auth: AuthLayout,
  main: MainLayout,
  user: UserLayout,
} satisfies Record<TLayouts, FC>;

export const WithLayout: FC<TWithLayoutProps<TLayouts>> = ({
  layout,
  children,
}) => {
  const LayoutComponent = layouts[layout] ?? MainLayout;

  return <LayoutComponent>{children ?? <Outlet />}</LayoutComponent>;
};
