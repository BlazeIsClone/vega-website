import React, { Component } from "react";
import HeroMainBanner from "./assets/homeHeroMainBanner.png";

class HeroMain extends Component {
  render() {
    const heroMainStyle = {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100vh",
      width: "100%",
      boxSizing: "border-box",
      display: "grid",
      alignItems: "center",
      justifyContent: "center",
    };

    return (
      <div style={heroMainStyle}>
        <img src={HeroMainBanner} />
      </div>
    );
  }
}

export default HeroMain;
