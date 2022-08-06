import React, { useState } from "react";

// Based upon this lab:
// https://github.com/SamuelBanya/react-hooks-state-and-events-lab

function Theme() {
  const [theme, setTheme] = useState("");
  const [isLight, setLightMode] = useState(false);

  function changeTheme(event) {
    // setTheme()
    console.log("event.target.value: ", event.target.value);
    setTheme(event.target.value);
  }

  function changeLightMode() {
    setLightMode((isLight) => !isLight);
  }

  let appClass = theme;

  return (
    <div className={appClass}>
      <h2>Theme</h2>
      <h3>Change the theme of the page:</h3>
      <label for="themeSelect">Choose a theme:</label>
      <select onChange={changeTheme} id="themeSelect" name="themeSelect">
        <option value="App light">Light</option>
        <option value="App dark">Dark</option>
        <option value="App wood">Wood</option>
        <option value="App retro">Retro</option>
      </select>
      <br />
      <br />
      <button onClick={changeLightMode}>
        {isLight ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default Theme;
