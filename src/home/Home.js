import React, { Component } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import SliderOverview from "./SliderOverview.js";
import SliderDesign from "./SliderDesign.js";
import SliderPerformance from "./SliderPerformance";
import SliderInnovation from "./SliderInnovation.js";
import SliderSpecs from "./SliderSpecs.js";
import ValuesSliderFirst from "./ValuesSliderFirst.js";
import BlogAndNews from "./BlogAndNews.js";
import ChargeNetInfo from "./ChargeNetInfo.js";
import Newsletter from "./Newsletter.js";
import Footer from "../common/Footer.js";
import TopNav from "../common/TopNav.js";

class Home extends Component {
  render() {
    const Home = styled.div``;
    return (
      <Home data-scroll-section>
        <TopNav />
        <HeroSection />
        <SliderOverview />
        {/*
        <SliderDesign />
        <SliderPerformance />
        <SliderInnovation />
        <SliderSpecs /> */}
        <ValuesSliderFirst />
        <BlogAndNews />
        <ChargeNetInfo />
        <Newsletter />
        <Footer />
      </Home>
    );
  }
}

export default Home;
