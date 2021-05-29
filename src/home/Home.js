import React, { Component } from "react";
import HeroMain from "../common/HeroMain.js";
import NavBar from "../common/NavBar.js";
import SliderOverview from "./SliderOverview.js";
import ValuesSliderFirst  from "./ValuesSliderFirst.js";

class Home extends Component {
    render() {
        return (
            <div>
                <HeroMain />
                <NavBar />
                <SliderOverview />
                <ValuesSliderFirst/>
            </div>
        );
    }
}

export default Home;
