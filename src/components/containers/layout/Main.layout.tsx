import type { FC, PropsWithChildren } from 'react';
import { WithHeader } from '../Header';
import { WithFooter } from '../Footer';
import { WithSidebar } from '../Sidebar';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <WithHeader />

      <WithSidebar />
      <main>{children}</main>

      <WithFooter />
    </>
  );
};
