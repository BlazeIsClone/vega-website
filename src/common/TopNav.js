import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as NavHamburgerIcon } from "./svg/menu_black_24dp.svg";
import ContainedButton from "./ContainedButton.js";
import { ReactComponent as NavLogoIcon } from "./svg/vega_logo_lettering.svg";

class TopNav extends Component {
  render() {
    const Nav = styled.div`
      display: grid;
      grid-template-columns: 10vw 70vw 10vw 10vw;
      grid-template-rows: 1fr;
      position: absolute;
      z-index: 1;
      height: 8vh;
      max-width: 100vw;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: black;
    `;
    const NavItem = styled.div`
      grid-column: 3/4;
      padding: 14px 16px;
      text-decoration: none;
    `;
    const NavItemHamburger = styled.div`
      justify-content: center;
      align-items: center;
    `;
    const HamburgerIcon = styled(NavHamburgerIcon)`
      width: 40px;
      height: 60px;
      cursor: pointer;
    `;
    const Logo = styled(NavLogoIcon)`
      margin: 20px 0 0 20px;
    `;
    return (
      <Nav>
        <Logo />
        <NavItem>
          <ContainedButton
            content="reserve"
            text="white"
            height="nav"
          ></ContainedButton>
        </NavItem>
        <NavItemHamburger>
          <HamburgerIcon />
        </NavItemHamburger>
      </Nav>
    );
  }
}

export default TopNav;
