import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SliderOverview from "./SliderOverview.js";
import SliderDesign from "./SliderDesign.js";
import SliderPerformance from "./SliderPerformance.js";
import SliderInnovation from "./SliderInnovation.js";
import SliderSpecs from "./SliderSpecs";

class NavBar extends Component {
  render() {
    const List = styled.ul`
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 6vh;
      background-image: linear-gradient(261deg, #181c20, #363f44);
    `;
    const ListItem = styled.button`
      height: 100%;
      width: 100%;
      font-family: Arial, Helvetica, sans-serif;
      font-style: normal;
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
      }
    `;
    return (
      <Router>
        <List>
          <ListItem>
            <Link
              to="/SliderOverview"
              exact
              style={{ textDecoration: "none", color: "inherit" }}
            >
              overview
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/SliderDesign"
              exact
              style={{ textDecoration: "none", color: "inherit" }}
            >
              design
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/SliderPerformace"
              exact
              style={{ textDecoration: "none", color: "inherit" }}
            >
              performance
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/SliderInnovation"
              exact
              style={{ textDecoration: "none", color: "inherit" }}
            >
              innovation
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/SliderSpecs"
              exact
              style={{ textDecoration: "none", color: "inherit" }}
            >
              specs
            </Link>
          </ListItem>
        </List>
      </Router>
    );
  }
}

export default NavBar;
