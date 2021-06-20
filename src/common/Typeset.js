import React, { Component } from "react";
import Headline from "./Headline.js";
import Subtitle from "./Subtitle.js";
import Body from "./Body.js";
import styled from "styled-components";

class Typeset extends Component {
  render() {
    return (
      <>
        <Subtitle content={this.props.subtitle} />
        <Headline content={this.props.headline} color={this.props.color} />
        <BodyContainer>
          <Body content={this.props.body} color={this.props.color} />
        </BodyContainer>
      </>
    );
  }
}

export default Typeset;

const BodyContainer = styled.div`
  padding-top: 20px;
`;
