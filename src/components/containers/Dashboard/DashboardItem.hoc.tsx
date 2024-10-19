import { PropsWithChildren, FC } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardHeader } from './Items';

export const WithDashboardItem: FC<PropsWithChildren> = ({ children }) => {
  const { action } = useParams();

  return (
    <div>
      <DashboardHeader action={action} />
      {children}
    </div>
  );
};
