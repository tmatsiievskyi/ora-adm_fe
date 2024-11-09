import { TList } from '@global/types';
import { ElementType } from 'react';
import { ListComponent } from './List.component';

export const WithList = <TItem, As extends ElementType>(
  props: TList<TItem, As>,
) => {
  return <ListComponent {...props} />;
};
