import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Upload from "./Upload";
import Board from "./Board";
import Theme from "./Theme";

// <Route path="/theme" element={<Theme />} />

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
