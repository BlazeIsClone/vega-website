import React, { Component } from "react";
import styled from "styled-components";

class ContainedButton extends Component {
  render() {
    const Button = styled.button`
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      border: none;
      border-radius: 4px;
      padding: 0 16px;
      vertical-align: middle;
      text-align: center;
      text-overflow: ellipsis;
      text-transform: uppercase;
      font-family: ${(props) => props.theme.secondaryFont};
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      min-width: 143.02px;
      cursor: pointer;
      height: ${(props) => (this.props.height === "nav" ? "37.9px" : "44px")};
      background-color: ${(props) =>
        this.props.body === "white" ? "white" : "black"};
      color: ${(props) => (this.props.text === "white" ? "white" : "black")};
      &:active {
        background-color: ${(props) => props.theme.accentColor};
        color: white;
      }
    `;
    const Value = styled.p`
      &:hover {
        transform: scale(1.1);
      }
    `;
    return (
      <Button
        type="button"
        className="navbar-header-button"
        onClick={this.props.onClick}
        children={this.props.children}
      >
        <Value>{this.props.content}</Value>
      </Button>
    );
  }
}

export default ContainedButton;
