import React, { Component, useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { ReactComponent as LogoEmblem } from "./svg/logoEmblem.svg";
import { ReactComponent as AboutIcon } from "./svg/about.svg";
import { ReactComponent as HomeIcon } from "./svg/home.svg";
import { ReactComponent as SupportIcon } from "./svg/support.svg";
import { ReactComponent as VegaEvxIcon } from "./svg/vegaEvx.svg";
import { ReactComponent as HeaderHamburgerIcon } from "./svg/menu_black_24dp.svg";
import ContainedButton from "./ContainedButton.js";
import { ReactComponent as NavLogoIcon } from "./svg/vega_logo_lettering.svg";

function NavMain() {
  useEffect(() => {
    const navBurger = document.querySelector(".navbar-hamburger");
    const navBar = document.querySelector(".navbar-wrapper");

    navBurger.addEventListener("click", function () {
      navBar.style.visibility = `visible`;
      if (navBar.style.visibility === `visible`) {
        navBurger.style.visibility = `hidden`;
      }
    });
  });
  const [staticStatus, setStaticStatus] = useState(true);
  const [activeStatus, setActiveStatus] = useState(false);

  const IconStyles = {
    cursor: "pointer",
  };

  return (
    <>
      <HeaderNav className="navbar-header">
        <a href="/">
          <HeaderLogo />
        </a>
        <HeaderNavItem>
          <ContainedButton
            content="reserve"
            text="white"
            height="nav"
          ></ContainedButton>
        </HeaderNavItem>
        <HeaderItemHamburger className="navbar-hamburger">
          <HamburgerIcon />
        </HeaderItemHamburger>
      </HeaderNav>

      <NavWrapper className="navbar-wrapper">
        <NavStatic
          onMouseEnter={() => setActiveStatus(true)}
          showStatic={staticStatus}
        >
          <LogoWrapper>
            <a href="/">
              <Emblem />
            </a>
          </LogoWrapper>
          <ScrollContainer>
            <ScrollBar>
              <ScrollElement className="scroll-element" />
            </ScrollBar>
          </ScrollContainer>
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
      </NavWrapper>
    </>
  );
}

export default NavMain;

const HeaderNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 10vw 70vw 10vw 10vw;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: inherit;
`;
const HeaderNavItem = styled.div`
  grid-column: 3/4;
  padding: 14px 16px;
`;
const HeaderItemHamburger = styled.div`
  justify-content: center;
  align-items: center;
`;
const HamburgerIcon = styled(HeaderHamburgerIcon)`
  width: 40px;
  height: 60px;
  cursor: pointer;
  padding: 5px;
`;
const HeaderLogo = styled(NavLogoIcon)`
  margin: 20px 0 0 20px;
  cursor: pointer;
`;

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
  transition: all 0.4s ease-in-out;
  transition-timing-function: cubic-bezier(0.01, 5, 1.03);

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

const Emblem = styled(LogoEmblem)`
  cursor: pointer;
  margin-top: 40px;
`;
const NavStatic = styled.div`
  position: fixed;
  width: 100px;
  flex-direction: column;
  position: fixed;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const ScrollBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #606060;
  width: 3px;
  height: 100%;
  justify-self: center;
  align-items: center;
  margin: 45px 45px;
  border-radius: 100px;
`;

const ScrollElement = styled.div`
  box-sizing: border-box;
  background: white;
  border-radius: 100px;
  width: 100%;
  height: 40%;
`;

const NavWrapper = styled.div`
  visibility: hidden;
`;
