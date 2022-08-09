import React, { useEffect, useState } from "react";
import Photo from "./Photo.js";
import "./style.css";

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

  return (
    <div>
      {photos.forEach((photo) => {
        console.log(
          'photo["dataArray"][0]["photoName"]: ',
          photo["dataArray"][0]["photoName"]
        );

        console.log(
          'photo["dataArray"][0]["photoLink"]: ',
          photo["dataArray"][0]["photoLink"]
        );

        <Photo
          photoName={photo["dataArray"][0]["photoName"]}
          photoLink={photo["dataArray"][0]["photoLink"]}
        />;
      })}
    </div>
  );
}

export default Board;
