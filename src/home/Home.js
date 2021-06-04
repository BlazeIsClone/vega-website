import React, { Component } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import NavBar from "./NavBar.js";
import SliderOverview from "./SliderOverview.js";
import SliderDesign from "./SliderDesign.js";
import SliderPerformance from "./SliderPerformance.js";
import SliderInnovation from "./SliderInnovation.js";
import SliderSpecs from "./SliderSpecs";
import ValuesSliderFirst from "./ValuesSliderFirst.js";
import BlogAndNews from "./BlogAndNews.js";
import ChargeNetInfo from "./ChargeNetInfo.js";
import Newsletter from "./Newsletter.js";
import Footer from "../common/Footer.js";
import TopNav from "../common/TopNav.js";

class Home extends Component {
  render() {
    const Layout = styled.div``;
    return (
      <Layout>
        <TopNav />
        <HeroSection />
        <NavBar />
        <SliderOverview />
        <ValuesSliderFirst />
        <BlogAndNews />
        <ChargeNetInfo />
        <Newsletter />
        <Footer />
      </Layout>
    );
  }
}

export default Home;
