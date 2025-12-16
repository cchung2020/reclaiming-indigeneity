import immersionHero from "./assets/immersion-hero-berries.jpg";
import immersionFocus from "./assets/immersion-focus-creek2.jpg";
import immersionIncluded from "./assets/immersion-included-cows.jpg";
import { useTranslation } from "react-i18next";

export default function SpanishImmersion() {
  const { i18n, t } = useTranslation();
  const immersionList = t("immersion.includedList", { returnObjects: true });

  return (
    <main aria-labelledby="immersion-title">
      <h1 className="page-title" id="immersion-title">
        {t("immersion.title")}
      </h1>

      <section className="hero">
        <img
          src={immersionHero}
          alt="Berries and leaves—colors of the Colombian highlands"
        />
      </section>

      <div className="flow">
        <section className="block text">
          <h2>{t("immersion.focusHeading")}</h2>
          <p>
            {t("immersion.focusBody")}
          </p>
        </section>

        <figure className="block media">
          <img
            src={immersionFocus}
            alt="Clear stream running over stones in Boyacá"
          />
        </figure>

        <figure className="block media">
          <img
            src={immersionIncluded}
            alt="Cows along a path in the Andean countryside"
          />
        </figure>

        <section className="block text">
          <h2>{t("immersion.includedHeading")}</h2>
          <ul>
            {immersionList.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="block text">
          <h2>{t("immersion.overviewHeading")}</h2>
          <p>
            {t("immersion.overviewBody")}
          </p>
        </section>

        <section className="block text">
          <h2>{t("immersion.stayHeading")}</h2>
          <p>
            {t("immersion.stayBody")}
          </p>
        </section>

        <section className="block text">
          <h2>{t("immersion.bookHeading")}</h2>
          <div id="booking-widget-immersion"></div>
          <p>{t("immersion.bookBody")}</p>
        </section>
      </div>
    </main>
  );
}
