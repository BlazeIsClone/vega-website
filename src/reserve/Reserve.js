import React from "react";
import styled from "styled-components";
import Scroll from "../common/libraryStack.js";
import { motion } from "framer-motion";

function Reserve() {
  return (
    <Main>
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>RESERVE</MotionType>
        </motion.div>
      </MotionContainer>
      <div data-scroll-section>
        <div>
          <center>Reserve</center>
        </div>
      </div>
    </Main>
  );
}
export default Reserve;

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

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  position: fixed;
`;
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
