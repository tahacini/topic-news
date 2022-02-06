import { NavLink } from "react-router-dom";

function DropDownMenu({ setCategory, setOpen }) {
  return (
    <div className="drop-down">
      <NavLink
        to={"/arts"}
        onClick={() => {
          setCategory("arts");
          setOpen(false);
        }}
        className={({ isActive }) => (isActive ? "active-nav" : "")}
      >
        Arts
      </NavLink>
      <NavLink
        to={"/fashion"}
        onClick={() => {
          setCategory("fashion");
          setOpen(false);
        }}
        className={({ isActive }) => (isActive ? "active-nav" : "")}
      >
        Fashion
      </NavLink>
      <NavLink
        to={"/travel"}
        onClick={() => {
          setCategory("travel");
          setOpen(false);
        }}
        className={({ isActive }) => (isActive ? "active-nav" : "")}
      >
        Travel
      </NavLink>
      <NavLink
        to={"/insider"}
        onClick={() => {
          setCategory("insider");
          setOpen(false);
        }}
        className={({ isActive }) => (isActive ? "active-nav" : "")}
      >
        Insider
      </NavLink>
      <NavLink
        to={"/business"}
        onClick={() => {
          setCategory("business");
          setOpen(false);
        }}
        className={({ isActive }) => (isActive ? "active-nav" : "")}
      >
        Business
      </NavLink>
    </div>
  );
}

export default DropDownMenu;
