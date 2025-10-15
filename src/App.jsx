import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer";
import About from "./About.jsx";
import SpanishImmersion from "./SpanishImmersion";
import SoloRetreats from "./SoloRetreats";
import JewishWaterRituals from "./JewishWaterRituals";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/spanish-immersion" element={<SpanishImmersion />} />
        <Route path="/solo-retreats" element={<SoloRetreats />} />
        <Route path="/jewish-water-rituals" element={<JewishWaterRituals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
