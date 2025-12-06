import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/spanish-immersion"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Spanish Immersion
        </NavLink>
        <NavLink
          to="/solo-retreats"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Solo Retreats
        </NavLink>
        <NavLink
          to="/jewish-water-rituals"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Jewish Water Rituals
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Login/Logout
        </NavLink>
      </nav>
    </header>
  );
}
