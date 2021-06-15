import React, { Component, useState, useEffect, createRef } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";
import { ReactComponent as LogoEmblem } from "./svg/logoEmblem.svg";
import { ReactComponent as AboutIcon } from "./svg/about.svg";
import { ReactComponent as HomeIcon } from "./svg/home.svg";
import { ReactComponent as SupportIcon } from "./svg/support.svg";
import { ReactComponent as VegaEvxIcon } from "./svg/vegaEvx.svg";
import ContainedButton from "./ContainedButton.js";
import { ReactComponent as NavLogoIcon } from "./svg/vega_logo_lettering.svg";
import { Player } from "@lottiefiles/react-lottie-player";

function NavMain() {
  const history = useHistory();
  const animationRef = createRef();
  useEffect(() => {
    const navBar = document.querySelector(".navbar-wrapper");
    const navBurger = document.querySelector(".navbar-hamburger");
    navBar.style.transform = `translateX(100px)`;
    navBurger.addEventListener("click", function () {
      navBar.style.transform = `none`;
      if (navBar.style.transform === `none`) {
        navBurger.style.visibility = `hidden`;
      }
    });
  }, []);

  const [staticStatus, setStaticStatus] = useState(true);
  const [activeStatus, setActiveStatus] = useState(false);

  const IconStyles = {
    cursor: "pointer",
  };

  return (
    <Router>
      <HeaderNav className="navbar-header">
        <a href="/">
          <HeaderLogo />
        </a>
        <HeaderNavItem>
          <ContainedButton
            content="reserve"
            text="white"
            height="nav"
            onClick={() => history.push("/reserve")}
          ></ContainedButton>
          <HeaderItemHamburger className="navbar-hamburger">
            <HamburgerIcon
              hover
              ref={animationRef}
              src="https://assets10.lottiefiles.com/private_files/lf30_10djsmqh.json"
            ></HamburgerIcon>
          </HeaderItemHamburger>
        </HeaderNavItem>
      </HeaderNav>
      <NavWrapper>
        <NavStatic
          className="navbar-wrapper"
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
            <HomeIcon style={IconStyles} onClick={() => history.push("/")} />
            <VegaEvxIcon
              style={IconStyles}
              onClick={() => history.push("/vega-evx")}
            />
            <AboutIcon
              style={IconStyles}
              onClick={() => history.push("/about")}
            />
            <SupportIcon
              style={IconStyles}
              onClick={() => history.push("/support")}
            />
          </IconWrapper>
        </NavStatic>
        <NavActive
          onMouseLeave={() => setActiveStatus(false) && setStaticStatus(true)}
          showActive={activeStatus}
        >
          <NavElements>
            <NavMainItems onClick={() => history.push("/")}>Home</NavMainItems>
            <NavItems>Vega Evx</NavItems>
            <NavItems>Values</NavItems>
            <NavItems>Blog and News</NavItems>
            <NavItems>Newsletter</NavItems>
            <NavMainItems onClick={() => history.push("/vega-evx")}>
              Vega Evx
            </NavMainItems>
            <NavMainItems onClick={() => history.push("/investors")}>
              Investors
            </NavMainItems>
            <NavMainItems onClick={() => history.push("/blog")}>
              Blog And News
            </NavMainItems>
            <NavMainItems onClick={() => history.push("/about")}>
              About
            </NavMainItems>
            <NavMainItems onClick={() => history.push("/support")}>
              Support
            </NavMainItems>
          </NavElements>
        </NavActive>
      </NavWrapper>
    </Router>
  );
}

export default NavMain;

const HeaderNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 10vw 70vw 20vw;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: inherit;
  transition: all 0.5s ease-in-out;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  padding-top: 2px;
`;
const HeaderNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  grid-column: 3/4;
  margin-top: 10px;
  margin-left: 40px;
`;
const HeaderItemHamburger = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
`;
const HamburgerIcon = styled(Player)`
  height: 50px;
  cursor: pointer;
`;
const HeaderLogo = styled(NavLogoIcon)`
  margin: 20px 0 0 20px;
  cursor: pointer;
  height: 100%;
  width: 500px;
`;

const NavWrapper = styled.div``;

const NavActive = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  top: 0;
  right: 0;
  color: white;
  z-index: 1;
  background-color: ${(props) => props.theme.secondaryColor};
  width: 300px;
  transition: all 0.4s ease-in-out;
  transition-timing-function: cubic-bezier(0.01, 5, 1.03);
  transform: ${(props) =>
    props.showActive ? "translateX(0)" : "translateX(300px)"};
`;
const NavStatic = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  flex-direction: column;
  height: 100vh;
  color: white;
  background-color: ${(props) => props.theme.secondaryColor};
  z-index: 10;
  display: flex;
  transform: ${(props) =>
    props.showStatic ? "translateX(0)" : "translateX(100px)"};
  transition: all 0.2s ease-in;
  transition-timing-function: cubic-bezier(0, 0, 0, 1);
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
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
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
    color: ${(props) => props.theme.accentColor};
  }
`;

const Emblem = styled(LogoEmblem)`
  cursor: pointer;
  margin-top: 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
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
  a {
    padding: 2px;
  }
  :hover {
    fill: ${(props) => props.theme.accentColor};
  }

  svg {
    :hover {
      fill: ${(props) => props.theme.accentColor};
    }

    path {
      :hover {
        fill: ${(props) => props.theme.accentColor};
      }
    }
  }
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
