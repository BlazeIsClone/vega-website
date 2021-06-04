import React, { Component } from "react";
import Headline from "./Headline.js";
import Subtitle from "./Subtitle.js";
import Body from "./Body.js";
import styled from "styled-components";
import { getByDisplayValue } from "@testing-library/dom";

class Typeset extends Component {
  render() {
    return (
      <>
        <Headline content={this.props.headline} color="white" />
        <Subtitle content={this.props.subtitle} />
        <Body content={this.props.body} color="white" />
      </>
    );
  }
}

export default Typeset;
