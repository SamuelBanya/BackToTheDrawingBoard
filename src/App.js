import NavBar from "./NavBar";
import { HashRouter, Route } from "react-router-dom";
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
    </div>
  );
}
export default App;
