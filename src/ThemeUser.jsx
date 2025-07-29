import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext';

const ThemeUser = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext)

    const themeStyle = {
        backgroundColor : darkMode ? "#FF0000" : "#f1f1f1ff",
        color: darkMode ? "#ffffffff" : "#ff0000ff",
        minHeight: "100vh",
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    };

  return (
    <div style={themeStyle}>
      <h1>{darkMode ? "Dark Mode": "Light Mode"}</h1>
     <button onClick={toggleTheme}>toggle button</button>
    </div>
  )
}

export default ThemeUser
