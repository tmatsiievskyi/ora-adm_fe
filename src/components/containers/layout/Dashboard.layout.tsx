import { type FC, type PropsWithChildren } from 'react';
import { navItems } from '@global/constants';
import { WithHeader } from '../Header';
import { WithSidebar } from '../Sidebar';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-[100dvh] flex flex-col font-comfortaa'>
      <WithHeader />

      <div className='flex-auto flex h-[calc(100dvh-50px)]'>
        <WithSidebar navItemsKeys={navItems} />
        <main className='px-6 py-2 w-full h-full overflow-scroll bg-bkg text-bkg-frg'>
          {children}
        </main>
      </div>
    </div>
  );
};
