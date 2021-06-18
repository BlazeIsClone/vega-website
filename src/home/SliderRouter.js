import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
} from "react-router-dom";
import styled from "styled-components";
import SliderOverview from "./SliderOverview.js";
import SliderDesign from "./SliderDesign.js";
import SliderPerformance from "./SliderPerformance.js";
import SliderInnovation from "./SliderInnovation.js";
import SliderSpecs from "./SliderSpecs.js";

function SliderRouter() {
  const NavLinked = styled(NavLink)``;
  return (
    <Router keyLength={6}>
      <Container>
        <Switch>
          <Route exact path="/" component={SliderOverview} />
          <Route exact path="/design-overview" component={SliderDesign} />
          <Route
            exact
            path="/performance-overview"
            component={SliderPerformance}
          />
          <Route
            exact
            path="/innovation-overview"
            component={SliderInnovation}
          />
          <Route exact path="/specs-overview" component={SliderSpecs} />
        </Switch>
        <NavBlock>
          <NavLinked
            exact
            to="/"
            activeStyle={{
              borderBottom: "solid red 5px",
              color: "white",
            }}
          >
            <NavItem>overview</NavItem>
          </NavLinked>
          <NavLinked
            to="/design-overview"
            activeStyle={{
              borderBottom: "solid red 5px",
              color: "white",
            }}
          >
            <NavItem>design</NavItem>
          </NavLinked>
          <NavLinked
            to="/performance-overview"
            activeStyle={{
              borderBottom: "solid red 5px",
            }}
          >
            <NavItem>performance</NavItem>
          </NavLinked>
          <NavLinked
            to="/innovation-overview"
            activeStyle={{
              borderBottom: "solid red 5px",
              color: "white",
            }}
          >
            <NavItem>innovation</NavItem>
          </NavLinked>
          <NavLinked
            to="/specs-overview"
            activeStyle={{
              color: "white",
              borderBottom: "solid red 5px",
            }}
          >
            <NavItem>specs</NavItem>
          </NavLinked>
        </NavBlock>
      </Container>
    </Router>
  );
}
const Container = styled.div`
  max-height: 100vh;
  min-height: 1060px;
  display: flex;
  position: relative;
  flex-direction: column;
`;
const NavBlock = styled.div`
  justify-content: center;
  align-self: center;
  width: 80vw;
  margin-top: 100px;
  position: absolute;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: black;
  border-radius: 3px;
  z-index: 99;
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
  color: #c0c0c0;
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
  }
`;

export default withRouter(SliderRouter);
