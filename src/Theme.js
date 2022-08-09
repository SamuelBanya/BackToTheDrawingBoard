import React, { useState, useEffect } from "react";

// Based upon this lab:
// https://github.com/SamuelBanya/react-hooks-state-and-events-lab

function Theme() {
  const [theme, setTheme] = useState("");

  function changeTheme(event) {
    console.log("event.target.value: ", event.target.value);
    setTheme(event.target.value);
  }

  // Set the default theme to 'App light' with 'useEffect' hook:
  useEffect(() => {
    setTheme("App light");
  }, []);

  let appClass = theme;

  // TODO: I need to somehow send up the 'className' prop up to 'App.js' so that all components can
  // be rendered with this related 'appClass' property
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
    </div>
  );
}

export default Theme;
