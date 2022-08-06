import React from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import "./style.css";

import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL";

// NOTE:
// Because this example uses 'Class', I can't use 'useState', and actually have to opt for the 'this.setState()' function
// This is so that I can set each Class instance's state individually:
// https://reactjs.org/docs/hooks-state.html

// NOTE:
// I will also have to use this section of the React docs as a reference page for this idea
// so that I can use a 'Class' with 'useEffect()':
// https://reactjs.org/docs/hooks-effect.html

export default class Board extends React.Component {
  render = () => (
    <Draggable>
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
    </Draggable>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Board />, document.querySelector("#root"));
