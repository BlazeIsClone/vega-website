import React, { Component } from "react";
import "./App.css";
import Home from "./home/Home.js";
import LocomotiveScroll from "locomotive-scroll";

class App extends Component {
  componentDidMount() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
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
