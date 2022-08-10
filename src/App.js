import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Upload from "./Upload";
import Board from "./Board";
import Theme from "./Theme";

// <Route path="/theme" element={<Theme />} />
// <Theme appClass={appClass} />

// Commented section for 'App' component with 'appClass' prop:
// <div id="root">

// TODO:
// Actually utilize the 'Theme' component's 'appClass' property so that we can
// pass it down to each page which includes the following components:
// - About
// - Upload
// - Board

function App() {
  return (
    <div id="root">
      <NavBar />
      <Theme />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}
export default App;
