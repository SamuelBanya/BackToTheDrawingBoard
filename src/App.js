import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Upload from "./Upload";
import Board from "./Board";
import Theme from "./Theme";
import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("");

  function handleTheme(event) {
    setTheme(event.target.value);
  }

  useEffect(() => {
    setTheme("App light");
  }, []);

  return (
    <div id="root" className={theme}>
      <NavBar />
      <Theme setTheme={handleTheme} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}
export default App;
