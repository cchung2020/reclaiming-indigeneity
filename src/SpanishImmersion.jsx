import immersionHero from "./assets/immersion-hero-berries.jpg";
import immersionFocus from "./assets/immersion-focus-creek2.jpg";
import immersionIncluded from "./assets/immersion-included-cows.jpg";

export default function SpanishImmersion() {
  return (
    <main>
      <h1 className="page-title">
        Spanish Immersion — Learn Through Land and Community
      </h1>

      <section className="hero">
        <img
          src={immersionHero}
          alt="Berries and leaves—colors of the Colombian highlands"
        />
      </section>

      <div className="flow">
        <section className="block text">
          <h2>Program Focus</h2>
          <p>
            The immersion is designed for all levels. Instruction integrates
            conversation, art, song, and ecological vocabulary so students learn
            to think in Spanish as they move through lived experience. Mornings
            may include guided study; afternoons are spent practicing with
            community members in the gardens or kitchen. The goal is fluency of
            relationship, not perfection of grammar.
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
          <h2>What’s Included</h2>
          <ul>
            <li>Daily language sessions with native teachers</li>
            <li>Farm-to-table meals and shared cooking practice</li>
            <li>Art and movement workshops for experiential learning</li>
            <li>Community conversation circles and field excursions</li>
            <li>Simple lodging and access to the surrounding trails</li>
          </ul>
        </section>

        <section className="block text">
          <h2>Overview</h2>
          <p>
            Our Spanish Immersion program is not a classroom. It is an embodied,
            relational way of learning that happens through everyday life on the
            land: cooking, gardening, storytelling, and shared laughter.
            Participants practice the language of daily care—how to ask for what
            the soil needs, how to tell stories around the fire, how to listen
            to the wind.
          </p>
        </section>

        <section className="block text">
          <h2>Stay & Community Life</h2>
          <p>
            Guests stay in rustic, comfortable rooms built with local materials.
            Wi-Fi is limited by design to encourage presence and slow living.
            Meals are shared family-style, emphasizing local produce and
            traditional preparation methods.
          </p>
        </section>

        <section className="block text">
          <h2>Book Your Immersion</h2>
          <div id="booking-widget-immersion"></div>
          <p>Sessions are available year-round with flexible durations.</p>
        </section>
      </div>
    </main>
  );
}
