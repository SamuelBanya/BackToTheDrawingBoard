import React from "react";

function Board() {
  return (
    <div>
      <h1>Board</h1>
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
