import React from "react";
import { Link, useLocation } from "react-router-dom";

// import logo from "../../assets/images/logo-3.png";

import sidebar_items from "../../assets/commonData/sidebar_routes.json";
import SidebarItem from "./SidebarItem";

import "./Sidebar.css";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar sidebar-active">
      {/* <div className="sidebar-logo"> */}
      {/* <img src={logo} alt="company logo" /> */}
      {/* </div> */}
      {/* <strong>Dostonbek</strong> */}
      <div className="sidebar-logo">
        {/* <img src={logo} alt="company logo"  /> */}
        <span className="logo-text">
          Dostonbek
          {/* Cen<span>Ter</span> */}
        </span>
      </div>
      {sidebar_items.map((item, index) => {
        return (
          <Link to={item.route} key={index}>
            <SidebarItem
              title={item.display_name}
              icon={item.icon}
              active={pathname === item.route}
            />
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
