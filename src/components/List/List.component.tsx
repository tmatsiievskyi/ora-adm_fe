import { TListProps } from '@global/types';
import { ElementType } from 'react';

export const ListComponent = <TItem, As extends ElementType>({
  items,
  renderItem,
  as,
  ...rest
}: TListProps<TItem, As>) => {
  const Component = as ?? 'ul';

  return <Component {...rest}>{items.map(renderItem)}</Component>;
};
