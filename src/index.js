import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Try adding 'exact' tag to the route itself
// Try re-deploying it with '/about' in front
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
