import React, { Component } from "react";
import HeroSection from "./HeroSection.js";
import NavBar from "./NavBar.js";
import SliderOverview from "./SliderOverview.js";
import ValuesSliderFirst from "./ValuesSliderFirst.js";
import BlogAndNews from "./BlogAndNews.js";
import ChargeNetInfo from "./ChargeNetInfo.js";
import Newsletter from "./Newsletter.js";
import Footer from "../common/Footer.js";

class Home extends Component {
    render() {
        return (
            <div>
                <HeroSection />
                <NavBar />
                <SliderOverview />
                <ValuesSliderFirst />
                <BlogAndNews />
                <ChargeNetInfo />
                <Newsletter />
                <Footer />
            </div>
        );
    }
}

export default Home;
