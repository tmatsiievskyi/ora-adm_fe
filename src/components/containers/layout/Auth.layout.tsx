import type { FC, PropsWithChildren } from 'react';

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
      Auth Layout
    </div>
  );
};
