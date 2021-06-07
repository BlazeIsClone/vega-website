import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import SliderOverview from "./SliderOverview.js";
import SliderDesign from "./SliderDesign.js";
import SliderPerformance from "./SliderPerformance.js";
import SliderInnovation from "./SliderInnovation.js";
import SliderSpecs from "./SliderSpecs.js";

class SliderInnerNav extends Component {
  render() {
    const NavBlock = styled.div`
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 60px;
      background-color: black;
      border-radius: 3px;
    `;

    const NavItem = styled.button`
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
      text-decoration: none;
      &:hover {
        color: white;
        border-bottom: solid red 5px;
      }
    `;
    return (
      <Router>
        <NavBlock>
          <Link to="/">
            <NavItem>overview</NavItem>
          </Link>
          <Link to="/design-overview">
            <NavItem>design</NavItem>
          </Link>
          <Link to="/performance-overview">
            <NavItem>performance</NavItem>
          </Link>
          <Link to="/innovation-overview">
            <NavItem>innovation</NavItem>
          </Link>
          <Link to="/specs-overview">
            <NavItem>specs</NavItem>
          </Link>
        </NavBlock>
        <Switch>
          <Route exact path="/" />
          <Route path="/design-overview" component={SliderDesign} />
          <Route path="/performance-overview" component={SliderPerformance} />
          <Route path="/innovation-overview" component={SliderInnovation} />
          <Route path="/specs-overview" component={SliderSpecs} />
        </Switch>
      </Router>
    );
  }
}
//export default SliderInnerNav;
