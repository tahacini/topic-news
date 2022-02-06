import { NavLink } from "react-router-dom";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

function Nav({ setCategory }) {
  const [open, setOpen] = useState(false);
  let time;

  const handleEnter = () => {
    clearTimeout(time);
    setOpen(true);
  };

  const handleLeave = () => {
    time = setTimeout(() => {
      setOpen(false);
    }, 750);
  };

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
        <div
          onMouseEnter={() => handleEnter()}
          onMouseLeave={() => handleLeave()}
          className="more none-mobil"
        >
          More{" "}
          <i
            className={
              open
                ? "fas fa-chevron-up arrow-active"
                : "fas fa-chevron-up arrow"
            }
          ></i>
          <div className={open ? "open close" : "close"}>
            <DropDownMenu setCategory={setCategory} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
