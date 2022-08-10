import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const linkStyles = {
  display: "inline-block",
  width: "60px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#00fc8f",
  textDecoration: "none",
  fontWeight: "bold",
  color: "black",
};

// <NavLink
//         to="/theme"
//         style={linkStyles}
//         activestyle={{ background: "darkblue" }}
// >
//     Theme
// </NavLink>

function NavBar() {
  return (
    <div className="Navbar">
      <h1 className="AppHeader">Back & Drawing Board:</h1>
      <h2>An Image Reference Board Web App!</h2>
      <NavLink
        to="/"
        style={linkStyles}
        activestyle={{ background: "darkblue" }}
      >
        About
      </NavLink>
      <NavLink
        to="/upload"
        style={linkStyles}
        activestyle={{ background: "darkblue" }}
      >
        Upload
      </NavLink>
      <NavLink
        to="/board"
        style={linkStyles}
        activestyle={{ background: "darkblue" }}
      >
        Board
      </NavLink>
    </div>
  );
}

export default NavBar;
