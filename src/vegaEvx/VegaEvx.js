import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import SliderRouter from "../home/SliderRouter.js";
import Scroll from "../common/locomotiveScroll.js";

function VegaEvx() {
  return (
    <div data-scroll-section>
      <Hero className="hero-container">
        <Scroll />
        <HeroSection />
      </Hero>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const Hero = styled.div``;

export default VegaEvx;
