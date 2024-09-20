import { FC, PropsWithChildren } from 'react';

export const CollectionList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <p>CollectionnList</p>
      {children}
    </div>
  );
};
