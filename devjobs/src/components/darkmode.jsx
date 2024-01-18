import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(storedDarkMode);
      }, []);
    
      
      const toggleDarkMode = () => {
        const newDarkModeState = !isDarkMode;
        setIsDarkMode(newDarkModeState);
        localStorage.setItem('darkMode', newDarkModeState);
      };
    
      return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
          <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
          <button onClick={toggleDarkMode}>
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      );
    };
    
export default DarkModeToggle;