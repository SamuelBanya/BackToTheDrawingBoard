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

  // TODO:
  // Use 'probe-image-size' library to determine width and height of the image the user passed in:
  // https://github.com/nodeca/probe-image-size

  // NOTE: If I uncomment this section, I receive this error:
  // ERROR:
  // [error] Board.js: SyntaxError: 'await' is only allowed within async functions and at the top levels of modules. (33:16)
  // CONTINUED:
  // const probe = require("probe-image-size");
  // let result = await probe('http://example.com/image.jpg');

  // TODO:
  // Pass down 'handleDeletePhoto' callback function to each 'Photo' component
  // onDeletePhoto={handleDeletePhoto}

  const photoToDisplay = photos.map((photo) => {
    return (
      <div>
        <Photo
          key={photo["dataArray"][0]["photoName"]}
          photoName={photo["dataArray"][0]["photoName"]}
          photoLink={photo["dataArray"][0]["photoLink"]}
        />
      </div>
    );
  });

  return <div>{photoToDisplay}</div>;
}

export default Board;
