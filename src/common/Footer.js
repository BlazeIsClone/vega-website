import React, { Component } from "react";
import styled from "styled-components";
import Headline from "./Headline.js";
import Body from "./Body.js";
import { ReactComponent as VegaFooter } from "./svg/vega_with_tagline.svg";
import { ReactComponent as FacebookIcon } from "./svg/icons8-facebook-f 1.svg";
import { ReactComponent as TwitterIcon } from "./svg/icons8-twitter 1.svg";
import { ReactComponent as YoutubeIcon } from "./svg/icons8-play-button 1.svg";
import { ReactComponent as InstagramIcon } from "./svg/icons8-instagram 1.svg";
import { ReactComponent as LinkedInIcon } from "./svg/icons8-linkedin-2 1.svg";

class Footer extends Component {
  render() {
    const Footer = styled.div`
      display: flex;
      flex-direction: column;
      height: 616px;
      color: grey;
      background-color: #0f0f0f;
      text-align: center;
      justify-content: center;
      align-items: center;
    `;

    const FooterIcons = styled.div`
      margin: 20px 0 40px 0;
      display: flex;
      flex-direction: row;
    `;
    const FooterNav = styled.div`
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #666666;
      ul {
        list-style: none;

        li {
          display: inline-block;
          margin: 100px 75px 100px 75px;
        }
      }
    `;
    const FooterText = styled.p`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #666666;
    `;
    return (
      <Footer>
        <VegaFooter />
        <FooterNav>
          <ul>
            <li>VEGA EVX</li>
            <li>INVESTORS</li>
            <li>BLOG</li>
            <li>ABOUT</li>
            <li>SUPPORT</li>
          </ul>
        </FooterNav>
        <FooterIcons>
          <FacebookIcon />
          <TwitterIcon />
          <YoutubeIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </FooterIcons>

        <FooterText>
          Copyright © 2021 Vega Innovations All rights reserved
        </FooterText>
      </Footer>
    );
  }
}

export default Footer;
