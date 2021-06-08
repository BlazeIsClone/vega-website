import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { ReactComponent as VegaLogo } from "./svg/Vega_Nav_Logo.svg";

const NavMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  transform: translate(-100%);
  height: 100vh;
  left: 100vw;
  top: 0;
  right: 0;
  color: white;
  background-color: #111111;
  width: 300px;
  display: none;

  &:hover {
  }
`;

const NavMainElements = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 300px;
  padding: 20px 80px 20px 10px;
`;
const NavMainItems = styled.ul`
  font-family: Roboto;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: end;
  letter-spacing: -0.154px;
  color: white;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;
const NavItems = styled.ul`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: end;
  letter-spacing: -0.154px;
  color: white;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;
const Logo = styled(VegaLogo)`
  position: relative;
  margin: 40px 20px 20px 20px;
  height: 200px;
`;
const NavBlockStatic = styled(NavMainBlock)`
  display: block;
  width: 100px;
`;

function NavMain() {
  return (
    <>
      <NavBlockStatic>
        <Logo />
      </NavBlockStatic>
      <NavMainBlock>
        <NavMainElements>
          <NavMainItems>Home</NavMainItems>
          <NavItems>Vega Evx Overview</NavItems>
          <NavItems>Values</NavItems>
          <NavItems>Blog and News</NavItems>
          <NavItems>Newsletter</NavItems>
          <NavMainItems>Vega Evx</NavMainItems>
          <NavMainItems>Investors</NavMainItems>
          <NavMainItems>Vega Evx</NavMainItems>
          <NavMainItems>Blog</NavMainItems>
          <NavMainItems>About Us</NavMainItems>
          <NavMainItems>Support</NavMainItems>
        </NavMainElements>
      </NavMainBlock>
    </>
  );
}

export default NavMain;
