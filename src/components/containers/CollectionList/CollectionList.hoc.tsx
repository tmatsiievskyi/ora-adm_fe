import { FC, PropsWithChildren } from 'react';
import { CollectionList } from './CollectionList';

export const WithCollectionList: FC<PropsWithChildren> = ({ children }) => {
  return <CollectionList>{children}</CollectionList>;
};
