import React, { Component } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { ReactComponent as VegaFooter } from "./svg/vega_with_tagline.svg";
import { ReactComponent as FacebookIcon } from "./svg/icons8-facebook-f 1.svg";
import { ReactComponent as TwitterIcon } from "./svg/icons8-twitter 1.svg";
import { ReactComponent as YoutubeIcon } from "./svg/icons8-play-button 1.svg";
import { ReactComponent as InstagramIcon } from "./svg/icons8-instagram 1.svg";
import { ReactComponent as LinkedInIcon } from "./svg/icons8-linkedin-2 1.svg";

function Footer() {
  return (
    <FooterWrapper>
      <a href="/">
        <VegaFooter />
      </a>
      <FooterNav>
        <ul>
          <a href="/vega-evx">
            <li>VEGA EVX</li>
          </a>
          <a href="/investors">
            <li>INVESTORS</li>
          </a>
          <a href="/blog">
            <li>BLOG</li>
          </a>
          <a href="/about">
            <li>ABOUT</li>
          </a>
          <a href="/support">
            <li>SUPPORT</li>
          </a>
        </ul>
      </FooterNav>
      <FooterIcons>
        <a href="https://www.facebook.com/VegaInnovations" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.youtube.com/vegainnovations" target="_blank">
          <YoutubeIcon />
        </a>
        <a href="https://www.instagram.com/vegainnovations" target="_blank">
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/vega-innovations"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </FooterIcons>
      <FooterText>
        <p>Copyright© 2021 PIXELS All Rights Reserved</p>
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 576px;
  background-color: #0f0f0f;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  li:hover {
    color: white;
  }
`;

const FooterIcons = styled.div`
  margin: 20px 0 40px 0;
  display: flex;
  flex-direction: row;
  column-gap: 50px;
  cursor: pointer;
  path {
    &:hover {
      fill: white;
    }
  }
`;

const FooterNav = styled.div`
  font-family: ${(props) => props.theme.secondaryFont};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
  ul {
    list-style: none;

    a {
      li {
        display: inline-block;
        margin: 100px 75px 100px 75px;
        color: #666666;
      }
    }
  }
`;
const FooterText = styled.p`
  p {
    font-family: ${(props) => props.theme.secondaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #666666;
    width: 200px;
    user-select: none;
  }
`;
