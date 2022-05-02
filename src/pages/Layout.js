import { Outlet, Link } from "react-router-dom";
import logo from "../logo.svg";
import ninja from "../img/shuriken.png";
import Title from "../components/Title.js";
import Image from "../components/Image.js";

const Layout = () => {
  return (
    <>
      <header id="navbar">
        <Image src={ninja} alt="Good Ninja" />
        <Title text={"Shuriken"} />
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
