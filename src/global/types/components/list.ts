import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type TListProps<TItem, As extends ElementType> = {
  items: TItem[];
  renderItem: (item: TItem) => ReactNode;
  as?: As;
};

export type TList<TItem, As extends ElementType> = TListProps<TItem, As> &
  Omit<ComponentPropsWithoutRef<As>, keyof TListProps<TItem, As>>;
