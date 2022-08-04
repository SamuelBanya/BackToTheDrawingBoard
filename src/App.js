import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Upload from "./Upload";
import Board from "./Board";
import Theme from "./Theme";

// Utilized this blog post for the conversion to V6 style routing:
// https://sagarkudu.medium.com/migrate-react-routing-from-v5-to-v6-step-by-step-75399ac8dc4b

function App() {
  return (
    <div id="root">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/board" element={<Board />} />
        <Route path="/theme" element={<Theme />} />
      </Routes>
    </div>
  );
}
export default App;
