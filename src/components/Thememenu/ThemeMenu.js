import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setColor, setMode } from '../../redux/actions/ThemeActions';
import './ThemeMenu.css';

// ======================= Mode Details ==================== /
const mode_settings = [
  {
    id: 'light',
    name: 'Light',
    background: 'light-background',
    class: 'theme-mode-light',
  },
  {
    id: 'dark',
    name: 'Dark',
    background: 'dark-background',
    class: 'theme-mode-dark',
  },
];

// ======================= Color Details ==================== /
const color_settings = [
  {
    id: 'blue',
    name: 'Blue',
    background: 'blue-color',
    class: 'theme-color-blue',
  },
  {
    id: 'red',
    name: 'Red',
    background: 'red-color',
    class: 'theme-color-red',
  },
  {
    id: 'purple',
    name: 'Purple',
    background: 'purple-color',
    class: 'theme-color-purple',
  },
  {
    id: 'green',
    name: 'Green',
    background: 'green-color',
    class: 'theme-color-green',
  },
  {
    id: 'orange',
    name: 'Orange',
    background: 'orange-color',
    class: 'theme-color-orange',
  },
];

// ==================== Function to check mouse click outside menu =================/
const clickOutsideMenu = (button_ref, menu_ref) => {
  document.addEventListener('mousedown', (e) => {
    // user clicks on the toggle button
    if (button_ref.current && button_ref.current.contains(e.target)) {
      menu_ref.current.classList.toggle('active');
    } else {
      // user clicks outside the button and menu
      if (menu_ref.current && !menu_ref.current.contains(e.target)) {
        menu_ref.current.classList.remove('active');
      }
    }
  });
};

const ThemeMenu = () => {
  const theme_button_ref = useRef(null);
  const theme_menu_ref = useRef(null);
  const [currentMode, setCurrentMode] = useState('light');
  const [currentColor, setCurrentColor] = useState('blue');

  clickOutsideMenu(theme_button_ref, theme_menu_ref);

  const openMenu = () => theme_menu_ref.current.classList.add('active');

  const closeMenu = () => theme_menu_ref.current.classList.remove('active');

  const dispatch = useDispatch();

  const setThemeMode = (mode) => {
    setCurrentMode(mode.id);
    localStorage.setItem('themeMode', mode.class);
    dispatch(setMode(mode.class));
  };

  const setThemeColor = (color) => {
    setCurrentColor(color.id);
    localStorage.setItem('themeColor', color.class);
    dispatch(setColor(color.class));
  };

  useEffect(() => {
    const modeClass = mode_settings.find(
      (item) => item.class === localStorage.getItem('themeMode')
    );

    const colorClass = color_settings.find(
      (item) => item.class === localStorage.getItem('themeColor')
    );

    if (modeClass !== undefined) setCurrentMode(modeClass.id);
    if (colorClass !== undefined) setCurrentColor(colorClass.id);
  }, []);

  return (
    <div>
      <button
        ref={theme_button_ref}
        className="dropdown-toggle"
        onClick={() => openMenu()}
      >
        <i className="bx bx-palette"></i>
      </button>
      <div ref={theme_menu_ref} className="theme-menu">
        <h4>Theme Settings</h4>
        <button className="theme-menu-close" onClick={() => closeMenu()}>
          <i className="bx bx-x"></i>
        </button>
        <div className="theme-menu-select">
          <span>Choose Mode</span>
          <ul className="mode-list">
            {mode_settings.map((item, index) => (
              <li key={index} onClick={() => setThemeMode(item)}>
                <div
                  className={`mode-list-color ${item.background} ${
                    item.id === currentMode ? 'active' : ''
                  }`}
                >
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="theme-menu-select">
          <span>Choose Color</span>
          <ul className="mode-list">
            {color_settings.map((item, index) => (
              <li key={index} onClick={() => setThemeColor(item)}>
                <div
                  className={`mode-list-color ${item.background} ${
                    item.id === currentColor ? 'active' : ''
                  }`}
                >
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeMenu;
