import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as IconSvg } from "./svg/chevron_left_black_24dp.svg";

class TextButton extends Component {
  render() {
    const Gridlayout = styled.div`
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      transition: all 0.2s ease;
      width: 100%;
      &:hover {
        transform: scale(1.1);
        padding-left: 45px;
        svg {
          transform: rotate(180deg);
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
      &:hover {
        text-decoration: none;
        cursor: pointer;
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
