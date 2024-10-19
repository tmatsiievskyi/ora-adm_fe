import { TNavItem, TNavItemsKeys } from '@global/types';
import { WithIcon } from '@components';

export const useSideNavigation = () => {
  const getNavigationItems = (keys: TNavItemsKeys) => {
    const data = keys.reduce((acc, itemName) => {
      return [
        ...acc,
        {
          itemName,
          localizedValue: `${itemName}.local`,
          iconComp: WithIcon,
          href: `/dashboard/${itemName}`,
        },
      ];
    }, [] as TNavItem[]);

    return data;
  };

  return { getNavigationItems };
};
