import { navItems } from '@global/constants';
import { TIconProps } from '../components';

export type TNavItemsKeys = typeof navItems;

export type TNavItem = {
  itemName: string;
  label: string;
  iconComp: React.FC<TIconProps>;
  href: string;
};

export type TSidebarProps = {
  navItems: TNavItem[];
  classNameWrapper?: string;
  classNameGroup?: string;
  classNameGroupItem?: string;
  activeSection?: string;
  isOpen: boolean;
  handleOpen: () => void;
};
