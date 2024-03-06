import React from 'react'
import "./ThemeSwitch.css"
import { useThemeContext } from '../contexts'

function ThemeSwitch() {
  const {themeMode, darkMode, lightMode} =  useThemeContext() ;

  const handleTheme = (e)=>{
    const darkModeStatus = e.currentTarget.checked;
    if(darkModeStatus) {
        darkMode()
    }else {
        lightMode()
    }
  }

  return (
    <label htmlFor="toggle" className='toggle-btn'>
        <input type="checkbox" name="" id="toggle" className='toggle-box' checked={themeMode === "dark"} onChange={handleTheme}/>
        <div className="toggle-btn-bg">
            <div className="toggle-circle"></div>
        </div>
    </label>
  )
}

export default ThemeSwitch