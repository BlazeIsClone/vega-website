import React, { Component } from "react";
import styled from "styled-components";
import Headline from "./Headline.js";
import Subtitle from "./Subtitle.js";
import Body from "./Body.js";

class CardExtended extends Component {
  render() {
    const CardExtended = styled.div`
      width: calc(465px * 2);
      height: 590px;
      min-width: 300px;
      background-color: none;
      align-items: center;
      justify-content: center;
      gap: 20px;
      img {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        user-select: none;
        user-drag: none;
      }
    `;

    return (
      <CardExtended>
        <img src={this.props.Img}></img>
        <Subtitle content={this.props.Subtilte} />
        <Headline
          size="card"
          content={this.props.Headline}
          color={this.props.color}
        />
        <Body content={this.props.Body} color={this.props.color} />
      </CardExtended>
    );
  }
}

export default CardExtended;
