import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About";

// Try adding 'exact' tag to the route itself
// Try re-deploying it with '/about' in front

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
