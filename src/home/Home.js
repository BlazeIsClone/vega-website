import React, { Component } from "react";
import HeroMain from "../common/HeroMain.js";
import NavBar from "../common/NavBar.js";
import SliderOverview from "./SliderOverview.js";
import ValuesSliderFirst from "./ValuesSliderFirst.js";
import BlogAndNews from "./BlogAndNews.js";

class Home extends Component {
    render() {
        return (
            <div>
                <HeroMain />
                <NavBar />
                <SliderOverview />
                <ValuesSliderFirst />
                <BlogAndNews />
            </div>
        );
    }
}

export default Home;
