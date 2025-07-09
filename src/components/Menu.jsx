import React, { useState } from 'react';
import ThemeSelector from './ThemeSelector';
import './Menu.css';

const Menu = ({ 
  userStatus, 
  onThemeChange, 
  currentTheme, 
  isDarkMode, 
  onToggleDarkMode,
  is24Hour,
  onToggle24Hour 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemesVisible, setIsThemesVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleThemes = () => {
    setIsThemesVisible(!isThemesVisible);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const showProFeatures = userStatus === '' || userStatus.includes('PRO');
  const showBasicFeatures = userStatus.includes('BASIC') || showProFeatures;

  return (
    <>
      <div className="menu1">
        <label className="theme-switch">
          <input 
            type="checkbox" 
            checked={isDarkMode}
            onChange={onToggleDarkMode}
            className="plus-minus"
          />
        </label>

        <svg 
          className="menu-toggle"
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg" 
          width="25" 
          height="25"
          fill="none" 
          viewBox="0 0 16 16"
        >
          <path 
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" 
          />
        </svg>
      </div>

      {isMenuOpen && (
        <div className="menu2">
          {showBasicFeatures && (
            <div className="subscription-badge basic" onClick={toggleThemes}>
              <span>BASIC</span>
            </div>
          )}

          {showProFeatures && (
            <div className="subscription-badge pro" onClick={toggleThemes}>
              <span>PRO</span>
            </div>
          )}

          {!userStatus && (
            <a href="/upgrade">
              <div className="upgrade-button">
                <span>UPGRADE</span>
              </div>
            </a>
          )}

          <div className="menu-controls">
            <label className="control-item">
              <span>24H Format</span>
              <input 
                type="checkbox" 
                checked={is24Hour}
                onChange={onToggle24Hour}
                className="switch"
              />
            </label>
          </div>

          <svg 
            className="fullscreen-btn"
            onClick={handleFullscreen}
            xmlns="http://www.w3.org/2000/svg" 
            width="25" 
            height="25"
            fill="currentColor" 
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
          </svg>
        </div>
      )}

      <ThemeSelector 
        isVisible={isThemesVisible}
        onThemeChange={onThemeChange}
        currentTheme={currentTheme}
      />
    </>
  );
};

export default Menu;