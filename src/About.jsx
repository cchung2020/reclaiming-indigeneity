import { Link } from "react-router-dom";
import aboutHero from "./assets/about-hero-valley.jpg";
import aboutPurpose from "./assets/about-purpose-hillside.jpg";
import aboutWhere from "./assets/about-where-creek.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { i18n, t } = useTranslation();

  return (
    <main aria-labelledby="about-title">
      <h1 className="page-title" id="about-title">
        {t("about.title")}
      </h1>

      <section className="hero">
        <img
          src={aboutHero}
          alt={t("about.heroAlt")}
        />
      </section>

      <div className="flow">
        <section className="block text">
          <h2>{t("about.purposeHeading")}</h2>
          <p>
            {t("about.purposeBody")}
          </p>
        </section>

        <figure className="block media">
          <img
            src={aboutPurpose}
            alt={t("about.purposeImgALt")}
          />
        </figure>

        <figure className="block media">
          <img
            src={aboutWhere}
            alt={t("about.whereImgAlt")}
          />
        </figure>

        <section className="block text">
          <h2>{t("about.whereHeading")}</h2>
          <p>
            {t("about.whereBody")}
          </p>
        </section>

        <section className="block text">
          <h2>{t("about.missionHeading")}</h2>
          <p>
            {t("about.missionBody1")}
          </p>
          <p>
            {t("about.missionBody2")}
          </p>
        </section>

        <section className="block text">
          <h2>{t("about.approachHeading")}</h2>
          <p>
            {t("about.approachBody")}
          </p>
        </section>

        <section className="block text">
          <h2>{t("about.offeringsHeading")}</h2>
          <ul>
            <li>
              <Link to="/spanish-immersion" className="link-button inline">
                {t("about.offeringsSpanish")}
              </Link>{" "}
              {t("about.offeringsSpanishDesc")}
            </li>
            <li>
              <Link to="/solo-retreats" className="link-button inline">
                {t("about.offeringsSolo")}
              </Link>{" "}
              {t("about.offeringsSoloDesc")}
            </li>
            <li>
              <Link to="/jewish-water-rituals" className="link-button inline">
                {t("about.offeringsWater")}
              </Link>{" "}
              {t("about.offeringsWaterDesc")}
            </li>
          </ul>
        </section>

        <section className="block text">
          <h2>{t("about.whyHeading")}</h2>
          <p>
            {t("about.whyBody")}
          </p>
        </section>
      </div>
    </main>
  );
}
