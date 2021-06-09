import React, { Component, useState, useEffect, Children } from "react";
import styled, { withTheme } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { ReactComponent as VegaLogo } from "./svg/Vega_Nav_Logo.svg";
import { ReactComponent as AboutIcon } from "./svg/about.svg";
import { ReactComponent as HomeIcon } from "./svg/home.svg";
import { ReactComponent as SupportIcon } from "./svg/support.svg";
import { ReactComponent as VegaEvxIcon } from "./svg/vegaEvx.svg";

function NavMain() {
  const [staticStatus, setStaticStatus] = useState(true);
  const [activeStatus, setActiveStatus] = useState(false);

  const IconStyles = {
    cursor: "pointer",
  };

  return (
    <>
      <NavStatic
        onMouseEnter={() => setActiveStatus(true)}
        showStatic={staticStatus}
      >
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <IconWrapper>
          <a href="#">
            <HomeIcon style={IconStyles} />
          </a>
          <a href="#">
            <VegaEvxIcon style={IconStyles} />
          </a>
          <a href="#">
            <AboutIcon style={IconStyles} />
          </a>
          <a href="#">
            <SupportIcon style={IconStyles} />
          </a>
        </IconWrapper>
      </NavStatic>
      <NavActive
        onMouseLeave={() => setActiveStatus(false) && setStaticStatus(true)}
        showActive={activeStatus}
      >
        <NavElements>
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
        </NavElements>
      </NavActive>
    </>
  );
}

export default NavMain;

const NavActive = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-self: flex-end;
  height: 100vh;
  top: 0;
  right: 0;
  color: white;
  background-color: #111111;
  width: 300px;
  transition: all 0.5s ease-in;
  transform: ${(props) =>
    props.showActive ? "translateX(0%)" : "translateX(100%)"};

  &:hover {
  }
`;

const NavElements = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 300px;
  padding: 20px 110px 20px 10px;
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
  margin: 40px 0 20px 0;
  height: 200px;
`;
const NavStatic = styled.div`
  position: fixed;
  width: 100px;
  flex-direction: column;
  position: fixed;
  justify-self: flex-end;
  height: 100vh;
  top: 0;
  right: 0;
  color: white;
  background-color: #111111;
  z-index: 99;
  display: ${(props) => (props.showStatic ? "flex" : "none")};
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 60px;
  margin-top: auto;
  padding-bottom: 50px;
`;
