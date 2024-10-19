import { PropsWithChildren, FC } from 'react';
import { Outlet } from 'react-router-dom';

import type { TLayouts } from '@/types/containers';
import { AuthLayout } from './Auth.layout';
import { DashboardLayout } from './Dashboard.layout';
import { UserLayout } from './User.layout';
import { DefaultLayout } from './Default.layout';

type TWithLayoutProps<T = TLayouts> = PropsWithChildren<{ layout: T }>;

const layouts = {
  default: DefaultLayout,
  auth: AuthLayout,
  dashboard: DashboardLayout,
  user: UserLayout,
} satisfies Record<TLayouts, FC>;

export const WithLayout: FC<TWithLayoutProps<TLayouts>> = ({
  layout,
  children,
}) => {
  const LayoutComponent = layouts[layout] ?? DefaultLayout;

  return <LayoutComponent>{children ?? <Outlet />}</LayoutComponent>;
};
