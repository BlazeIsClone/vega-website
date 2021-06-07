import React, { Component } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import SliderOverview from "./SliderOverview.js";
import ValuesHome from "./ValuesHome.js";
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
        <ValuesHome />
        <BlogAndNews />
        <ChargeNetInfo />
        <Newsletter />
        <Footer />
      </Home>
    );
  }
}

export default Home;
