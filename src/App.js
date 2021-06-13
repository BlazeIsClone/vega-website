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
import Home from "./home/Home.js";
import VegaEvx from "./vegaEvx/VegaEvx.js";
import HeroSection from "./home/HeroSection.js";
import NavMain from "./common/NavMain.js";

class Comp extends React.Component {
  componentDidUpdate() {
    console.log("yes");
    const locationChanged =
      this.props.window.location.href !== "http://localhost:3000/";
    if (locationChanged) {
      console.log("yes");
      this.pocoLoco.update();
    }
  }
  render() {
    return null;
  }
}

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
  }

  render() {
    const NavContainer = styled.div``;
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
            <div className="hero-container">
              <Route component={Comp} />
              <HeroSection />
            </div>
            <Home />
            <NavContainer>
              <NavMain />
            </NavContainer>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
