import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="navbar">
      <h1>Back To The Drawing Board: An Image Reference Board Web App!</h1>
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
      <NavLink
        to="/theme"
        style={linkStyles}
        activestyle={{ background: "darkblue" }}
      >
        Theme
      </NavLink>
    </div>
  );
}

export default NavBar;
