import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import SliderRouter from "./SliderRouter.js";
import ValuesHome from "./ValuesHome.js";
import BlogAndNews from "./BlogAndNews.js";
import BannerMoreInfo from "../common/BannerMoreInfo.js";
import Newsletter from "./Newsletter.js";
import Footer from "../common/Footer.js";
import HeroSection from "./HeroSection.js";
import Scroll from "../common/libraryStack.js";

// Images
import chargeNetImg from "./assets/homepagelocation.png";

function Home() {
  return (
    <main>
      <Scroll />
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>Home</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        <SliderRouter />
        <ValuesHome />
        <BlogAndNews />
        <div style={{ backgroundImage: `url(${chargeNetImg})` }}>
          <BannerMoreInfo
            contentText="FIND THE NEAREST AVAILABLE CHARGING LOCATION"
            contentButton="Chargenet"
            color="white"
            width="clamp"
          />
        </div>
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}

export default Home;

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
