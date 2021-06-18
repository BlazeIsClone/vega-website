import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/libraryStack.js";

function VegaEvx() {
  return (
    <main data-barba="container" data-barba-namespace="with-cover">
      <div className="transition">
        <h2>Cover Screen</h2>
      </div>
      <Scroll />
      <div data-scroll-section>
        <div className="hero-container">
          <HeroSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default VegaEvx;
