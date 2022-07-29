import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Upload from "./Upload";
import Board from "./Board";

//       <HashRouter>
//         <Route exact path="/about" component={About} />
//         <Route exact path="/upload" component={Upload} />
//         <Route exact path="/board" component={Board} />
//       </HashRouter>

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}
export default App;
