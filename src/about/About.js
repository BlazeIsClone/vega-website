import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/locomotiveScroll.js";

function VegaEvx() {
  return (
    <div data-scroll-section>
      <Scroll />
      <HeroSection />
      <div>
        <h1>About</h1>
        <Footer />
      </div>
    </div>
  );
}

export default VegaEvx;
