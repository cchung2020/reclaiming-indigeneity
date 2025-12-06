import retreatsHero from "./assets/retreats-hero-sunset.jpg";
import retreatsAmenities from "./assets/retreats-amenities-creek3.jpg";
import retreatsRhythm from "./assets/retreats-rhythm-flower.jpg";

export default function SoloRetreats() {
  return (
    <main aria-labelledby="retreats-title">
      <h1 className="page-title" id="retreats-title">
        Solo Retreats — Time for Stillness and Reconnection
      </h1>

      <section className="hero">
        <img
          src={retreatsHero}
          alt="Sunset over Andean ridgelines near Casa Romero"
        />
      </section>

      <div className="flow">
        <section className="block text">
          <h2>Amenities & Setting</h2>
          <ul>
            <li>Private cabin, casita, or yurt with mountain or garden view</li>
            <li>Outdoor spaces for meditation, writing, and art</li>
            <li>Shared kitchen and library with books on ecology and ritual</li>
            <li>River trail access for bathing and reflection</li>
            <li>Optional herbal steam or sweat-lodge experience</li>
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
          <h2>Daily Rhythm</h2>
          <p>
            Days unfold without clocks or noise. Mornings often begin with tea
            at sunrise, followed by writing, prayer, or walking meditation.
            Afternoons invite rest, journaling, or exploring the forest paths.
            Evenings bring simple shared meals or quiet stargazing over the
            valley.
          </p>
        </section>

        <section className="block text">
          <h2>Reserve Your Retreat</h2>
          <div id="booking-widget-retreats"></div>
          <p>Retreats may be scheduled for a few days or several weeks.</p>
        </section>
      </div>
    </main>
  );
}
