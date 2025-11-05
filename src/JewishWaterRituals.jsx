import waterHero from "./assets/water-hero-waterfall.jpg";
import waterPractice from "./assets/water-practice-creek4.jpg";
import waterRiver from "./assets/water-river-crossing.jpg";

export default function JewishWaterRituals() {
  return (
    <main>
      <h1 className="page-title">
        Jewish Water Rituals — Returning to the Flow of Creation
      </h1>

      <section className="hero">
        <img
          src={waterHero}
          alt="Waterfall and rocks—living waters of the highlands"
        />
      </section>

      <div className="flow">
        <section className="block text">
          <h2>About the Practice</h2>
          <p>
            The Jewish Water Rituals at Casa Romero invite participants to enter
            the sacred element of water as a living teacher. Rooted in the
            ancient tradition of <em>mikvah</em> and renewed through
            contemporary ecological awareness, these ceremonies are held
            outdoors at the river and natural springs on our property. Each
            immersion is guided by intention, preparation, and prayer—an
            embodied process of release and return.
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
          <h2>The River as Teacher</h2>
          <p>
            The waters that feed Casa Romero come from mountain springs known
            locally as
            <em> quebradas</em>—streams that have sustained human and
            more-than-human life for millennia. Immersions here are not
            symbolic; they are ecological acts of reciprocity. Each participant
            is invited to listen to the river’s rhythms, to offer gratitude, and
            to leave no trace beyond prayer and breath.
          </p>
        </section>

        <section className="block text">
          <h2>Decolonizing the Mikvah</h2>
          <p>
            Our approach reconnects the practice of immersion to the earth that
            sustains it. In many communities, water ritual has been separated
            from the land, confined to tiled pools and private walls. Here, the
            mountain streams of Boyacá become the vessel—reclaiming immersion as
            a dialogue with creation.
          </p>
        </section>

        <section className="block text">
          <h2>What to Expect</h2>
          <p>
            Participants begin with quiet reflection and intention-setting
            guided by a facilitator. The ritual may include song, spoken prayer,
            or silence depending on the needs of each person. Immersions are
            gender-inclusive and body-positive, grounded in consent, safety, and
            care.
          </p>
        </section>

        <section className="block text">
          <h2>Book a Water Ritual</h2>
          <div id="booking-widget-water"></div>
          <p>
            Individual and small-group immersions can be arranged year-round,
            weather permitting. Ceremonies are tailored for life transitions,
            healing journeys, or moments of spiritual renewal.
          </p>
        </section>
      </div>
    </main>
  );
}
