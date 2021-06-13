import React, { Component, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
  useLocation,
  useHistory,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import NavMain from "./common/NavMain.js";
import Home from "./home/Home.js";
import VegaEvx from "./vegaEvx/VegaEvx.js";
import Investors from "./investors/Investors.js";
import Reserve from "./reserve/Reserve.js";
import Blog from "./blog/Blog.js";
import About from "./about/About.js";
import Careers from "./careers/Careers.js";
import Support from "./support/Support.js";
import { createBrowserHistory } from "history";
import { render } from "@testing-library/react";

class App extends Component {
  async componentDidMount() {
    // ----------calling Locomotive Scroll

    this.pocoLoco = await new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
    });

    if (this.pocoLoco) {
      window.scrollTo(0, 0);
      console.log("%c P I X E L S ", "background: #222; color: #bada55");
    }
    let navBar;
    let navbarHeader;
    let selectNavBurger;
    let backgroundHero;
    let blurContainer;
    let pxCalc;
    let heroText;
    let scrollBar;
    let textWrapper;
    let overlayContainer;

    scrollBar = document.querySelector(".scroll-element");
    navBar = document.querySelector(".navbar-wrapper");
    navbarHeader = document.querySelector(".navbar-header");
    selectNavBurger = document.querySelector(".navbar-hamburger");
    backgroundHero = document.querySelector(".hero-container");
    blurContainer = document.querySelector(".hero-section-blur-container");
    overlayContainer = document.querySelector(
      ".hero-section-overlay-container"
    );
    heroText = document.querySelector(".hero-container-text");
    textWrapper = document.querySelector(".hero-container-text");

    //----------ScrollY locomotive3D transform emulation
    this.pocoLoco.on("scroll", ({ limit, scroll }) => {
      const progress = (scroll.y / limit.y) * 100;

      //----------ScrollBar Slider Progress
      scrollBar.style.transform = `translate3d(0, ${progress}px, 0)`;
      //console.log("scrollbar-function" + progress);
      //console.log("limit.y" + limit.y);
      //console.log("scroll.y" + scroll.y);

      //----------NavBar onScroll state Logic
      if (scroll.y > 2880 || scroll.y < 1280) {
        navBar.style.transform = `translateX(100%)`;
      }
      selectNavBurger.style.visibility = `visible`;

      if (3360 > scroll.y && scroll.y > 1940) {
        navBar.style.transform = `none`;
      }
      //------------NavHeader onScroll Logic
      if (scroll.y > 250) {
        navbarHeader.style.transform = `translateY(-100%)`;
      } else if (scroll.y < 250) {
        navbarHeader.style.transform = `none`;
      }
      //-----------Hero Background Video Optimization
      if (scroll.y > 935) {
        backgroundHero.style.visibility = `hidden`;
      } else if (935 > scroll.y) {
        backgroundHero.style.visibility = `visible`;
      }

      //----------Hero background onScroll Blur

      pxCalc = Math.floor((scroll.y / backgroundHero.offsetHeight) * 100);

      if (scroll.y < 900) {
        blurContainer.style.backdropFilter = `blur(${pxCalc}px)`;
        overlayContainer.style.opacity = `0.1${pxCalc}`;
      }

      //----------Hero Container onScroll Text Animation

      if (scroll.y > 300) {
        heroText.style.opacity = "1";
      }
      if (scroll.y < 300) {
        heroText.style.opacity = "0";
      }
      if (scroll.y > 640) {
        heroText.style.opacity = "0";
      }
    });

    window.addEventListener("load", (event) => {
      console.log(
        "location: " +
          document.location +
          ", state: " +
          JSON.stringify(event.state)
      );
    });
  }

  componentWillUnmount() {
    this.pocoLoco.destory();
  }

  componentDidUpdate() {
    console.log("error caught!");
  }
  shouldComponentUpdate() {
    this.pocoLoco.stop();
    console.log("should component update");
  }

  render() {
    const globalVars = {
      mainColor: "white",
      secondaryColor: "#0f0f0f",
      accentColor: "red",
      heroType: "Ruda",
    };

    return (
      <Router>
        <ThemeProvider theme={globalVars}>
          <div data-scroll-container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/vega-evx">
                <VegaEvx />
              </Route>
              <Route path="/investors">
                <Investors />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/careers">
                <Careers />
              </Route>
              <Route path="/support">
                <Support />
              </Route>
              <Route path="/reserve">
                <Reserve />
              </Route>
            </Switch>
            <NavMain />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
