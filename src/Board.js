import React, { useEffect, useState } from "react";

function Board() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/photos")
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        setPhotos(data);
      });
  }, []);

  console.log("photos: ", photos);

  return (
    <div>
      <h2>Board</h2>
      <label htmlFor="sortSelect">Sort By Favorite Or Tag</label>
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
