import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Upload from "./Upload";
import Board from "./Board";
import Theme from "./Theme";

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
    <Route exact path="/">
    <About />
    </Route>
    <Route exact path="/upload">
    <Upload />
    </Route>
    <Route exact path="/board">
    <Board />
    </Route>
    <Route exact path="/theme">
    <Theme />
    </Route>
    </Switch>
    </div>
  );
}
export default App;
