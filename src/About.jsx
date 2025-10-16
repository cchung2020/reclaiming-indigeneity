import { Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      <h1>Casa Romero — A Decolonization Retreat Center in Boyacá, Colombia</h1>

      <section>
        <h2>Our Purpose</h2>
        <p>
          Casa Romero is a living experiment in remembering how to live well
          with the land. Rooted in Indigenous and Jewish ecological wisdom, it
          offers a space to unlearn the patterns of colonization through
          language, ritual, and relationship. The retreat center welcomes all
          who wish to reconnect with the earth and participate in healing the
          stories that separate people from place.
        </p>
      </section>

      <section>
        <h2>Mission & Vision</h2>
        <p>
          Our mission is to support personal and collective decolonization
          through immersive, land-based experiences that weave together cultural
          memory, traditional medicine, and spiritual practice.
        </p>
        <p>
          We envision a world in which every person remembers their belonging to
          the earth, speaks from ancestral integrity, and contributes to a
          network of communities grounded in reciprocity and care.
        </p>
      </section>

      <section>
        <h2>Where We Are</h2>
        <p>
          Nestled in the highlands of Boyacá, Colombia, Casa Romero sits on
          sacred Muisca territory surrounded by mountains, waterfalls, and rich
          soils. The property includes gardens, forested hillsides, and a
          freshwater spring, offering visitors a direct encounter with the
          vitality of the land. Our architecture blends traditional clay and
          bamboo with modern sustainability practices, keeping the footprint
          light and the air clean.
        </p>
      </section>

      <section>
        <h2>Our Approach</h2>
        <p>
          Everything that happens here—language immersion, ritual practice,
          herbal study, or solitude—is guided by the rhythm of the land. Days
          begin with quiet time for prayer or reflection, followed by work in
          the gardens, river walks, or study under the trees. Guests participate
          not as tourists but as temporary community members contributing to an
          ecosystem of learning.
        </p>
      </section>

      <section>
        <h2>Offerings</h2>
        <ul>
          <li>
            <Link to="/spanish-immersion">Spanish Immersion</Link> — learn
            language through relationship, art, and ecology.
          </li>
          <li>
            <Link to="/solo-retreats">Solo Retreats</Link> — restorative time
            for quiet, reflection, and reconnection with nature.
          </li>
          <li>
            <Link to="/jewish-water-rituals">Jewish Water Rituals</Link> —
            ritual practice at the confluence of tradition and landscape.
          </li>
        </ul>
      </section>

      <section>
        <h2>Why Colombia?</h2>
        <p>
          Colombia is a place of extraordinary biodiversity and cultural
          renewal. For generations, the region’s Indigenous and Afro-Colombian
          communities have preserved knowledge about balance and regeneration.
          By situating Casa Romero here, we honor those lineages and invite
          international visitors to engage with the heart of decolonization work
          in a living landscape of resistance and rebirth.
        </p>
      </section>
    </main>
  );
}
