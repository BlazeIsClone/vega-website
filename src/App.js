import React, { Component } from "react";
import "./App.css";
import Home from "./home/Home.js";
import LocomotiveScroll from "locomotive-scroll";

class App extends Component {
  componentDidMount() {
    const pocoLoco = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    if (pocoLoco) {
      console.log("Poco Loco!");
    }
  }

  render() {
    return (
      <div data-scroll-container>
        <Home />
      </div>
    );
  }
}

export default App;
