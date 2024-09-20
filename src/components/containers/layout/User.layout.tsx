import type { FC, PropsWithChildren } from 'react';

export const UserLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
      User Layout
    </div>
  );
};
