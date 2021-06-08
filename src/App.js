import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./home/Home.js";
import VegaEvx from "./vegaEvx/VegaEvx.js";
import NavMain from "./common/NavMain.js";

class App extends Component {
  componentDidMount() {
    const pocoLoco = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    if (pocoLoco) {
      console.log("Poco Loco!");
    }
  }

  render() {
    const NavContainer = styled.div``;
    return (
      <Router>
        <div data-scroll-container>
          <NavContainer>
            <Home />
            <NavMain />
          </NavContainer>
        </div>
      </Router>
    );
  }
}

export default App;
