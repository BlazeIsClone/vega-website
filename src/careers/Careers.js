import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/libraryStack.js";
import { motion } from "framer-motion";

// Components
import Form from "../common/Form.js";

// Images
import applyNowImg from "./img/applyNowImg.png";

function Careers() {
  return (
    <main>
      <Scroll />
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>CAREERS</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        {/* ---- APPLYNOW SECTION ---- */}
        <ApplyNowSection>
          <Form
            img={applyNowImg}
            imgHeadline="lets create Brilliant synergies that are revolutionary"
            subtitle="apply for careers"
            headline="work with us"
            body="We challenge everything we do, from ideas to processes and even the minute detail that may seem
insignificant to another if you too let’s get together to revolutionize our future"
          />
        </ApplyNowSection>
        {/* ---- FOOTER SECTION ---- */}
        <Footer />
      </div>
    </main>
  );
}

export default Careers;

const ApplyNowSection = styled.div`
  background-color: ${(props) => props.theme.negativeColor};
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
