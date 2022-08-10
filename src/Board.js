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

  // TODO: Figure out why the 'Photo' component is actually created

  return (
    <div>
      {photos ? (
        photos.forEach((photo) => {
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
        })
      ) : (
        <Photo
          photoName="Girl With The Pearl Earring"
          photoLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL"
        />
      )}
      <h2 className="Tagbar">Tags Present:</h2>
    </div>
  );
}

export default Board;
