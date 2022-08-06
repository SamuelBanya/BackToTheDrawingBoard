import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

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

        return (
          <Draggable
            key={photo["photoName"]}
            axis="x"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            scale={1}
          >
            <Resizable
              key={photo["photoName"]}
              defaultSize={{
                width: 200,
                height: 360,
              }}
              style={{
                background: `url(${photo["photoLink"]})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              lockAspectRatio={true}
            >
              <div>
                <div className="handle">Drag from here</div>
                <div>This readme is really dragging on...</div>
              </div>
            </Resizable>
          </Draggable>
        );
      })}
    </div>
  );
}

export default Board;
