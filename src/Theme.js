import React, { useState } from "react";

// Based upon this lab:
// https://github.com/SamuelBanya/react-hooks-state-and-events-lab

function Theme() {
  const [theme, setTheme] = useState("");

  function changeTheme(event) {
    // setTheme()
    console.log("event.target.value: ", event.target.value);
    setTheme(event.target.value);
  }

  return (
    <div className={theme}>
      <h2>Theme</h2>
      <h3>Change the theme of the page:</h3>
      <label for="themeSelect">Choose a theme:</label>
      <select onChange={changeTheme} id="themeSelect" name="themeSelect">
        <option value="App Light">Light</option>
        <option value="App Dark">Dark</option>
        <option value="App Wood">Wood</option>
        <option value="App Retro">Retro</option>
      </select>
    </div>
  );
}

export default Theme;
