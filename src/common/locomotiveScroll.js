import { useEffect } from "react";
import { useHistory } from "react-router-dom";

// ----------Initiating Locomotive Scroll
import LocomotiveScroll from "locomotive-scroll";

const Scroll = (callbacks) => {
  const history = useHistory();
  useEffect(() => {
    let locomotiveScroll;
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
      smoothMobile: false,
      getDirection: true,
      touchMultiplier: 2.5,
    });
    locomotiveScroll.update();

    if (locomotiveScroll) {
      console.log("%c P I X E L S ", "background: #222; color: #bada55");
    }

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll;

    locomotiveScroll.on("scroll", (func) => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction);
    });

    //-------Locomotive Scroll Events

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
    locomotiveScroll.on("scroll", ({ limit, scroll }) => {
      //----------ScrollBar Slider Progress
      const progress = (scroll.y / limit.y) * 100;
      scrollBar.style.transform = `translate3d(0, ${progress}px, 0)`;

      //------------NavHeader onScroll Logic
      if (scroll.y > 250) {
        navbarHeader.style.transform = `translateY(-100%)`;
      } else if (scroll.y < 250) {
        navbarHeader.style.transform = `none`;
      }

      selectNavBurger.style.visibility = `visible`;

      //-----------Hero Background Video Optimization
      if (scroll.y > 935) {
        backgroundHero.style.visibility = `hidden`;
      } else if (935 > scroll.y) {
        backgroundHero.style.visibility = `visible`;
      }

      //----------Hero background onScroll Blur Logic
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

      //----------NavBar Page Independent Scroll logic----------//

      //----- HomePage onScroll Logic
      const locationUrl = window.location.pathname;
      if (locationUrl === "/") {
        //hidden
        if (scroll.y > 2880 || scroll.y < 1280) {
          navBar.style.transform = `translateX(100px)`;
        }
        //show
        if (3360 > scroll.y && scroll.y > 1940) {
          navBar.style.transform = `translateX(0)`;
        }
      }
      //----- VegaEvx onScroll Logic
      if (locationUrl === "/vega-evx") {
        //hidden
        if (scroll.y > 2880 || scroll.y < 1280) {
          navBar.style.transform = `translateX(100px)`;
        }
        //show
        if (3360 > scroll.y && scroll.y > 1940) {
          navBar.style.transform = `translateX(0)`;
        }
      }
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [callbacks]);

  return null;
};

export default Scroll;
