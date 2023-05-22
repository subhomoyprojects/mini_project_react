import { Link, Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
