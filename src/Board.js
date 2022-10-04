import React, { useEffect, useState } from "react";
import Photo from "./Photo.js";
import "./index.css";

function Board() {
  const [photos, setPhotos] = useState([]);

  function handleDeletePhoto(id) {
    const updatedPhotosArray = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedPhotosArray);
  }

  useEffect(() => {
    fetch("https://backtothedrawingboardjsonserver.onrender.com/photos", {
      method: "GET",
        headers: {
              "Content-Type": "application/json",
          },
      })
          .then((response) => response.json())
          .then((data) => {
        setPhotos(data);
      });
  }, [photos]);

  const photoToDisplay = photos.map((photo) => {
    return (
      <div>
        <Photo
          key={photo["id"]}
          id={photo["id"]}
          photoName={photo["dataArray"][0]["photoName"]}
          photoLink={photo["dataArray"][0]["photoLink"]}
          onDeletePhoto={handleDeletePhoto}
        />
      </div>
    );
  });

  return <div>{photoToDisplay}</div>;
}

export default Board;
