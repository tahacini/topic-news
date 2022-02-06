import { NavLink } from "react-router-dom";

function Nav({ setCategory }) {
  return (
    <nav>
      <div className="nav-container text-shadow fs-300">
        <NavLink
          to={"/home"}
          onClick={() => setCategory("home")}
          className={({ isActive }) => (isActive ? "active-nav" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/world"}
          onClick={() => setCategory("world")}
          className={({ isActive }) => (isActive ? "active-nav" : "")}
        >
          World
        </NavLink>
        <NavLink
          to={"/technology"}
          onClick={() => setCategory("technology")}
          className={({ isActive }) => (isActive ? "active-nav" : "")}
        >
          Technology
        </NavLink>
        <NavLink
          to={"/movies"}
          onClick={() => setCategory("movies")}
          className={({ isActive }) => (isActive ? "active-nav" : "")}
        >
          Movies
        </NavLink>
        <NavLink
          to={"/sports"}
          onClick={() => setCategory("sports")}
          className={({ isActive }) => (isActive ? "active-nav" : "")}
        >
          Sports
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
