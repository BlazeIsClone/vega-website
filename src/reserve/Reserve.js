import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Images
import placeholderImg from "./img/placeholderImg.png";

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
      <ContainerWrapper>
        <Col1>
          <VisualizerCanvas></VisualizerCanvas>
        </Col1>
        <Col2></Col2>
      </ContainerWrapper>
    </Main>
  );
}
export default Reserve;

const ContainerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.secondaryColor};
`;

const Col1 = styled.div`
  background-image: url(${placeholderImg});
  background-repeat: no-repeat;
  height: 100%;
  width: 90%;
`;

const VisualizerCanvas = styled.canvas``;

const Col2 = styled.div`
  width: 10%;
  height: 100%;
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
