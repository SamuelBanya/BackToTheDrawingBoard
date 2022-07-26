import NavBar from "./NavBar.js";
import React from "react";

function Board() {
  return (
    <div>
      <NavBar />
      <h2>Board</h2>
      <label for="sortSelect">Sort By Favorite Or Tag</label>
      <select id="favoriteSelect" name="">
        Favorite
      </select>
      <select id="tagSelect" name="">
        Tag
      </select>
    </div>
  );
}

export default Board;
