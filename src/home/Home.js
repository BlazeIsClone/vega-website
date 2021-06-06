import React, { Component } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import NavBar from "./NavBar.js";
import SliderOverview from "./SliderOverview.js";
import ValuesSliderFirst from "./ValuesSliderFirst.js";
import BlogAndNews from "./BlogAndNews.js";
import ChargeNetInfo from "./ChargeNetInfo.js";
import Newsletter from "./Newsletter.js";
import Footer from "../common/Footer.js";
import TopNav from "../common/TopNav.js";
import ReactFullpage from "@fullpage/react-fullpage";

class Home extends Component {
  render() {
    const Layout = styled.div``;
    return (
      <ReactFullpage
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage">
              <div className="section">
                <div>
                  <TopNav />
                  <HeroSection />
                </div>
              </div>
              <div className="section">
                <div>
                  <NavBar />
                  <SliderOverview />
                </div>
              </div>
              <div className="section">
                <div data-scroll-container>
                  <ValuesSliderFirst />
                  <BlogAndNews />
                  <ChargeNetInfo />
                  <Newsletter />
                  <Footer />
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default Home;
