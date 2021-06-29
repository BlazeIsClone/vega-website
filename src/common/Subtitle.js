import React, { Component } from "react";
import styled from "styled-components";

class Subtitle extends Component {
  render() {
    const Type = styled.h1`
      color: red;
      font-family: ${(props) => props.theme.tirtiaryFont};
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      text-transform: uppercase;
      padding-bottom: 5px;
    `;
    return <Type>{this.props.content}</Type>;
  }
}
export default Subtitle;
