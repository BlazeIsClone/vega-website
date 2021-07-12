import React from "react";
import styled from "styled-components";

import { ReactComponent as VegaFooter } from "./svg/vega_with_tagline.svg";
import { ReactComponent as FacebookIcon } from "./svg/icons8-facebook-f 1.svg";
import { ReactComponent as TwitterIcon } from "./svg/icons8-twitter 1.svg";
import { ReactComponent as YoutubeIcon } from "./svg/icons8-play-button 1.svg";
import { ReactComponent as InstagramIcon } from "./svg/icons8-instagram 1.svg";
import { ReactComponent as LinkedInIcon } from "./svg/icons8-linkedin-2 1.svg";

function Footer() {
  return (
    <FooterWrapper>
      <a href="/" aria-label="homepage link">
        <VegaFooterIcon />
      </a>
      <FooterNav>
        <a href="/vega-evx" aria-label="vega evx page">
          VEGA EVX
        </a>
        <a href="/investors" aria-label="investors page">
          INVESTORS
        </a>
        <a href="/blog" aria-label="blog page">
          BLOG
        </a>
        <a href="/about" aria-label="about page">
          ABOUT
        </a>
        <a href="/support" aria-label="support page">
          SUPPORT
        </a>
      </FooterNav>
      <FooterIcons>
        <a
          href="https://www.facebook.com/VegaInnovations"
          aria-label="vega facebook"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="vega twitter"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.youtube.com/vegainnovations"
          aria-label="vega youtube"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeIcon />
        </a>
        <a
          href="https://www.instagram.com/vegainnovations"
          aria-label="vega instagram"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/vega-innovations"
          aria-label="vega linked-in"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </FooterIcons>
      <FooterText>
        <p>2021 PIXELS All Rights Reserved</p>
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

const VegaFooterIcon = styled(VegaFooter)``;

const FooterIcons = styled.div`
  margin: 10px 0 40px 0;
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
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  list-style: none;
  a {
    color: hsl(0, 0%, 49%);
    display: inline-block;
    margin: 100px 75px 100px 75px;
    &:hover {
      color: white;
    }
  }
`;
const FooterText = styled.p`
  margin-top: 30px;
  p {
    font-family: ${(props) => props.theme.secondaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #666666;
    width: 300px;
    user-select: none;
  }
`;
