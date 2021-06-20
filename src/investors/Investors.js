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
import Specs from "../common/Specs.js";
import Body from "../common/Body.js";
import Headline from "../common/Headline.js";
import ContainedButton from "../common/ContainedButton.js";

// images
import performanceImg from "./img/companyImg.png";
import capabilitiesImg from "./img/capabilitiesImg.png";

function Investors() {
  return (
    <main>
      <Scroll />
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>INVESTORS</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section>
        {/* ---- COMPANY SECTION ---- */}
        <CompanyHero>
          <CompanyCol1>
            <LeftImg>
              <ImageHandler src={performanceImg} placeholder={{}}>
                {(src) => <img src={src} alt="vega evx car" />}
              </ImageHandler>
            </LeftImg>
          </CompanyCol1>
          <CompanyCol2>
            <TextContainer data-scroll data-scroll-speed="1">
              <Typeset
                subtitle="performance"
                headline="envisioning to be the quickest car in the world, with record-setting acceleration, range and performance"
                body="Fully electric, two seater super car, in a handmade carbon fiber body powered by a dual motor all-wheel-drive drivetrain. All automotive electronics, including the liquid cooled motor controllers and Li-ion battery pack is designed and manufactured in-house, showcasing some of the most advanced technologies in the EV super car space."
                color="black"
              />
            </TextContainer>
          </CompanyCol2>
        </CompanyHero>

        {/* ---- CAPABILITIES SECTION ---- */}
        <CapabilitiesSection>
          <CapabilitiesRow1 data-scroll data-scroll-speed="1">
            <ImageHandler src={capabilitiesImg} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </CapabilitiesRow1>

          <CapabilitiesRow2>
            <Typeset
              subtitle="performance"
              headline="envisioning to be the quickest car in the world, with record-setting acceleration, range and performance"
              body="Fully electric, two seater super car, in a handmade carbon fiber body powered by a dual motor all-wheel-drive drivetrain. All automotive electronics, including the liquid cooled motor controllers and Li-ion battery pack is designed and manufactured in-house, showcasing some of the most advanced technologies in the EV super car space."
              color="black"
            />
          </CapabilitiesRow2>
        </CapabilitiesSection>
        <Footer />
      </div>
    </main>
  );
}

export default Investors;

const CapabilitiesRow1 = styled.div``;

const CapabilitiesRow2 = styled.div`
  justify-content: flex-start;
  margin: 100px 0 0 400px;
  width: clamp(40rem, 60rem, 75rem);
`;

const CapabilitiesSection = styled.div`
  justify-content: center;
  max-height: 100vh;
  min-height: 1080px;
  width: 100%;
  background-color: ${(props) => props.theme.negativeColor};
  display: flex;
  flex-direction: column;
  margin: auto 0 0 0;
  img {
    padding: 0 600px 0 0;
    width: 100%;
    height: auto;
  }
`;

const CompanyHero = styled.div`
  justify-content: center;
  max-height: 100vh;
  min-height: 1080px;
  width: 100%;
  background-color: ${(props) => props.theme.negativeColor};
  display: flex;
  flex-direction: row;
  margin: auto 0 0 0;
  img {
    width: 100%;
    height: auto;
  }
`;

const LeftImg = styled.div`
  margin: 30px 0 0 100px;
  width: 80%;
`;
const CompanyCol1 = styled.div`
  margin-top: 100px;
  width: 100%;
`;
const CompanyCol2 = styled.div`
  width: 100%;
  margin: 250px 0 0 0;
`;
const TextContainer = styled.div`
  width: clamp(20rem, 55rem, 40rem);
`;

const ImageHandler = styled(ProgressiveImage)``;

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
