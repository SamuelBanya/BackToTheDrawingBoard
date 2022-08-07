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

  return (
    <Draggable>
      <div>
        {photos.map((photo) => {
          console.log("photo: ", photo);
          // console.log(
          // 'photo["photoArray"]["photoName"]: ',
          // photo["photoArray"]["photoName"]
          // );
          return (
            <Resizable
              // 'photos' is an array of objects
              // Each 'photo' object contains a 'dataArray' array that also contains an object
              // TODO: Figure out how to actually determine the 'key' value since its so nested:
              // key={photos["dataArray"][photo]["photoName"]}
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
          );
        })}
      </div>
    </Draggable>
  );
}
//   );
// }

export default Board;

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(<Board />, document.querySelector("#root"));
