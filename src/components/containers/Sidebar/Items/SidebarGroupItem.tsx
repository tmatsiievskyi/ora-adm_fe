import { FC } from 'react';
import { cnm } from '@global/utils';
import { TIconProps, TNavItem, TSidebarProps } from '@global/types';
import { WithLink } from 'components/Link';
import { Text } from 'tm-ui';
import { Translate } from 'components/Translate';

type TProps = { isActive?: boolean } & Pick<
  TSidebarProps,
  'classNameGroupItem' | 'isOpen'
> &
  TNavItem;

export const SidebarGroupItem: FC<TProps> = ({
  classNameGroupItem,
  iconComp,
  itemName,
  label,
  href,
  isActive,
  isOpen,
}) => {
  const Icon = iconComp;

  return (
    <li>
      <WithLink
        className={cnm(
          `inline-flex w-full px-3 py-2 items-center
          ${isActive ? 'bg-bkg [&>p]:text-primary [&>svg]:text-primary' : 'bg-bkg-sec [&>p]:text-bkg-sec-frg'}
          `,
          classNameGroupItem,
        )}
        to={href}
      >
        <Icon
          className='block mr-2 shrink-0'
          height={30}
          name={itemName as TIconProps['name']}
          width={30}
        />
        <Text
          className={`leading-tight origin-left duration-300 ${!isOpen && 'scale-0'}`}
          key={itemName}
          size='sm'
        >
          <Translate i18nKey={`${label}`} />
        </Text>
      </WithLink>
    </li>
  );
};
