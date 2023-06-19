import React from "react";
import Footer from "../components/Footer";
import FutureLine from "../components/FutureLine";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Testimonials from '../components/Testimonials'
import LoiBanner from "../components/LoiBanner";
import Contact from "./Contact";
//import DotFeature from "./DotFeature";
import HowWeDo from "./HowWeDo";
import WhoAre from "./WhoAre";
import Incubated from "../components/Incubated";
import ProblemStatement from "../components/ProblemStatement";

function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <LoiBanner />
      <Incubated />
      <Slider />
      <Testimonials />
      <WhoAre />
      <HowWeDo />
      <FutureLine />
      <Contact />
      {/* <DotFeature /> */}
      <Footer />
    </>
  );
}

export default Home;
