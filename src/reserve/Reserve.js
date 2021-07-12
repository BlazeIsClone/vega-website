import React, { Suspense, useRef, createRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Lottie Animator Player
import { Player } from "@lottiefiles/react-lottie-player";

// ThreeJs Fiber components
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "./Car_renderd_default";

// Importing SVGs as React Components
import { ReactComponent as NavLogoText } from "../common/svg/vegaLogo_Onlylettring.svg";
import { ReactComponent as NavLogoIcon } from "../common/svg/vegaLogo.svg";

// Components
import Headline from "../common/Headline";
import ContainedButton from "../common/ContainedButton";
import Body from "../common/Body";

function Reserve() {
  const hostname = process.env.REACT_APP_HOSTNAME_URL;

  useEffect(() => {
    document
      .querySelector(".reserve-order-btn")
      .setAttribute("action", `${hostname}/signup`);
  }, []);

  //Lottie animator
  const animationRef = createRef();

  // ThreeJs REf
  const ref = useRef();
  return (
    <MainWrapper>
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{
            y: "100vh",
            transitionEnd: {
              display: "none",
            },
          }}
          transition={transition}
        >
          <MotionType>RESERVE</MotionType>
        </motion.div>
      </MotionContainer>
      <ContainerWrapper>
        <Col1>
          {/* ---- HEADER LOGO SECTION ---- */}
          <a href="/" aria-label="homepage">
            <NavLogoContainer>
              <HeaderLogo />
              <HeaderLogoText />
            </NavLogoContainer>
          </a>

          {/* ---- CANVAS SECTION ---- */}
          <Canvas
            shadows
            alpha={true}
            dpr={[1, 2]}
            camera={{ fov: 50, zoom: 2 }}
            style={{
              //backgroundImage: `url(${placeholderImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "black",
              paddingTop: "8%",
            }}
          >
            <Suspense fallback={<Loading />}>
              <OrbitControls
                enableZoom={false}
                maxAzimuthAngle={Math.PI / 9}
                minAzimuthAngle={-Math.PI / 1}
                maxPolarAngle={1.5}
                minPolarAngle={1}
              />
              <Stage
                position={[1, 0.6, 0.2]}
                ontrols={ref}
                preset="soft"
                intensity={1.9}
                environment="night"
              >
                <Model rotation={[0, -0.6, 0]} />
              </Stage>
            </Suspense>
          </Canvas>
        </Col1>

        {/* ---- INPUT SECTION ---- */}
        <Col2>
          <ScrollWrapper>
            <HeadWrapper>
              <Headline content="RESERVE VEGA EVX TODAY" color="white" />
              <div onClick={() => window.open("/", "_self")}>
                <HamburgerIcon
                  hover
                  ref={animationRef}
                  src="https://assets10.lottiefiles.com/private_files/lf30_10djsmqh.json"
                ></HamburgerIcon>
              </div>
            </HeadWrapper>
            <ContentBodyWrapper>
              {/* ---- OPTIONS SECTION ---- */}
              <OptionsSection>
                <OptionSectionRow1>
                  <OptionsHeadWrapper>
                    <Body content="SINGLE MOTOR RWD" color="white" />
                  </OptionsHeadWrapper>
                  <OptionsBodyWrapper>
                    <Body
                      content="Maximum efficiency and power with weight distribution across the chassis."
                      color="white"
                    />
                  </OptionsBodyWrapper>
                </OptionSectionRow1>

                <SectionDivider></SectionDivider>
                <OptionSectionRow2>
                  <OptionsHeadWrapper>
                    <Body content="TRI MOTOR AWD" color="white" />
                  </OptionsHeadWrapper>
                  <OptionsBodyWrapper>
                    <Body
                      content="All the power you need at any second like a sports car also efficient by design."
                      color="white"
                    />
                  </OptionsBodyWrapper>
                </OptionSectionRow2>
              </OptionsSection>
              {/* ---- ADDON SECTION ---- */}
              <AddonSection>
                <AddonSectionRow1>
                  <Body content="SINGLE MOTOR RWD" color="white" />
                </AddonSectionRow1>
                <SectionDivider></SectionDivider>
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
                <PriceCol1>
                  <p>Due Today</p>
                  <h3>$ 1,000 USD</h3>
                </PriceCol1>
                <PriceCol2>
                  <form method="POST" className="reserve-order-btn">
                    <ContainedButton
                      content="Reserve Now"
                      text="white"
                      type="submit"
                      value="submit"
                    />
                  </form>
                </PriceCol2>
              </PriceSection>
              <NoticeSection>
                <Body
                  content="You will be able to complete your configuration as production nears in late 2022."
                  color="white"
                />
              </NoticeSection>
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
  z-index: 1;
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
    width: 60%;
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
  margin: 20px 0 0 30px;
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
  position: relative;
  overflow-y: scroll;
  width: 25%;
  height: 100vh;
  transition: ease-out all 0.3s;
  background-color: #0a0a0a;
  padding: 0 20px 0 0;
  overflow-y: scroll;
  @media (max-width: 1440px) {
    width: 40%;
  }
`;

const ScrollWrapper = styled.div`
  overflow-y: show;
`;
const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 30px 50px 30px 50px;
  h1 {
    font-size: 32px;
    padding-top: 4px;
  }
`;

const HamburgerIcon = styled(Player)`
  height: 50px;
  cursor: pointer;
  width: 55px;
  position: relative;
  right: -5px;
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
  padding: 10px 0 0 10px;
  :hover {
    color: yellow;
  }
`;

const SectionDivider = styled.div`
  background: #d0d0d0;
  border-radius: 4px;
  height: 2px;
  margin: 25px;
`;

const OptionsHeadWrapper = styled.div`
  p {
    font-weight: 600;
    font-style: normal;
    font-family: ${(props) => props.theme.secondaryFont};
    padding: 0 0 15px 0;
  }
`;
const OptionsBodyWrapper = styled.div`
  p {
    font-size: 14px;
    line-height: 16px;
    width: clamp(15rem, 80%, 55rem);
  }
`;
const OptionSectionRow2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 20px;
  padding: 0 0 0 10px;
`;
const AddonSection = styled.div`
  margin: 15px 0 0 0;
  width: 80%;
  height: 160px;
  background: #252525;
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  p {
    font-family: ${(props) => props.theme.secondaryFont};
    font-style: normal;
    font-weight: 600;
  }
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
  justify-content: space-between;
  width: 100%;
  padding: 45px 50px 45px 50px;
`;
const StatisticSectionCol1 = styled.div``;
const StatisticSectionCol2 = styled.div``;
const StatisticSectionCol3 = styled.div``;
const PriceSection = styled.div`
  margin: 15px 0 0 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  button {
    background-color: #252525;
  }
`;
const PriceCol1 = styled.div`
  padding: 0 10px 0 50px;
  width: 50%;
  color: white;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
`;
const PriceCol2 = styled.div`
  padding: 0 0 0 40px;
  width: 50%;
`;
const NoticeSection = styled.div`
  margin: 25px 35px 0 50px;
  p {
    font-size: 14px;
    line-height: 16px;
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
