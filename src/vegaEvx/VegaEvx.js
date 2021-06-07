import React, { Component } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import TopNav from "../common/TopNav.js";

export default class VegaEvx extends Component {
  render() {
    const VegaEvx = styled.div``;
    return (
      <VegaEvx data-scroll-section>
        <TopNav />
        <HeroSection />
        <Footer />
      </VegaEvx>
    );
  }
}
