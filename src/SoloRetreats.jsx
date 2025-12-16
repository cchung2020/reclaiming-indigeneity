import retreatsHero from "./assets/retreats-hero-sunset.jpg";
import retreatsAmenities from "./assets/retreats-amenities-creek3.jpg";
import retreatsRhythm from "./assets/retreats-rhythm-flower.jpg";
import { useTranslation } from "react-i18next";

export default function SoloRetreats() {
  const { i18n, t } = useTranslation();
  const amenities = t("retreats.amenitiesList", { returnObjects: true });

  return (
    <main aria-labelledby="retreats-title">
      <h1 className="page-title" id="retreats-title">
        {t("retreats.title")}
      </h1>

      <section className="hero">
        <img
          src={retreatsHero}
          alt="Sunset over Andean ridgelines near Casa Romero"
        />
      </section>

      <div className="flow">
        <section className="block text">
          <h2>{t("retreats.amenitiesHeading")}</h2>
          <ul>
            {amenities.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <figure className="block media">
          <img
            src={retreatsAmenities}
            alt="Shaded creek and stones for quiet reflection"
          />
        </figure>

        <figure className="block media">
          <img
            src={retreatsRhythm}
            alt="Wildflower detail evoking stillness and presence"
          />
        </figure>

        <section className="block text">
          <h2>{t("retreats.dailyHeading")}</h2>
          <p>
            {t("retreats.dailyBody")}
          </p>
        </section>

        <section className="block text">
          <h2>{t("retreats.bookHeading")}</h2>
          <div id="booking-widget-retreats"></div>
          <p>{t("retreats.bookBody")}</p>
        </section>
      </div>
    </main>
  );
}
