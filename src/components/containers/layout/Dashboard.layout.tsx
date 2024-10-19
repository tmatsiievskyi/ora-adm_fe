import { type FC, type PropsWithChildren } from 'react';
import { navItems } from '@global/constants';
import { WithHeader } from '../Header';
import { WithSidebar } from '../Sidebar';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-[100dvh] flex flex-col font-comfortaa'>
      <WithHeader />

      <div className='flex-auto flex'>
        <WithSidebar navItemsKeys={navItems} />
        <main className='p-2 bg-background w-full'>{children}</main>
      </div>
    </div>
  );
};
