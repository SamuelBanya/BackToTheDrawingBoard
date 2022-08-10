import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

// TODO: Need to pass in a props called 'onDeletePhoto' up to Board
// function Photo({ photoName, photoLink, onDeletePhoto }) {
function Photo({ photoName, photoLink }) {
  console.log("photoName (from Photo component): ", photoName);
  console.log("photoLink (from Photo component): ", photoLink);

  // TODO:
  // Need to model this behavior after 'ListingCard.js' and 'ListingsContainer.js'
  // in 'GregsList' lab:
  // https://github.com/samuelbanya/react-hooks-mock-code-challenge-gregslist
  // 'ListingCard.js' Component:
  // https://github.com/SamuelBanya/react-hooks-mock-code-challenge-gregslist/blob/master/src/components/ListingCard.js
  // 'ListingsContainer.js' Component:
  // https://github.com/SamuelBanya/react-hooks-mock-code-challenge-gregslist/blob/master/src/components/ListingsContainer.js

  function handleDeletePhoto(e) {
    console.log("handleDeleteImage() function called");
    console.log("e.target.value: ", e.target.value);
    console.log("e: ", e);
    // fetch(`http://localhost:3000/photos/${id}`, {
    // method: "DELETE",
    // })
    // .then((response) => response.json())
    // .then(() => {
    // console.log("Delete request success!");
    // onDeletePhoto(id);
    // });
  }

  return (
    <Draggable>
      <Resizable
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
