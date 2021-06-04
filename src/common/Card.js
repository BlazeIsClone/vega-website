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
      background-color: white;
      align-items: center;
      justify-content: center;
      gap: 20px;
      img {
        width: 100%;
        height: 380px;
        margin-bottom: 10px;
      }
    `;
    return (
      <Card>
        <img src={this.props.Img}></img>
        <Subtitle content={this.props.Subtilte} />
        <Headline size="card" content={this.props.Headline} />
        <Body content={this.props.Body} />
      </Card>
    );
  }
}

export default Card;
