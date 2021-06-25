import React from "react";
import {
  MemoryRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

// Components
import SliderOverview from "./SliderOverview.js";
import SliderDesign from "./SliderDesign.js";
import SliderPerformance from "./SliderPerformance.js";
import SliderInnovation from "./SliderInnovation.js";
import SliderSpecs from "./SliderSpecs.js";

function SliderRouter() {
  const NavLinked = styled(NavLink)`
    transition: all 0.2s ease;
  `;
  return (
    <Router>
      <Container>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch>
                  <Route exact path="/" component={SliderOverview} />
                  <Route
                    key={location.key}
                    exact
                    path="/design-overview"
                    component={SliderDesign}
                  />
                  <Route
                    key={location.key}
                    exact
                    path="/performance-overview"
                    component={SliderPerformance}
                  />
                  <Route
                    key={location.key}
                    exact
                    path="/innovation-overview"
                    component={SliderInnovation}
                  />
                  <Route
                    key={location.key}
                    exact
                    path="/specs-overview"
                    component={SliderSpecs}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
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
  background-color: black;
  z-index: -1;
`;
const NavBlock = styled.div`
  justify-content: center;
  align-self: center;
  width: 80vw;
  margin-top: 130px;
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
  color: white;
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
    color: red;
  }
`;

export default withRouter(SliderRouter);
