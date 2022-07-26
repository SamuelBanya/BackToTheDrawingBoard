import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";

function App() {
  return (
    <div>
      <Link to="/about">About</Link>
      <h2>Github Pages</h2>
      <h3>Deploying React to Github</h3>
      <NavBar />
    </div>
  );
}
export default App;
