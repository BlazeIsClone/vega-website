import React, { Component } from "react";
import Headline from "./Headline.js";
import Subtitle from "./Subtitle.js";
import Body from "./Body.js";

class Typeset extends Component {
  render() {
    return (
      <>
        <Subtitle content={this.props.subtitle} />
        <Headline content={this.props.headline} color={this.props.color} />
        <Body content={this.props.body} color={this.props.color} />
      </>
    );
  }
}

export default Typeset;
