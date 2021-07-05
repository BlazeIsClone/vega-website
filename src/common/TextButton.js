import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as IconSvg } from "./svg/chevron_left_black_24dp.svg";

class TextButton extends Component {
  render() {
    const Gridlayout = styled.div`
      display: flex;
      flex-direction: row;
      transition: all 0.2s ease;
      width: 100%;
      &:hover {
        transform: scale(1.1);
        padding-left: 40px;
        svg {
          transform: rotate(180deg);
          fill: ${(props) => props.theme.accentColor};
        }
      }
    `;
    const Button = styled.button`
      width: auto;
      display: inline-block;
      font-family: Ruda;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 36px;
      letter-spacing: -0.015em;
      border: none;
      background-color: inherit;
      cursor: pointer;
      text-transform: uppercase;
      text-align: left;
      color: ${(props) => (this.props.color === "white" ? "white" : "black")};
      padding-top: 10px;
      &:hover {
        text-decoration: none;
        cursor: pointer;
        color: ${(props) => props.theme.accentColor};
      }
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: ${(props) =>
          this.props.color === "white" ? "white" : "black"};
        transition: width 0.3s;
      }
      &:hover:after {
        width: 100%;
        background-color: ${(props) => props.theme.accentColor};
      }
    `;
    const Icon = styled.div`
      justify-content: center;
      transform: rotate(180deg);
      padding: 9px 0 0 0;
    `;
    const Svg = styled(IconSvg)`
      fill: ${(props) => (this.props.color === "white" ? "white" : "black")};
    `;
    return (
      <Gridlayout>
        <Icon>
          <Svg />
        </Icon>
        <Button onClick={this.props.onClick}>{this.props.content}</Button>
      </Gridlayout>
    );
  }
}

export default TextButton;
