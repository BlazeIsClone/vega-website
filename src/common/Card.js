import React, { Component } from "react";
import styled from "styled-components";
import Headline from "./Headline.js";
import Subtitle from "./Subtitle.js";
import Body from "./Body.js";

class Card extends Component {
  render() {
    const Card = styled.div`
      width: 465px;
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
        cursor: pointer;
      }
    `;

    return (
      <Card>
        <img src={this.props.Img}></img>
        <Subtitle content={this.props.Subtilte} />
        <Headline
          size="card"
          content={this.props.Headline}
          color={this.props.color}
        />
        <Body content={this.props.Body} color={this.props.color} />
      </Card>
    );
  }
}

export default Card;
