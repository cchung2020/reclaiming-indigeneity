import { NavLink } from "react-router-dom";
import { useState } from "react";


function LoginLogoutButton() {
  const [logged_in, setLoggedIn] = useState(false);
  const [button_txt, setButtonTxt] = useState("login")

  function toggle_logged_in() {
    if (logged_in) {
      setButtonTxt("logout");
    } else {
      setButtonTxt("login");
    }

    setLoggedIn(!logged_in);
  }

  return (
      <div onClick={toggle_logged_in}>
          {button_txt}
      </div>
  )
}

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
        <LoginLogoutButton />

      </nav>
    </header>
  );
}
