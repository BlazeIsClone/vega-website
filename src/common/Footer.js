import React, { Component } from "react";
import styled from "styled-components";
import Headline from "./Headline.js";
import Body from "./Body.js";
import iconSvg from "./svg/icons8-facebook-f 1.svg";
import { ReactComponent as FacebookIcon } from "./svg/icons8-facebook-f 1.svg";
import { ReactComponent as TwitterIcon } from "./svg/icons8-twitter 1.svg";
import { ReactComponent as YoutubeIcon } from "./svg/icons8-play-button 1.svg";
import { ReactComponent as InstagramIcon } from "./svg/icons8-instagram 1.svg";
import { ReactComponent as LinkedInIcon } from "./svg/icons8-linkedin-2 1.svg";

class Footer extends Component {
  render() {
    const FooterGrid = styled.div`
      display: flex;
      flex-direction: column;
      height: 616px;
      color: white;
      background-color: #0f0f0f;
      text-align: center;
      justify-content: center;
      align-items: center;
    `;

    const IconGrid = styled.div`
      display: flex;
      flex-direction: row;
    `;
    return (
      <FooterGrid>
        <Headline place="center" color="white" content="VEGA INNOVATIONS" />
        <IconGrid>
          <FacebookIcon />
          <TwitterIcon />
          <YoutubeIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </IconGrid>

        <Body
          color="white"
          content="Copyright © 2021 Vega Innovations All rights reserved"
        />
      </FooterGrid>
    );
  }
}

export default Footer;
