import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./About";
import Upload from "./Upload";
import Board from "./Board";
import { HashRouter } from "react-router-dom";

// Try adding 'exact' tag to the route itself
// Try re-deploying it with '/about' in front
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
