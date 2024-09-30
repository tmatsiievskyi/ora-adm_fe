import type { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { TAuthContainers } from '@global/types';
import { WithAuthContainer } from '../Auth/Auth.hoc';

export const AuthLayout: FC<PropsWithChildren> = () => {
  const { pathname } = useLocation();

  const container = pathname.split('/')[1] as TAuthContainers;

  return (
    <div className='min-h-[100dvh] bg-background font-comfortaa'>
      <WithAuthContainer type={container} />
    </div>
  );
};
