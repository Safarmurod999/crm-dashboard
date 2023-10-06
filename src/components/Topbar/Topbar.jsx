import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

import "./Topbar.css";

import notifications from "../../assets/commonData/notifications.json";
import userMenu from "../../assets/commonData/user_menu.json";
import userImage from "../../assets/images/userImage.jpg";
import ThemeMenu from "../Thememenu/ThemeMenu";

// Current User Details //
const currentUser = {
  userName: "Susan Smith",
  image: userImage,
};

//=============== Function to Render User Details =================================/
const renderUser = (user) => (
  <div className="topbar-user">
    <div className="topbar-userimage">
      <img src={user.image} alt="userimage" />
    </div>
    <div className="topbar-username">{user.userName}</div>
  </div>
);

// =================== Function to Render Notification Items ===================== /
const renderNotificationItems = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

//=============== Function to Render User Details =================================/
const renderUserMenu = (item, index) => (
  <Link to="/" className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </Link>
);

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topbar-menu">
        <div className="topbar-menu-item">
          <Dropdown
            userProfile={() => renderUser(currentUser)}
            contentData={userMenu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topbar-menu-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItems(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topbar-menu-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
