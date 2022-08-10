import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
// const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL";

function Photo({ photoName, photoLink }) {
  console.log("photoName (from Photo component): ", photoName);
  console.log("photoLink (from Photo component): ", photoLink);

  return (
    <Draggable>
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
      >
        <button>❌</button>
      </Resizable>
    </Draggable>
  );
}

export default Photo;
