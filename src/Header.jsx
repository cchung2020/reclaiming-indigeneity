import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { i18n, t } = useTranslation();
  
  return (
    <header>
      <nav aria-label="Main navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {t("nav.about")}
        </NavLink>
        <NavLink
          to="/spanish-immersion"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {t("nav.spanishImmersion")}
        </NavLink>
        <NavLink
          to="/solo-retreats"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {t("nav.soloRetreats")}
        </NavLink>
        <NavLink
          to="/jewish-water-rituals"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {t("nav.jewishWaterRituals")}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {t("nav.contact")}
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {t("nav.login")}
        </NavLink>
      </nav>
      <div className="lang-switch">
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button onClick={() => i18n.changeLanguage("he")}>HE</button>
      </div>
    </header>
  );
}
