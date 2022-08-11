import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

function Photo({ photoName, photoLink, id, onDeletePhoto }) {
  console.log("photoName (from Photo component): ", photoName);
  console.log("photoLink (from Photo component): ", photoLink);

  function handleDeletePhoto(e) {
    console.log("handleDeleteImage() function called");
    console.log("e: ", e);
    let id = e.target.parentElement["id"];

    fetch(`http://localhost:3000/photos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Delete request success!");
        onDeletePhoto(id);
      });
  }

  return (
    <Draggable>
      <Resizable
        id={id}
        className="imgClass"
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
      >
        <button onClick={handleDeletePhoto}>❌</button>
      </Resizable>
    </Draggable>
  );
}

export default Photo;
