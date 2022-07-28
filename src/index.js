import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./About";
import Upload from "./Upload";
import Board from "./Board";
import { HashRouter, Routes, Route } from "react-router-dom";

// Try adding 'exact' tag to the route itself
// Try re-deploying it with '/about' in front
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
