import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import SliderRouter from "./SliderRouter.js";
import ValuesHome from "./ValuesHome.js";
import BlogAndNews from "./BlogAndNews.js";
import ChargeNetInfo from "./ChargeNetInfo.js";
import Newsletter from "./Newsletter.js";
import Footer from "../common/Footer.js";

class Home extends Component {
  render() {
    return (
      <div data-scroll-section className="scroll-optimize">
        <SliderRouter />
        <ValuesHome />
        <BlogAndNews />
        <ChargeNetInfo />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default Home;
