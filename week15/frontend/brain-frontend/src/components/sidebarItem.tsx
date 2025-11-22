import React from 'react';

interface SidebarItemProps {
  item: string;
  sidebarIcon: React.ReactElement;
}

const SidebarItem = ({ item, sidebarIcon } : SidebarItemProps) => {
  return (
    <div className="flex items-center gap-2 mt-5 ">
      {sidebarIcon}
      <span>{item}</span>
    </div>
  );
}

export default SidebarItem;