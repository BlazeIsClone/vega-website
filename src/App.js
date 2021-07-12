import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";

// Components
import NavMain from "./common/NavMain.js";
import Home from "./home/Home.js";
import VegaEvx from "./vegaEvx/VegaEvx.js";
import Investors from "./investors/Investors.js";
import Blog from "./blog/Blog.js";
import About from "./about/About.js";
import Careers from "./careers/Careers.js";
import Support from "./support/Support.js";

const Reserve = lazy(() => import("./reserve/Reserve.js"));
const NotFound = lazy(() => import("./NotFound.js"));

function App() {
  useEffect(() => {
    console.log("%c P I X E L S ", "color: #bada55");
    console.log(
      "%cDisclaimer This content isn't official and is not affiliated with Vega Innovations in any way. This content is strictly exclusive only for beta testers as a proof of concept which may contain copyrighted material and false information.",
      "color: #ff0000"
    );
  }, []);

  const globalVars = {
    mainColor: "white",
    secondaryColor: "#0f0f0f",
    accentColor: "red",
    heroType: "Ruda",
    negativeColor: "white",
    mainFont: "Ruda",
    secondaryFont: "Roboto, Helvetica Neue, sans-serif",
    tirtiaryFont: "Numans, sans-serif",
  };

  return (
    <Router>
      <ThemeProvider theme={globalVars}>
        <Suspense fallback={null}>
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
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
          <NavMain />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
