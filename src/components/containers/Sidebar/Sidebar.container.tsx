import { TSidebarProps } from '@global/types';
import { cnm } from '@global/utils';
import { SidebarButton, SidebarGroup } from './Items';

export const Sidebar = ({
  navItems,
  classNameWrapper,
  classNameGroup,
  classNameGroupItem,
  activeSection,
  isOpen,
  handleOpen,
}: TSidebarProps) => {
  return (
    <div
      className={`border-r ease-in duration-300
        ${isOpen ? 'min-w-[200px] w-[200px]' : 'min-w-[60px] w-[60px]'}`}
    >
      <aside
        className={cnm(
          'flex flex-col flex-shrink-0  w-full h-full overflow-scroll no-scrollbar',
          classNameWrapper,
        )}
      >
        <SidebarGroup
          activeSection={activeSection}
          classNameGroup={classNameGroup}
          classNameGroupItem={classNameGroupItem}
          isOpen={isOpen}
          navItems={navItems}
        />
        <SidebarButton handleOpen={handleOpen} isOpen={isOpen} />
      </aside>
    </div>
  );
};
