import React from 'react';
import './ThemeSelector.css';

const ThemeSelector = ({ isVisible, onThemeChange, currentTheme }) => {
  const themes = [
    { id: 'default', name: 'Default' },
    { id: 'theme1', name: 'Green', colors: { bg: '#0F140F', holder: '#1A1F1A', text: '#C4EBC1' } },
    { id: 'theme2', name: 'Blue', colors: { bg: '#131315', holder: '#1B1C20', text: '#C5C8F8' } },
    { id: 'theme3', name: 'Red', colors: { bg: '#1B1616', holder: '#271E1E', text: '#EF6666' } },
    { id: 'theme4', name: 'Orange', colors: { bg: '#16120B', holder: '#221E17', text: '#FFAC45' } },
    { id: 'theme5', name: 'Sky', colors: { bg: '#131519', holder: '#1A1E23', text: '#CCE1FF' } },
    { id: 'theme6', name: 'Yellow', colors: { bg: '#0D0F11', holder: '#14161A', text: '#FFD458' } },
    { id: 'theme7', name: 'Purple', colors: { bg: '#1A171C', holder: '#221D23', text: '#E3CEEC' } },
    { id: 'theme8', name: 'Mint', colors: { bg: '#181B19', holder: '#1E2320', text: '#BEEBD2' } }
  ];

  const handleThemeClick = (theme) => {
    onThemeChange(theme);
  };

  if (!isVisible) return null;

  return (
    <div className="themes-container">
      {themes.map((theme) => (
        <div
          key={theme.id}
          className={`theme-circle ${theme.id} ${currentTheme === theme.id ? 'active' : ''}`}
          onClick={() => handleThemeClick(theme)}
          title={theme.name}
        >
          {theme.id === 'default' ? (
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
              <circle cx="22.5" cy="22.5" r="22.5" fill="var(--holder)" />
              <circle cx="22.5" cy="22.5" r="15" fill="var(--text)" />
            </svg>
          ) : (
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
              <path
                d="M22.9773 44.9545C25.8677 44.9545 28.7298 44.3852 31.4002 43.2791C34.0706 42.173 36.497 40.5517 38.5408 38.5079C40.5846 36.4641 42.2059 34.0377 43.312 31.3673C44.4181 28.6969 44.9874 25.8348 44.9874 22.9444C44.9874 20.054 44.4181 17.1919 43.312 14.5215C42.2059 11.8511 40.5846 9.42476 38.5408 7.38093C36.497 5.33711 34.0706 3.71585 31.4002 2.60974C28.7298 1.50363 25.8677 0.934325 22.9773 0.934325L22.9773 22.9444L22.9773 44.9545Z"
                fill={theme.colors?.text || 'var(--text)'}
              />
              <path
                d="M22.9775 0.934155C20.0871 0.934155 17.225 1.50346 14.5546 2.60957C11.8842 3.71568 9.45784 5.33694 7.41402 7.38076C5.37019 9.42459 3.74894 11.851 2.64283 14.5214C1.53672 17.1917 0.967408 20.0538 0.967408 22.9443C0.967408 25.8347 1.53672 28.6968 2.64283 31.3672C3.74894 34.0375 5.37019 36.4639 7.41402 38.5077C9.45784 40.5516 11.8842 42.1728 14.5546 43.2789C17.225 44.385 20.0871 44.9543 22.9775 44.9543L22.9775 22.9443L22.9775 0.934155Z"
                fill="var(--theme-secondary)"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;