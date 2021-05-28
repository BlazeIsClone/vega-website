import React, { Component } from "react";
import HeroMain from "../common/HeroMain.js";
import NavBar from "../common/NavBar.js";
import SliderOverview from "./SliderOverview.js";

class Home extends Component {
    render() {
        return (
            <div>
                <HeroMain />
                <NavBar />
                <SliderOverview />
            </div>
        );
    }
}

export default Home;
