import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/spanish-immersion"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Spanish Immersion
        </NavLink>
        <NavLink
          to="/solo-retreats"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Solo Retreats
        </NavLink>
        <NavLink
          to="/jewish-water-rituals"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Jewish Water Rituals
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Contact
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Login/Logout
        </NavLink>
      </nav>
    </header>
  );
}
