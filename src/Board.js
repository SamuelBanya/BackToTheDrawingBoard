import React, { useEffect, useState } from "react";
import Photo from "./Photo.js";
import "./index.css";

function Board() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/photos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  const photoToDisplay = photos.map((photo) => {
    return (
      <Photo
        key={photo["dataArray"][0]["photoName"]}
        className="imgClass"
        photoName={photo["dataArray"][0]["photoName"]}
        photoLink={photo["dataArray"][0]["photoLink"]}
      />
    );
  });

  return <div>{photoToDisplay}</div>;
}

export default Board;
