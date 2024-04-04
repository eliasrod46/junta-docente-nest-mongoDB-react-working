import "./NavBar.css";
import { NavLink as NavLinkReactRouter } from "react-router-dom";
import { NavLink } from "./NavLink";

export function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* must be red */}
            <NavLinkReactRouter to="/">Home</NavLinkReactRouter>
          </li>
          <li>
            {/* must be green */}
            <NavLink to="/search-page">Search</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
