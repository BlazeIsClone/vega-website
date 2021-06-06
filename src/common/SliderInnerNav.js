import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";
import SliderOverview from "../home/SliderOverview.js";
import SliderDesign from "../home/SliderDesign.js";
import SliderPerformance from "../home/SliderPerformance";
import SliderInnovation from "../home/SliderInnovation.js";
import SliderSpecs from "../home/SliderSpecs.js";

class SliderInnerNav extends Component {
  render() {
    const InnerNav = styled.ul`
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 60px;
      background-color: black;
      border-radius: 3px;
    `;
    const InnerNavItem = styled.button`
      background-color: #000000;
      border-radius: 3px;
      font-family: Arial, Helvetica, sans-serif;
      font-style: normal;
      height: 100%;
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
      background-color: inherit;
      color: lightgrey;
      border: none;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      outline: none;
      &:hover {
        color: white;
        border-bottom: solid red 5px;
      }
    `;

    return (
      <InnerNav>
        <InnerNavItem>overview</InnerNavItem>
        <InnerNavItem>design</InnerNavItem>
        <InnerNavItem>performance</InnerNavItem>
        <InnerNavItem>innovation</InnerNavItem>
        <InnerNavItem>specs</InnerNavItem>
      </InnerNav>
    );
  }
}
export default SliderInnerNav;
