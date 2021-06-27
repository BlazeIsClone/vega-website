import React, { Component } from "react";
import styled from "styled-components";

class Body extends Component {
  render() {
    const Type = styled.p`
      justify-self: center;
      font-family: ${(props) => props.theme.secondaryFont};
      font-style: normal;
      font-weight: normal;
      font-size: ${(props) =>
        this.props.size === "var"
          ? "clamp(1rem, -0.875rem + 8.333vw, 1.125rem)"
          : "18px"};
      line-height: 21px;
      width: ${(props) =>
        this.props.width === "clamp" ? "clamp(20rem, 70%, 50rem)" : "none"};

      color: ${(props) => (this.props.color === "white" ? "white" : "black")};
      text-align: ${(props) =>
        this.props.align === "center" ? "center" : "none"};
    `;
    return <Type>{this.props.content}</Type>;
  }
}
export default Body;
