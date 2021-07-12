import { useEffect } from "react";

// GASP for animating dom elements
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// LocomotiveScroll for smooth scrolling and parallax
import LocomotiveScroll from "locomotive-scroll";

// -----Initiating GSAP
gsap.registerPlugin(ScrollTrigger);

// -----Initiating Locomotive Scroll

let scrollContainer = "[data-scroll-container]";

const Scroll = (callbacks) => {
  useEffect(() => {
    let locomotiveScroll;
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scrollContainer),
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
      smoothMobile: false,
      getDirection: true,
      touchMultiplier: 2.5,
    });

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll;

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locomotiveScroll.on("scroll", () => ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y;
      }, // defining scroll vertical.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector(scrollContainer).style.transform
        ? "transform"
        : "fixed",
    });

    locomotiveScroll.on("scroll", (func) => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction);
    });

    // each time the window updates, and refreshes ScrollTrigger and then update LocomotiveScroll.

    ScrollTrigger.addEventListener("refresh", () => {
      locomotiveScroll.update();
    });

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

    //-------Locomotive Scroll Events

    let navBar;
    let navbarHeader;
    let selectNavBurger;
    let backgroundHero;
    let blurContainer;
    let pxCalc;
    let heroText;
    let scrollBar;
    let overlayContainer;
    let navHeadBtn;

    scrollBar = document.querySelector(".scroll-element");
    navBar = document.querySelector(".navbar-wrapper");
    navbarHeader = document.querySelector(".navbar-header");
    navHeadBtn = document.querySelector(".nav-header-btn");
    selectNavBurger = document.querySelector(".navbar-hamburger");
    backgroundHero = document.querySelector(".hero-container");
    blurContainer = document.querySelector(".hero-section-blur-container");
    overlayContainer = document.querySelector(
      ".hero-section-overlay-container"
    );
    heroText = document.querySelector(".hero-container-text");

    // Locomotivescroll, scrolljacks the dom so we need to use the provided event listeners to access scroll positions

    locomotiveScroll.on("scroll", ({ limit, scroll }) => {
      //--ScrollBar Slider Progress
      const progress = (scroll.y / limit.y) * 100;
      scrollBar.style.transform = `translate3d(0, ${progress}px, 0)`;

      //--NavHeader onScroll Logic
      if (scroll.y > 250) {
        navbarHeader.style.transform = `translateY(-100%)`;
      } else if (scroll.y < 250) {
        navbarHeader.style.transform = `none`;
      }

      selectNavBurger.style.visibility = `visible`;
      navHeadBtn.style.visibility = `visible`;

      //--Hero Background Video Optimization
      if (scroll.y > 935) {
        backgroundHero.style.visibility = `hidden`;
      } else if (935 > scroll.y) {
        backgroundHero.style.visibility = `visible`;
      }

      //--Hero background onScroll Blur Logic
      pxCalc = Math.floor((scroll.y / backgroundHero.offsetHeight) * 100);

      if (scroll.y < 900) {
        blurContainer.style.backdropFilter = `blur(${pxCalc}px)`;
        overlayContainer.style.opacity = `0.1${pxCalc}`;
      }

      //--Hero Container onScroll Text Animation
      if (scroll.y > 300) {
        heroText.style.opacity = "1";
      }
      if (scroll.y < 300) {
        heroText.style.opacity = "0";
      }
      if (scroll.y > 640) {
        heroText.style.opacity = "0";
      }

      //-------NavBar Page Independent Scroll logic-------//

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
        if (scroll.y < 900 || scroll.y > 14100) {
          navBar.style.transform = `translateX(100px)`;
        }
        //show
        if (14000 > scroll.y && scroll.y > 1960) {
          navBar.style.transform = `translateX(0)`;
        }
      }
      //----- Investors onScroll Logic
      if (locationUrl === "/investors") {
        //hidden
        if (scroll.y < 900 || scroll.y > 6532) {
          navBar.style.transform = `translateX(100px)`;
        }
        //show
        if (6500 > scroll.y && scroll.y > 900) {
          navBar.style.transform = `translateX(0)`;
        }
      }

      //----- Blog AND NEWS onScroll Logic
      if (locationUrl === "/blog") {
        //hidden
        if (scroll.y < 900 || scroll.y > 2848) {
          navBar.style.transform = `translateX(100px)`;
        }
        //show
        if (2840 > scroll.y && scroll.y > 900) {
          navBar.style.transform = `translateX(0)`;
        }
      }

      //----- About onScroll Logic
      if (locationUrl === "/about") {
        //hidden
        if (scroll.y < 900 || scroll.y > 5400) {
          navBar.style.transform = `translateX(100px)`;
        }
        //show
        if (5400 > scroll.y && scroll.y > 900) {
          navBar.style.transform = `translateX(0)`;
        }
      }

      //----- Careers onScroll Logic
      if (locationUrl === "/careers") {
        //hidden
        if (scroll.y < 900 || scroll.y > 1375) {
          navBar.style.transform = `translateX(100px)`;
        }
        //show
        if (1360 > scroll.y && scroll.y > 900) {
          navBar.style.transform = `translateX(0)`;
        }
      }

      //----- Support onScroll Logic
      if (locationUrl === "/support") {
        //hidden
        if (scroll.y < 900 || scroll.y > 2450) {
          navBar.style.transform = `translateX(100px)`;
        }
        //show
        if (2460 > scroll.y && scroll.y > 900) {
          navBar.style.transform = `translateX(0)`;
        }
      }
    });

    // Update LocomotiveScroll after page load to fix possible bugs in some pages while scrolling (listen to URL changes and if change triggers wait X about before executing update to bypass possible errors).

    const locationUrl = window.location.pathname;
    if (locationUrl === "/vega-evx" || locationUrl === "/about") {
      var timoutTrigger = setTimeout(() => {
        scrollUpdateTrigger();
      }, 4000);
    }

    const scrollUpdateTrigger = () => {
      if (locationUrl === "/vega-evx" || locationUrl === "/about") {
        locomotiveScroll.update();
      }
    };

    // When ComponentDidUnmount clear out garbage which might cause side effects.
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
      if (ScrollTrigger) {
        clearTimeout(timoutTrigger);
      }
    };
  }, [callbacks]);

  return null;
};

export default Scroll;
