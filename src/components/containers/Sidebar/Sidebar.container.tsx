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
    <aside
      className={cnm(
        `py-1 ease-in duration-300 shadow-lg z-10 ${isOpen ? 'w-[250px]' : 'w-[60px]'}
          h-full overflow-scroll no-scrollbar 
          bg-bkg-sec text-bkg-frg flex flex-col`,
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
  );
};
