import React, { Suspense, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// ThreeJs Fiber components

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "./Car_renderd_default";

//obj
import CarModelDefault from "./obj/car_model_default.glb";
import car_model_default_compressed from "./obj/car_model_default.glb";

// Images
import placeholderImg from "./img/placeholderImg.png";

function Reserve() {
  const ref = useRef();
  return (
    <>
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
          <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            <Suspense fallback={null}>
              <Stage
                controls={ref}
                preset="soft"
                intensity={1.9}
                environment="night"
              >
                <Model />
              </Stage>
            </Suspense>
            <OrbitControls ref={ref} />
          </Canvas>
        </Col1>
        <Col2></Col2>
      </ContainerWrapper>
    </>
  );
}

export default Reserve;

// Calling extend with the native OrbitControls class from Three.js
// will make orbitControls available as a native JSX element.
// Notice how the OrbitControls classname becomes lowercase orbitControls when used as JSX element.

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

const ContainerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Col1 = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  width: 80%;
  transition: ease-out all 0.3s;
  @media (max-width: 1440px) {
    width: 70%;
  }
`;

const Col2 = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  transition: ease-out all 0.3s;
  @media (max-width: 1440px) {
    width: 30%;
  }
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
