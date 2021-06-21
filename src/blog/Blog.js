import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/libraryStack.js";
import { motion } from "framer-motion";

// Components
import Card from "../common/Card.js";
import CardExtended from "../common/CardExtended.js";
import BannerMoreInfo from "../common/BannerMoreInfo.js";
import TopTopics from "./TopTopics.js";
import StayConnected from "./StayConnected.js";

// Images

import img001 from "./img/weeksTopTopicsImg01.png";
import img002 from "./img/weeksTopTopicsImg02.png";
import img003 from "./img/weeksTopTopicsImg03.png";

import newsletterInfoImg from "./img/newsletterInfoImg.png";
import stayConnectedImg01 from "./img/stayConnectedImg01.png";
import stayConnectedImg02 from "./img/stayConnectedImg02.png";
import stayConnectedImg03 from "./img/stayConnectedImg03.png";
import stayConnectedImg04 from "./img/stayConnectedImg04.png";
import stayConnectedImg05 from "./img/stayConnectedImg05.png";

function Blog() {
  return (
    <main>
      <Scroll />
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>BLOG AND NEWS</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        {/* ---- TOPTOPICS SECTION ---- */}
        <TopTopicsSection>
          <TopTopics
            img1={img001}
            subtitle1="news"
            headline1="battery cells assembled"
            body1="It’s time Vega EVX is on its way to Geniva to attend to this year motorshow.
Here in Sri Lanka if you want to join with Vega make sure you enlist
yourself."
            img2={img002}
            subtitle2="news"
            headline2="battery cells assembled"
            body2="It’s time Vega EVX is on its way to Geniva to attend to this year motorshow.
Here in Sri Lanka if you want to join with Vega make sure you enlist
yourself."
            img3={img003}
            subtitle3="news"
            headline3="battery cells assembled"
            body3="It’s time Vega EVX is on its way to Geniva to attend to this year motorshow.
Here in Sri Lanka if you want to join with Vega make sure you enlist
yourself."
          />
        </TopTopicsSection>
        {/* ---- NEWSLETTER INFO SECTION ---- */}
        <div style={{ backgroundImage: `url(${newsletterInfoImg})` }}>
          <BannerMoreInfo
            contentText="SUBSCRIBE TO VEGA NEWSLETTER"
            contentButton="newsletter"
          ></BannerMoreInfo>
        </div>
        {/* ---- STAYCONNECTED SECTION ---- */}
        <StayConnectedSection>
          <StayConnected
            img00={stayConnectedImg01}
            subtitle00="news"
            headline00="battery cells assembled"
            body00="It’s time Vega EVX is on its way to Geniva to attend to this year motorshow.
Here in Sri Lanka if you want to join with Vega make sure you enlist
yourself."
            img0={stayConnectedImg02}
            subtitle0="news"
            headline0="battery cells assembled"
            body0="It’s time Vega EVX is on its way to Geniva to attend to this year motorshow.
Here in Sri Lanka if you want to join with Vega make sure you enlist
yourself."
            img1={stayConnectedImg03}
            subtitle1="news"
            headline1="battery cells assembled"
            body1="It’s time Vega EVX is on its way to Geniva to attend to this year motorshow.
Here in Sri Lanka if you want to join with Vega make sure you enlist
yourself."
            img2={stayConnectedImg04}
            subtitle2="news"
            headline2="battery cells assembled"
            body2="It’s time Vega EVX is on its way to Geniva to attend to this year motorshow.
Here in Sri Lanka if you want to join with Vega make sure you enlist
yourself."
            img3={stayConnectedImg05}
            subtitle3="news"
            headline3="battery cells assembled"
            body3="It’s time Vega EVX is on its way to Geniva to attend to this year motorshow.
Here in Sri Lanka if you want to join with Vega make sure you enlist
yourself."
          />
        </StayConnectedSection>

        {/* ---- FOOTER SECTION ---- */}
        <Footer />
      </div>
    </main>
  );
}

export default Blog;

const StayConnectedSection = styled.div`
  display: flex;
  height: 1500px;
  background-color: ${(props) => props.theme.negativeColor};
  margin: 0 100px 0 0;
  width: 100vw;
  padding-top: 100px;
`;

const TopTopicsSection = styled.div`
  display: flex;
  max-height: 100vh;
  min-height: 1080px;
  background-color: ${(props) => props.theme.negativeColor};
  flex-direction: row;
  margin: 0 100px 0 0;
  align-items: center;
  width: 100vw;
`;
const transition = {
  ease: [0.6, 0.01, -0.05, 0.9],
  duration: 2,
};

const motionContainerStyle = {
  backgroundColor: "#0f0f0f",
  height: "100vh",
  width: "100vw",
  position: "absolute",
  right: 0,
  zIndex: 10,
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
};

const MotionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  position: absolute;
  justify-content: center;
`;
const MotionType = styled.h1`
  font-family: sans-serif;
  font-size: 8rem;
  color: white;
  align-self: center;
  padding-right: 80px;
`;
