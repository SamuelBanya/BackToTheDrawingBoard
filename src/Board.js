import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

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

  // photos.map((photo) => {
  // console.log("Using .map() to go through each 'photo' from 'photos': ");
  // console.log("photo: ", photo);
  // });

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
      {photos.map((photo) => {
        console.log("Using .map() to go through each 'photo' from 'photos': ");
        console.log("photo: ", photo);
      })}
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
      >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </div>
  );
}

export default Board;
