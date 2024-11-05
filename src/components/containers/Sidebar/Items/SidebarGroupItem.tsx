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
          `flex items-start px-3 py-2 rounded-left-md relative justify-start
           hover:bg-bkg
          ${isActive ? 'bg-bkg [&>p]:text-primary [&>svg]:text-primary' : 'bg-bkg-sec [&>p]:text-bkg-sec-frg'}
          `,
          classNameGroupItem,
        )}
        to={href}
      >
        <Icon height={36} name={itemName as TIconProps['name']} width={36} />
        {isOpen && (
          <Text
            className='absolute left-14 top-1/2 leading-tight -translate-y-1/2'
            key={itemName}
            size='base'
          >
            {localizedValue}
          </Text>
        )}
      </WithLink>
    </li>
  );
};
