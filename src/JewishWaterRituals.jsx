import waterHero from "./assets/water-hero-waterfall.jpg";
import waterPractice from "./assets/water-practice-creek4.jpg";
import waterRiver from "./assets/water-river-crossing.jpg";
import { useTranslation } from "react-i18next";

export default function JewishWaterRituals() {
  const { i18n, t } = useTranslation();

  return (
    <main aria-labelledby="water-title">
      <h1 className="page-title" id="water-title">
        {t("water.title")}
      </h1>

      <section className="hero">
        <img
          src={waterHero}
          alt="Waterfall and rocks—living waters of the highlands"
        />
      </section>

      <div className="flow">
        <section className="block text">
          <h2>{t("water.aboutHeading")}</h2>
          <p>
          {t("water.aboutBody")}
          </p>
        </section>

        <figure className="block media">
          <img
            src={waterPractice}
            alt="Forest creek flowing over stones—place of immersion"
          />
        </figure>

        <figure className="block media">
          <img
            src={waterRiver}
            alt="Shallow creek crossing along a forest path"
          />
        </figure>

        <section className="block text">
          <h2>{t("water.riverHeading")}</h2>
          <p>
              {t("water.riverBody")}
          </p>
        </section>

        <section className="block text">
          <h2>{t("water.decolonizingHeading")}</h2>
          <p>
              {t("water.decolonizingBody")}
          </p>
        </section>

        <section className="block text">
          <h2>{t("water.expectHeading")}</h2>
          <p>
            {t("water.expectBody")}
          </p>
        </section>

        <section className="block text">
          <h2>{t("water.bookHeading")}</h2>
          <div id="booking-widget-water"></div>
          <p>
            {t("water.bookBody")}
          </p>
        </section>
      </div>
    </main>
  );
}
