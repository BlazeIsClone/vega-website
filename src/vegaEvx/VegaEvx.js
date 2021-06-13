import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import SliderRouter from "../home/SliderRouter.js";

function VegaEvx() {
  return (
    <div data-scroll-section>
      <HeroSection />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default VegaEvx;
