import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./home/Home.js";
import HeroSection from "./home/HeroSection.js";
import VegaEvx from "./vegaEvx/VegaEvx.js";
import NavMain from "./common/NavMain.js";

class App extends Component {
  componentDidMount() {
    //----------calling Locomotive Scroll
    const pocoLoco = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    if (pocoLoco) {
      console.log("%c P I X E L S ", "background: #222; color: #bada55");
    }

    const scrollBar = document.querySelector(".scroll-element");

    //----------ScrollY locomotive3D transform emulation
    pocoLoco.on("scroll", ({ limit, scroll }) => {
      const progress = (scroll.y / limit.y) * 100;

      //----------ScrollBar Slider Progress
      scrollBar.style.transform = `translate3d(0, ${progress}px, 0)`;
      //console.log("scrollbar-function" + progress);
      //console.log("limit.y" + limit.y);
      //console.log("scroll.y" + scroll.y);
      const navBar = document.querySelector(".navbar-wrapper");
      const navbarHeader = document.querySelector(".navbar-header");
      const selectNavBurger = document.querySelector(".navbar-hamburger");
      const backgroundHero = document.querySelector(".hero-container");

      //----------NavBar onScroll state Logic
      if (scroll.y > 2880 || scroll.y < 1280) {
        navBar.style.transform = `translateX(100%)`;

        //For Hame page y2880
      }

      selectNavBurger.style.visibility = `visible`;

      if (3360 > scroll.y && scroll.y > 1940) {
        navBar.style.transform = `none`;
      }
      //------------NavHeader onScroll Logic
      if (scroll.y > 800) {
        navbarHeader.style.display = `none`;
      } else if (scroll.y < 800) {
        navbarHeader.style.display = `grid`;
      }
      if (scroll.y > 1099) {
        backgroundHero.style.visibility = `hidden`;
      } else if (1099 > scroll.y) {
        backgroundHero.style.visibility = `visible`;
      }

      //----------Hero background onScroll effects

      const blurContainer = document.querySelector(".blur-container");

      if (scroll.y < 900) {
        let scrollCalc = Math.floor(scroll.y / 100);
        let scrollThrow = `0.` + `${1 + scrollCalc}`;
        blurContainer.style.opacity = scrollThrow;
        //console.log(scrollCalc);
        console.log(scrollThrow);
      }
      //    background: rgba(22, 26, 33, 0.8);
      // opacity: 0;
    });
  }

  render() {
    const NavContainer = styled.div``;
    const globalVars = {
      mainColor: "white",
      secondaryColor: "#0f0f0f",
      accentColor: "red",
    };

    return (
      <Router>
        <ThemeProvider theme={globalVars}>
          <div data-scroll-container>
            <div className="hero-container">
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
