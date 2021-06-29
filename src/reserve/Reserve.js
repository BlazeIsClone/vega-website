import React, { Suspense, useRef, createRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Lottie Animator Player
import { Player } from "@lottiefiles/react-lottie-player";

// ThreeJs Fiber components
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "./Car_renderd_default";

//obj
import CarModelDefault from "./obj/car_model_default.glb";
import car_model_default_compressed from "./obj/car_model_default.glb";

// Importing SVGs as React Components
import { ReactComponent as NavLogoText } from "../common/svg/vegaLogo_Onlylettring.svg";
import { ReactComponent as NavLogoIcon } from "../common/svg/vegaLogo.svg";

// Components
import Headline from "../common/Headline";
import ContainedButton from "../common/ContainedButton";
import Body from "../common/Body";

// Images
import placeholderImg from "./img/placeholderImg.png";

function Reserve() {
  //Lottie animator
  const animationRef = createRef();

  // ThreeJs REf
  const ref = useRef();
  return (
    <MainWrapper>
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
          {/* ---- HEADER LOGO SECTION ---- */}
          <a href="/">
            <NavLogoContainer>
              <HeaderLogo />
              <HeaderLogoText />
            </NavLogoContainer>
          </a>

          {/* ---- CANVAS SECTION ---- */}
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 50, zoom: 2 }}
            style={{
              //backgroundImage: `url(${placeholderImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "black",
            }}
          >
            <Suspense fallback={<Loading />}>
              <OrbitControls enableZoom={false} />
              <Stage
                controls={ref}
                preset="soft"
                intensity={1.9}
                environment="night"
              >
                <Model rotation={[0, -0.6, 0]}></Model>
              </Stage>
            </Suspense>
          </Canvas>
        </Col1>

        {/* ---- INPUT SECTION ---- */}
        <Col2>
          <ScrollWrapper>
            <HeadWrapper>
              <Headline content="RESERVE VEGA EVX TODAY" color="white" />
              <HamburgerIcon
                hover
                ref={animationRef}
                src="https://assets10.lottiefiles.com/private_files/lf30_10djsmqh.json"
              ></HamburgerIcon>
            </HeadWrapper>
            <ContentBodyWrapper>
              {/* ---- OPTIONS SECTION ---- */}
              <OptionsSection>
                <OptionSectionRow1>
                  <Body content="SINGLE MOTOR RWD" color="white" />
                  <Body
                    content="You will be able to complete your configuration as production nears in late 2022. "
                    color="white"
                  />
                </OptionSectionRow1>
                <OptionSectionRow2>
                  <Body content="TRI MOTOR AWD" color="white" />
                  <Body
                    content="You will be able to complete your configuration as production nears in late 2022. "
                    color="white"
                  />
                </OptionSectionRow2>
              </OptionsSection>
              {/* ---- ADDON SECTION ---- */}
              <AddonSection>
                <AddonSectionRow1>
                  <Body content="SINGLE MOTOR RWD" color="white" />
                </AddonSectionRow1>
                <AddonSectionRow2>
                  <Body content="TRI MOTOR AWD" color="white" />
                </AddonSectionRow2>
              </AddonSection>

              {/* ---- STATISTIC SECTION ---- */}
              <StatisticSection>
                <StatisticSectionCol1>
                  <Body content="300km" color="white" />
                  <Body content="Rage" color="white" />
                </StatisticSectionCol1>

                <StatisticSectionCol2>
                  <Body content="10,000Nm" color="white" />
                  <Body content="Torque" color="white" />
                </StatisticSectionCol2>

                <StatisticSectionCol3>
                  <Body content="4.2s" color="white" />
                  <Body content="0-60kmh" color="white" />
                </StatisticSectionCol3>
              </StatisticSection>

              {/* ---- PRICE SECTION ---- */}
              <PriceSection>
                <Body content="Due Today" color="white" />
                <Body content="$ 1,000 USD" color="white" />
                <ContainedButton content="Reserve Now" text="white" />
              </PriceSection>
              <NoticeSection></NoticeSection>
            </ContentBodyWrapper>
          </ScrollWrapper>
        </Col2>
      </ContainerWrapper>
    </MainWrapper>
  );
}

export default Reserve;

// OnLoad Wait for 3D Scene to load using React Built-in Suspense

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

const MainWrapper = styled.div`
  position: fixed;
`;

const ContainerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.secondaryColor};
  background: #0a0a0a;
  display: flex;
  justify-content: center;
`;

const Col1 = styled.div`
  cursor: grab;
  height: 100vh;
  background-color: ${(props) => props.theme.secondaryColor};
  width: 75%;
  transition: ease-out all 0.3s;
  &:active {
    cursor: grabbing;
  }
  @media (max-width: 1440px) {
    width: 70%;
  }
`;

const NavLogoContainer = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 20px;
  cursor: pointer;
`;
const HeaderLogo = styled(NavLogoIcon)`
  cursor: pointer;
  height: 100%;
  width: 60px;
`;
const HeaderLogoText = styled(NavLogoText)`
  padding: 0 0 0 20px;
  height: 100%;
  width: 360px;
  path {
    fill: white;
  }
`;

const Col2 = styled.div`
  width: 25%;
  height: auto;
  transition: ease-out all 0.3s;
  background-color: #0a0a0a;
  @media (max-width: 1440px) {
    width: 30%;
  }
`;

const ScrollWrapper = styled.div`
  overflow-y: scroll;
`;
const HeadWrapper = styled.div`
  padding: 20px 0 0 48px;
  margin: 0 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 50px;
`;

const HamburgerIcon = styled(Player)`
  height: 50px;
  cursor: pointer;
  width: 55px;
  svg {
    path {
      fill: white;
    }
  }
`;

const ContentBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OptionsSection = styled.div`
  width: 80%;
  height: 280px;
  background: #252525;
  border-radius: 4px;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
`;
const OptionSectionRow1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 20px;
`;
const OptionSectionRow2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 20px;
`;
const AddonSection = styled.div`
  margin: 10px 0 0 0;
  width: 80%;
  height: 180px;
  background: #252525;
  border-radius: 4px;
`;

const AddonSectionRow1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 20px;
`;
const AddonSectionRow2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 20px;
`;

const StatisticSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 40px;
`;
const StatisticSectionCol1 = styled.div``;
const StatisticSectionCol2 = styled.div``;
const StatisticSectionCol3 = styled.div``;
const PriceSection = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  button {
    background-color: #252525;
  }
`;
const NoticeSection = styled.div``;

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
