import React, { useRef } from 'react';

import './Dropdown.css';

// ==================== Function to check mouse click outside menu =================/
const clickOutsideMenu = (button_ref, menu_ref) => {
  document.addEventListener('click', (e) => {
    // user clicks on the toggle button
    if (button_ref.current && button_ref.current.contains(e.target)) {
      menu_ref.current.classList.add('active');
    } else {
      // user clicks outside the button and menu
      if (menu_ref.current && !menu_ref.current.contains(e.target)) {
        menu_ref.current.classList.remove('active');
      }
    }
  });
};

const Dropdown = (props) => {
  const dropdown_button_ref = useRef(null);
  const dropdown_menu_ref = useRef(null);

  clickOutsideMenu(dropdown_button_ref, dropdown_menu_ref);
  return (
    <div className="dropdown">
      <button ref={dropdown_button_ref} className="dropdown-toggle">
        {props.icon ? <i className={props.icon}></i> : ''}
        {props.badge ? (
          <span className="dropdown-toggle-badge">{props.badge}</span>
        ) : (
          ''
        )}
        {props.userProfile ? props.userProfile() : ''}
      </button>
      <div ref={dropdown_menu_ref} className="dropdown-menu-content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ''}
        {props.renderFooter ? (
          <div className="dropdown-menu-footer">{props.renderFooter()}</div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Dropdown;
