import { useState, useEffect } from 'react';

const themes = {
  default: {
    '--background': 'black',
    '--text': '#b7b7b7',
    '--holder': '#101010',
    '--theme-container-border': 'rgba(146, 146, 146, 0.481)',
    '--theme-secondary': 'white',
    '--theme-shadow': 'black',
    '--slider-background': '#353535'
  },
  theme1: {
    '--background': '#0F140F',
    '--text': '#C4EBC1',
    '--holder': '#1A1F1A',
    '--theme-container-border': 'rgba(146, 146, 146, 0.481)',
    '--theme-secondary': 'white',
    '--theme-shadow': 'black',
    '--slider-background': '#353535'
  },
  theme2: {
    '--background': '#131315',
    '--text': '#C5C8F8',
    '--holder': '#1B1C20',
    '--theme-container-border': 'rgba(146, 146, 146, 0.481)',
    '--theme-secondary': 'white',
    '--theme-shadow': 'black',
    '--slider-background': '#353535'
  },
  theme3: {
    '--background': '#1B1616',
    '--text': '#EF6666',
    '--holder': '#271E1E',
    '--theme-container-border': 'rgba(146, 146, 146, 0.481)',
    '--theme-secondary': 'white',
    '--theme-shadow': 'black',
    '--slider-background': '#353535'
  },
  theme4: {
    '--background': '#16120B',
    '--text': '#FFAC45',
    '--holder': '#221E17',
    '--theme-container-border': 'rgba(146, 146, 146, 0.481)',
    '--theme-secondary': 'white',
    '--theme-shadow': 'black',
    '--slider-background': '#353535'
  },
  theme5: {
    '--background': '#131519',
    '--text': '#CCE1FF',
    '--holder': '#1A1E23',
    '--theme-container-border': 'rgba(146, 146, 146, 0.481)',
    '--theme-secondary': 'white',
    '--theme-shadow': 'black',
    '--slider-background': '#353535'
  },
  theme6: {
    '--background': '#0D0F11',
    '--text': '#FFD458',
    '--holder': '#14161A',
    '--theme-container-border': 'rgba(146, 146, 146, 0.481)',
    '--theme-secondary': 'white',
    '--theme-shadow': 'black',
    '--slider-background': '#353535'
  },
  theme7: {
    '--background': '#1A171C',
    '--text': '#E3CEEC',
    '--holder': '#221D23',
    '--theme-container-border': 'rgba(146, 146, 146, 0.481)',
    '--theme-secondary': 'white',
    '--theme-shadow': 'black',
    '--slider-background': '#353535'
  },
  theme8: {
    '--background': '#181B19',
    '--text': '#BEEBD2',
    '--holder': '#1E2320',
    '--theme-container-border': 'rgba(146, 146, 146, 0.481)',
    '--theme-secondary': 'white',
    '--theme-shadow': 'black',
    '--slider-background': '#353535'
  }
};

const lightThemes = {
  default: {
    '--background': '#f3f3f3',
    '--text': '#000000',
    '--holder': '#e6e6e6',
    '--theme-container-border': 'rgba(0, 0, 0, 0.305)',
    '--theme-secondary': 'rgb(80, 77, 88)',
    '--theme-shadow': 'rgba(0, 0, 0, 0)',
    '--slider-background': '#bcbcbc'
  },
  theme1: {
    '--background': '#E8FFE8',
    '--text': '#546654',
    '--holder': '#D6F5D6',
    '--theme-container-border': 'rgba(0, 0, 0, 0.305)',
    '--theme-secondary': 'rgb(80, 77, 88)',
    '--theme-shadow': 'rgba(0, 0, 0, 0)',
    '--slider-background': '#bcbcbc'
  },
  theme2: {
    '--background': '#EFF2FF',
    '--text': '#222843',
    '--holder': '#E4E7FE',
    '--theme-container-border': 'rgba(0, 0, 0, 0.305)',
    '--theme-secondary': 'rgb(80, 77, 88)',
    '--theme-shadow': 'rgba(0, 0, 0, 0)',
    '--slider-background': '#bcbcbc'
  },
  theme3: {
    '--background': '#FFF4F4',
    '--text': '#FF8F8F',
    '--holder': '#FFEDED',
    '--theme-container-border': 'rgba(0, 0, 0, 0.305)',
    '--theme-secondary': 'rgb(80, 77, 88)',
    '--theme-shadow': 'rgba(0, 0, 0, 0)',
    '--slider-background': '#bcbcbc'
  },
  theme4: {
    '--background': '#FFF7EC',
    '--text': '#FDC97B',
    '--holder': '#FFEED6',
    '--theme-container-border': 'rgba(0, 0, 0, 0.305)',
    '--theme-secondary': 'rgb(80, 77, 88)',
    '--theme-shadow': 'rgba(0, 0, 0, 0)',
    '--slider-background': '#bcbcbc'
  },
  theme5: {
    '--background': '#F5F9FF',
    '--text': '#2C3440',
    '--holder': '#E4EFFF',
    '--theme-container-border': 'rgba(0, 0, 0, 0.305)',
    '--theme-secondary': 'rgb(80, 77, 88)',
    '--theme-shadow': 'rgba(0, 0, 0, 0)',
    '--slider-background': '#bcbcbc'
  },
  theme6: {
    '--background': '#FFFDF4',
    '--text': '#FFDB57',
    '--holder': '#FFF8E1',
    '--theme-container-border': 'rgba(0, 0, 0, 0.305)',
    '--theme-secondary': 'rgb(80, 77, 88)',
    '--theme-shadow': 'rgba(0, 0, 0, 0)',
    '--slider-background': '#bcbcbc'
  },
  theme7: {
    '--background': '#FCF5FF',
    '--text': '#574260',
    '--holder': '#F8E8FF',
    '--theme-container-border': 'rgba(0, 0, 0, 0.305)',
    '--theme-secondary': 'rgb(80, 77, 88)',
    '--theme-shadow': 'rgba(0, 0, 0, 0)',
    '--slider-background': '#bcbcbc'
  },
  theme8: {
    '--background': '#F5FFFA',
    '--text': '#5F8873',
    '--holder': '#E6F8EE',
    '--theme-container-border': 'rgba(0, 0, 0, 0.305)',
    '--theme-secondary': 'rgb(80, 77, 88)',
    '--theme-shadow': 'rgba(0, 0, 0, 0)',
    '--slider-background': '#bcbcbc'
  }
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('current_theme') || 'default';
    const savedDarkMode = localStorage.getItem('data-theme') === 'dark';
    
    setCurrentTheme(savedTheme);
    setIsDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    const themeSet = isDarkMode ? themes : lightThemes;
    const themeColors = themeSet[currentTheme] || themeSet.default;

    Object.entries(themeColors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });

    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('current_theme', currentTheme);
    localStorage.setItem('data-theme', isDarkMode ? 'dark' : 'light');
  }, [currentTheme, isDarkMode]);

  const changeTheme = (theme) => {
    if (theme.id === 'default') {
      setCurrentTheme('default');
      // Reset to default colors
      const defaultColors = isDarkMode ? themes.default : lightThemes.default;
      Object.entries(defaultColors).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
      });
      localStorage.removeItem('current_theme');
    } else {
      setCurrentTheme(theme.id);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return {
    currentTheme,
    isDarkMode,
    changeTheme,
    toggleDarkMode
  };
};