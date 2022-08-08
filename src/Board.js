import React, { useEffect, useState } from "react";
import "./style.css";

import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL";

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

  console.log("photos after useEffect() call: ", photos);

  console.log("typeof(photos): ", typeof photos);
  //
  // {photos.map((photo) => console.log("photo (from.map()): ", photo);)}
  //          : console.log("Null")}
  return (
    <Draggable>
      <div>
        {photos ? (
          photos.map((photo) => {
            console.log("photo (from.map()): ", photo);
            console.log("imageUrl: ", imageUrl);

            console.log(
              'photo["dataArray"][0]["photoName"]: ',
              photo["dataArray"][0]["photoName"]
            );
            console.log(
              'photo["dataArray"][0]["photoLink"]: ',
              photo["dataArray"][0]["photoLink"]
            );

            let photoLink = photo["dataArray"][0]["photoLink"];

            return (
              <Resizable
                defaultSize={{
                  width: 200,
                  height: 360,
                }}
                style={{
                  background: `url(${photoLink})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                lockAspectRatio={true}
              ></Resizable>
            );
          })
        ) : (
          <Resizable
            defaultSize={{
              width: 200,
              height: 360,
            }}
            style={{
              background: `url(${imageUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            lockAspectRatio={true}
          ></Resizable>
        )}
      </div>
    </Draggable>
  );
}

export default Board;
