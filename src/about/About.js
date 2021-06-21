import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/libraryStack.js";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

// Components
import Typeset from "../common/Typeset.js";
import Card from "../common/Card.js";
import Headline from "../common/Headline.js";
import BannerMoreInfo from "../common/BannerMoreInfo.js";
import DescriptionBody from "../common/DescriptionBody.js";

// images
import companyImg from "./img/companyImg.png";
import careersInfoImg from "./img/careersBannerInfoImg.png";

function About() {
  return (
    <main>
      <Scroll />
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>ABOUT</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        {/* ---- COMPANY SECTION ---- */}
        <CompanyHero>
          <DescriptionBody
            img={companyImg}
            subtitle="company"
            headline="A brand inspired by passion"
            body="We challenge everything we do, from ideas to processes and even the minute detail that may seem insignificant to another."
          ></DescriptionBody>
        </CompanyHero>

        {/* ---- CAREERSINFO SECTION ---- */}
        <CareersInfo>
          <div style={{ backgroundImage: `url(${careersInfoImg})` }}>
            <BannerMoreInfo
              contentText="Our Values"
              contentButton="About"
            ></BannerMoreInfo>
          </div>
        </CareersInfo>

        {/* ---- FOOTER SECTION ---- */}
        <Footer />
      </div>
    </main>
  );
}

export default About;

const CareersInfo = styled.div``;
const CompanyHero = styled.div``;

const LeftImg = styled.div`
  margin: 0 0 0 100px;
  width: 80%;
`;
const CompanyCol1 = styled.div`
  width: 100%;
`;
const CompanyCol2 = styled.div`
  width: 100%;
  display: flex;
`;
const TextContainer = styled.div`
  width: clamp(40rem, 100%, 100px);
  align-self: center;
`;

const ImageHandler = styled(ProgressiveImage)``;

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
