import React from "react";

// Based upon this lab:
// https://github.com/SamuelBanya/react-hooks-state-and-events-lab

function Theme({ setTheme }) {
  return (
    <div>
      <h2>Theme</h2>
      <h3>Change the theme of the page:</h3>
      <label htmlFor="themeSelect">Choose a theme:</label>
      <select onChange={setTheme} id="themeSelect" name="themeSelect">
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
