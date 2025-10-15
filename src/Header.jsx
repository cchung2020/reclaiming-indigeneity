import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">About</NavLink>
        <NavLink to="/spanish-immersion">Spanish Immersion</NavLink>
        <NavLink to="/solo-retreats">Solo Retreats</NavLink>
        <NavLink to="/jewish-water-rituals">Jewish Water Rituals</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}