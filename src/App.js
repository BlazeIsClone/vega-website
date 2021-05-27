import React, { Component } from "react";
import "./App.css";
import Home from "./home/Home.js";
import Blog from "./blog/Blog.js";
import About from "./about/About.js";
import Careers from "./careers/Careers.js";
import Investors from "./investors/Investors.js";
import Reserve from "./reserve/Reserve.js";
import Support from "./support/Support.js";
import VegaEvx from "./vegaEvx/VegaEvx.js";

class App extends Component {
    render() {
        return (
            <div>
                <Home />
                <Blog />
                <About/>
                <Careers />
                <Investors />
                <Reserve />
                <Support />
                <VegaEvx />
            </div>
        );
    }
}

export default App;
