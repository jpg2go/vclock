import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Menu from './components/Menu';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const [userStatus, setUserStatus] = useState('');
  const [is24Hour, setIs24Hour] = useState(false);
  const { currentTheme, isDarkMode, changeTheme, toggleDarkMode } = useTheme();

  useEffect(() => {
    // Simulate checking user status from cookies or localStorage
    const status = localStorage.getItem('user_status') || '';
    setUserStatus(status);

    // Load 24-hour preference
    const saved24Hour = localStorage.getItem('is24Hour') === 'true';
    setIs24Hour(saved24Hour);
  }, []);

  const handleToggle24Hour = () => {
    const newValue = !is24Hour;
    setIs24Hour(newValue);
    localStorage.setItem('is24Hour', newValue.toString());
  };

  return (
    <div className="App">
      <Clock 
        is24Hour={is24Hour}
        hasFlipAnimation={true}
        userStatus={userStatus}
      />
      
      <Menu 
        userStatus={userStatus}
        onThemeChange={changeTheme}
        currentTheme={currentTheme}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        is24Hour={is24Hour}
        onToggle24Hour={handleToggle24Hour}
      />
    </div>
  );
}

export default App;