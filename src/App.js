import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";

// Components
import NavMain from "./common/NavMain.js";
import Home from "./home/Home.js";
import VegaEvx from "./vegaEvx/VegaEvx.js";
import Investors from "./investors/Investors.js";
import Reserve from "./reserve/Reserve.js";
import Blog from "./blog/Blog.js";
import About from "./about/About.js";
import Careers from "./careers/Careers.js";
import Support from "./support/Support.js";
import NotFound from "./NotFound.js";

function App() {
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
          </Switch>
        </div>
        <NavMain />
        <Switch>
          <Route path="/reserve">
            <Reserve />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
