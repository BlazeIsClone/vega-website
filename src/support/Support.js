import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/libraryStack.js";
import { motion } from "framer-motion";

// Components
import Form from "../common/Form.js";

// Images
import EnquiryImg from "./img/enquiryImg.png";

function Support() {
  return (
    <main>
      <Scroll />
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>SUPPORT</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        <EnquirySection>
          <Form
            img={EnquiryImg}
            subtitle="enquiry"
            headline="let’s talk!"
            body="Hello there! Looks like you re interested in finding out more about Vega Or maybe you just wanted to
start a conversation if so feel free to make an enquiry."
            imgHeadline='"With Infinite Imaginations We Can Achieve Greatness Together"'
          />
        </EnquirySection>

        <Footer />
      </div>
    </main>
  );
}

export default Support;

const EnquirySection = styled.div`
  background-color: ${(props) => props.theme.pureColor};
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
