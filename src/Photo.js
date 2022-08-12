import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

function Photo({ photoName, photoLink, id, onDeletePhoto }) {
  function handleDeletePhoto(e) {
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
          width: 100,
          height: 100,
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
