import React, { Component } from "react";
import styled from "styled-components";
import SliderRouter from "./SliderRouter.js";
import ValuesHome from "./ValuesHome.js";
import BlogAndNews from "./BlogAndNews.js";
import ChargeNetInfo from "./ChargeNetInfo.js";
import Newsletter from "./Newsletter.js";
import Footer from "../common/Footer.js";
import HeroSection from "./HeroSection.js";

function Home() {
  return (
    <>
      <Hero className="hero-container">
        <HeroSection />
      </Hero>
      <div data-scroll-section className="scroll-optimize">
        <SliderRouter />
        <ValuesHome />
        <BlogAndNews />
        <ChargeNetInfo />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

const Hero = styled.div``;

export default Home;
