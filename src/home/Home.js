import React, { Component } from "react";
import styled from "styled-components";

// Components
import SliderRouter from "./SliderRouter.js";
import ValuesHome from "./ValuesHome.js";
import BlogAndNews from "./BlogAndNews.js";
import BannerMoreInfo from "../common/BannerMoreInfo.js";
import Newsletter from "./Newsletter.js";
import Footer from "../common/Footer.js";
import HeroSection from "./HeroSection.js";
import Scroll from "../common/libraryStack.js";

// Images
import chargeNetImg from "./assets/homepagelocation.png";
function Home() {
  return (
    <main>
      <Scroll />
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        <SliderRouter />
        <ValuesHome />
        <BlogAndNews />
        <div style={{ backgroundImage: `url(${chargeNetImg})` }}>
          <BannerMoreInfo
            contentText="FIND THE NEAREST AVAILABLE CHARGING LOCATION"
            contentButton="Chargenet"
            color="white"
            width="clamp"
          />
        </div>
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
