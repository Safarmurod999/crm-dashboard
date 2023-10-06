import React from "react";

const SidebarItem = ({ icon, title, active }) => {
  const activeItem = active ? "active" : "";

  return (
    <div className="sidebar-item-wrapper">
      <div className={`sidebar-item ${activeItem}`}>
        <i className={icon}></i>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
