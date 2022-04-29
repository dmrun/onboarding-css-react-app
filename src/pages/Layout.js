import { Outlet, Link } from "react-router-dom";
import logo from "../logo.svg";
import ninja from "../img/shuriken.png";

const Layout = () => {
  return (
    <>
      <header id="navbar">
        <img src={ninja} alt="Good Ninja" />
        <h2>Shuriken</h2>
        <nav>
          <ul id="navbar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/recent">Recent Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
