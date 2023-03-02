import React from "react";

// Based upon this lab:
// https://github.com/SamuelBanya/react-hooks-state-and-events-lab

function Theme({ setTheme }) {
  return (
    <div className="Theme">
      <h3>Theme</h3>
      <p>Change the theme of the page:</p>
      <label htmlFor="themeSelect">Choose a theme:</label>
      <select onChange={setTheme} id="themeSelect" name="themeSelect">
        <option value="App light">Light</option>
        <option value="App dark">Dark</option>
        <option value="App wood">Wood</option>
        <option value="App retro">Retro</option>
        <option value="App nintendo">Nintendo</option>
      </select>
      <br />
      <br />
    </div>
  );
}

export default Theme;
