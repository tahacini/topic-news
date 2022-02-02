import { Link } from "react-router-dom";

function Nav({ setCategory }) {
  return (
    <nav>
      <div className="nav-container text-shadow fs-300">
        <Link to={"home/1"} onClick={() => setCategory("home")}>
          Home
        </Link>
        <Link to={"world/1"} onClick={() => setCategory("world")}>
          World
        </Link>
        <Link to={"technology/1"} onClick={() => setCategory("technology")}>
          Technology
        </Link>
        <Link to={"movies/1"} onClick={() => setCategory("movies")}>
          Movies
        </Link>
        <Link to={"sports/1"} onClick={() => setCategory("sports")}>
          Sports
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
