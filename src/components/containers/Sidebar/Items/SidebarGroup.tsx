import { cnm } from '@global/utils';
import { TSidebarProps } from '@global/types';
import { SidebarGroupItem } from './SidebarGroupItem';

type TProps = {} & Pick<
  TSidebarProps,
  | 'navItems'
  | 'classNameGroup'
  | 'classNameGroupItem'
  | 'activeSection'
  | 'isOpen'
>;

export const SidebarGroup = ({
  navItems,
  classNameGroup,
  classNameGroupItem,
  activeSection,
  isOpen,
}: TProps) => (
  <section>
    <ul className={cnm(classNameGroup)}>
      {navItems.map((item) => {
        return (
          <SidebarGroupItem
            {...item}
            classNameGroupItem={classNameGroupItem}
            isActive={activeSection === item.itemName}
            isOpen={isOpen}
            key={item.itemName}
          />
        );
      })}
    </ul>
  </section>
);
