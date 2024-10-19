import { FC } from 'react';
import { cnm } from '@global/utils';
import { TIconProps, TNavItem, TSidebarProps } from '@global/types';
import { WithLink } from 'components/Link';
import { Text } from 'tm-ui';

type TProps = { isActive?: boolean } & Pick<
  TSidebarProps,
  'classNameGroupItem' | 'isOpen'
> &
  TNavItem;

export const SidebarGroupItem: FC<TProps> = ({
  classNameGroupItem,
  iconComp,
  itemName,
  localizedValue,
  href,
  isActive,
  isOpen,
}) => {
  const Icon = iconComp;

  //   ${isOpen ? 'justify-start' : 'justify-center'}

  return (
    <li>
      <WithLink
        className={cnm(
          `flex items-center py-2 px-4 rounded-md relative justify-start
        
          ${isActive ? 'bg-primary  [&>p]:text-primary-foreground [&>svg]:text-white' : 'bg-white'}
          `,
          classNameGroupItem,
        )}
        to={href}
      >
        <Icon height={25} name={itemName as TIconProps['name']} width={25} />
        {isOpen && (
          <Text
            className='absolute left-12 top-0 translate-y-1/2'
            key={itemName}
            size='sm'
          >
            {localizedValue}
          </Text>
        )}
      </WithLink>
    </li>
  );
};
