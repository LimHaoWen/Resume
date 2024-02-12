import React from "react"
import { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md"

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        // Update the class on the body tag based on dark mode state
        document.documentElement.classList.toggle('dark', isDarkMode);
      }, [isDarkMode]);
    
  
    return (
        <div className={`sticky bottom-0 left-0 h-14 w-14 z-40 dark-mode-toggle`}>
            <button className="h-14 w-14" onClick={toggleDarkMode}>
            {isDarkMode ? <MdLightMode class="h-8 w-8 ml-3 fill-white"/> : <MdDarkMode class="h-8 w-8 ml-3"/>}
            </button>
        </div>
    );
  };
  
  export default DarkModeToggle