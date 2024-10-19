import { TNavItemsKeys, TSidebarProps } from '@global/types';
import { useSideNavigation } from '@global/hooks';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from './Sidebar.container';

type TProps = {
  navItemsKeys: TNavItemsKeys;
} & Omit<TSidebarProps, 'navItems' | 'isOpen' | 'handleOpen'>;

export const WithSidebar = ({ navItemsKeys, ...props }: TProps) => {
  const { getNavigationItems } = useSideNavigation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  const { pathname } = useLocation();

  const activeSection = pathname.split('/')[2];

  const nav = getNavigationItems(navItemsKeys);

  return (
    <Sidebar
      navItems={nav}
      {...props}
      activeSection={activeSection}
      handleOpen={handleOpen}
      isOpen={isOpen}
    />
  );
};
