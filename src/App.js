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
      console.log("%c P I X E L S ", "background: #222; color: #bada55");
    }

    const scrollBar = document.querySelector(".scroll-element");

    pocoLoco.on("scroll", ({ limit, scroll }) => {
      const progress = (scroll.y / limit.y) * 100;

      scrollBar.style.transform = `translate3d(0, ${progress}px, 0)`;
      //console.log("function" + progress);
      //console.log("limit" + limit.y);
      //console.log("scroll.y" + scroll.y);
      const navBar = document.querySelector(".navbar-wrapper");
      const navbarHeader = document.querySelector(".navbar-header");
      const selectNavBurger = document.querySelector(".navbar-hamburger");

      if (scroll.y > 2880 || scroll.y < 980) {
        navBar.style.visibility = `hidden`;
        //For Hame page y2880
      }
      if (3360 > scroll.y && scroll.y > 2040) {
        navBar.style.visibility = `visible`;
      }
      selectNavBurger.style.visibility = `visible`;

      if (scroll.y > 800) {
        navbarHeader.style.display = `none`;
      } else if (scroll.y < 800) {
        navbarHeader.style.display = `grid`;
      }
    });
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
