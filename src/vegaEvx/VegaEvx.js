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
import CardSlider from "../common/CardSlider.js";

// Media Imports
import performanceImg from "./img/performanceImg.png";
import performanceImgEngine from "./img/performanceImgEngine.png";
import batteryImg from "./img/batteryImg.png";
import powertrainImg from "./img/powertrainImg.png";
import chassisImg from "./img/chassisImg.png";
import safetyImg from "./img/safetyImg.png";
import safetyImg1 from "./img/safetyImg1.png";
import safetyImg2 from "./img/safetyImg2.png";
import exteriorImg from "./img/exteriorImg.png";
import autonomousVideo from "./img/autonomousVideo.mp4";
import dashbaordImg from "./img/dashboardImg.png";
import dashboardSpeedoImg from "./img/dashboardSpeedoImg.gif";
import dashboardSpeedoLow from "./img/dashboardSpeedoLow.jpg";
import dashboardHeroImg from "./img/dashboardHeroImg.png";
import interiorHero from "./img/interiorHero.png";
import interiorFeaturesScroll_img1 from "./img/interiorFeaturesScroll_img1.png";
import interiorFeaturesScroll_img2 from "./img/interiorFeaturesScroll_img2.png";
import interiorFeaturesScroll_img3 from "./img/interiorFeaturesScroll_img3.png";
import entertainmentHeroImg from "./img/entertainmentHeroImg.png";
import entertainmentImg from "./img/entertainmentImg.png";
import cabinImg from "./img/cabinImg.png";
import carHeroImg from "./img/carHeroImg.png";

function VegaEvx() {
  return (
    <main>
      <Scroll />
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>VEGA EVX</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        {/* ---- PERFORMANCE SECTION ---- */}
        <PerformanceHero className="target-performance">
          <PerformanceCol1>
            <LeftImg
              data-scroll
              data-scroll-speed="1"
              data-scroll-target=".target-performance"
            >
              <ImageHandler src={performanceImg} placeholder={{}}>
                {(src) => <img src={src} alt="vega evx car" />}
              </ImageHandler>
            </LeftImg>
          </PerformanceCol1>
          <PerformanceCol2>
            <TextContainer
              data-scroll
              data-scroll-speed="1"
              data-scroll-target=".target-performance"
            >
              <Typeset
                subtitle="performance"
                headline="envisioning to be the quickest car in the world, with record-setting acceleration, range and performance"
                body="Fully electric, two seater super car, in a handmade carbon fiber body powered by a dual motor all-wheel-drive drivetrain. All automotive electronics, including the liquid cooled motor controllers and Li-ion battery pack is designed and manufactured in-house, showcasing some of the most advanced technologies in the EV super car space."
                color="white"
              />
            </TextContainer>
            <RightImg
              data-scroll
              data-scroll-speed="2"
              data-scroll-target=".target-performance"
            >
              <ImageHandler src={performanceImgEngine} placeholder={{}}>
                {(src) => <img src={src} alt="vega evx car" />}
              </ImageHandler>
            </RightImg>
          </PerformanceCol2>
        </PerformanceHero>

        {/* ---- BATTERY SECTION ---- */}
        <BatterySection>
          <BatteryCol1 data-scroll data-scroll-speed="1">
            <Typeset
              subtitle="battery"
              headline="All Electric adaptive Powertrain"
              body="Design and develop high performance liquid cooled battery packs using pouch and cylindrical cells. Capability to design dual tab cooled, cell fused battery assemblies with integrated state-of-the-art Battery Management Systems."
              color="black"
            />
          </BatteryCol1>
          <BatteryCol2>
            <ImageHandler src={batteryImg} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </BatteryCol2>
        </BatterySection>
        {/* ---- POWERTRAIN SECTION ---- */}
        <PowertrainSection>
          <PowertrainCol1>
            <ImageHandler src={powertrainImg} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </PowertrainCol1>
          <PowertrainCol2 data-scroll data-scroll-speed="1">
            <Typeset
              subtitle="powertrain"
              headline="dual motor all wheel drive"
              body="Mid-engined, fast forward. The light Vega EVX body ensures a prodigious power to weight ratio, for a jaw-dropping acceleration and top speed."
              color="black"
            />
          </PowertrainCol2>
        </PowertrainSection>

        {/* ---- CHASSIS SECTION ---- */}
        <ChassisSection>
          <Container>
            <VideoWrapper>
              <AutoPlayVideo>
                <ImageHandler src={chassisImg} placeholder={{}}>
                  {(src) => <img src={src} alt="vega evx car" />}
                </ImageHandler>
              </AutoPlayVideo>
            </VideoWrapper>
            <TextBox>
              <TypeBlock>
                <div>
                  <Typeset
                    subtitle="chassis"
                    headline="High Impact Protection"
                    body="Vega EVX is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every car includes Vega’s latest active safety features, such as Automatic Emergency Braking, at no extra cost."
                    color="black"
                  />
                </div>
              </TypeBlock>
            </TextBox>
          </Container>
        </ChassisSection>

        {/* ---- SAFETY SECTION ---- */}
        <SafetySection className="target-safety">
          <SefetySectionImgWrapper>
            <ImageHandler src={safetyImg} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </SefetySectionImgWrapper>
          <Block
            data-scroll
            data-scroll-speed="1.5"
            data-scroll-target=".target-safety"
          >
            <Card
              isCompactDark={true}
              Img={safetyImg1}
              Subtitle="news"
              color="white"
              Subtitle="sequrity"
              Headline="360 security coverage"
            />
            <Card
              isCompactDark={true}
              Img={safetyImg2}
              Subtitle="safety"
              Headline="rear collision detection"
              color="white"
            />
          </Block>
        </SafetySection>

        {/* ---- EXTERIOR SECTION ---- */}
        <ExteriorSection>
          <ExteriorCol1>
            <Typeset
              subtitle="exterior"
              headline="Designed for Efficiency"
              body="With the lowest drag coefficient on Earth and unmatched efficiency, Vega EVX is built for speed and range. Together with a wider body and chassis, these elements help you go down the straight or around corners quicker than ever."
              color="white"
            />
          </ExteriorCol1>
          <ExteriorCol2>
            <div data-scroll data-scroll-speed="1">
              <ImageHandler src={exteriorImg} placeholder={{}}>
                {(src) => <img src={src} alt="vega evx car" />}
              </ImageHandler>
            </div>
          </ExteriorCol2>
        </ExteriorSection>
        {/* ---- AUTONOMOUS SECTION ---- */}
        <AutonomousSection className="target-autonomous">
          <AutonomousTop>
            <AutonomousRow1>
              <Typeset
                subtitle="autonomous driving"
                headline="Future of Driving"
                body="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly."
                color="white"
              />
            </AutonomousRow1>
            <AutonomousRow2 data-scroll data-scroll-speed="1">
              <AutonomousVideo
                autoPlay
                loop
                muted
                data-keepplaying
                src={autonomousVideo}
                type="video/mp4"
              ></AutonomousVideo>
              <Body content="Full Self-Driving Capability introduces additional features and improves existing functionality to make your car more capable over time." />
            </AutonomousRow2>
          </AutonomousTop>
        </AutonomousSection>

        {/* ---- DASHBOARD SECTION ---- */}
        <DashboardSection>
          <DashboardTop>
            <DashboardRow1>
              <Typeset
                subtitle="dashboard"
                headline="Fully DIGITALISED interfaces"
                body="Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard."
                color="white"
              />
            </DashboardRow1>
            <DashboardRow2 data-scroll data-scroll-speed="-1">
              <DashboardImg>
                <ImageHandler src={dashbaordImg} placeholder={{}}>
                  {(src) => <img src={src} alt="vega evx car" />}
                </ImageHandler>
              </DashboardImg>
            </DashboardRow2>
          </DashboardTop>
          <DashboardBot data-scroll data-scroll-speed="2">
            <ImageHandler
              src={dashboardSpeedoImg}
              placeholder={dashboardSpeedoLow}
            >
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </DashboardBot>
          <DashboardHero>
            <ImageHandler src={dashboardHeroImg} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </DashboardHero>
        </DashboardSection>

        {/* ---- INTERIOR SECTION ---- */}
        <InteriorSection>
          <InteriorRow1>
            <Typeset
              subtitle="interior"
              headline="LEADING EDGE and sporty BY DESIGN"
              body="Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard."
              color="white"
            />
          </InteriorRow1>
          <InteriorRow2>
            <ImageHandler src={interiorHero} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </InteriorRow2>
        </InteriorSection>

        {/* ---- INTERIOR FEATURES SECTION ---- */}

        <InteriorFeaturesSection>
          <CardSlider
            isCompact={true}
            titleSubtitle="interior features"
            titleHeadline="every detail covered"
            titleBody="Every inch of the Vega EVX is crafted for a one-of-a-kind driving excitement."
            img01={interiorFeaturesScroll_img3}
            img02={interiorFeaturesScroll_img2}
            img03={interiorFeaturesScroll_img1}
          />
        </InteriorFeaturesSection>

        {/* ---- ENTERTAINMENT SECTION ---- */}
        <EntertainmentSection>
          <EntertainmnetCol1>
            <Typeset
              subtitle="entertainment system"
              headline="surround yourself"
              body="A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road."
              color="black"
            />
            <div data-scroll data-scroll-speed="-0.6">
              <ImageHandler src={entertainmentImg} placeholder={{}}>
                {(src) => <img src={src} alt="vega evx car" />}
              </ImageHandler>
            </div>
          </EntertainmnetCol1>
          <EntertainmentCol2 data-scroll data-scroll-speed="2">
            <ImageHandler src={entertainmentHeroImg} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </EntertainmentCol2>
        </EntertainmentSection>

        {/* ---- CABIN SECTION ---- */}
        <CabinSection>
          <div data-scroll data-scroll-speed="-1">
            <ImageHandler src={cabinImg} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </div>
        </CabinSection>

        {/* ---- SPECS SECTION ---- */}
        <Specs />
        {/* ---- RESERVEINFO SECTION ---- */}
        <CarheroSection>
          <ImageHandler src={carHeroImg} placeholder={{}}>
            {(src) => <img src={src} alt="vega evx car" />}
          </ImageHandler>
          <ReserveinfoSection data-scroll data-scroll-speed="1">
            <Headline
              content="reserve your vega evx today"
              color="white"
              width="clamp"
            />
            <ContainedButton
              text="black"
              body="white"
              content="Reserve"
              onClick={() => window.open("/reserve", "_self")}
            />
          </ReserveinfoSection>
        </CarheroSection>
        {/* ---- FOOTER SECTION ---- */}
        <Footer />
      </div>
    </main>
  );
}

export default VegaEvx;
const CarheroSection = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-self: center;
  justify-items: space-around;
  img {
    width: 100vw;
    height: auto;
    z-index: -1;
  }
`;

const ReserveinfoSection = styled.div`
  display: flex;
  height: 100px;
  flex-direction: row;
  align-self: center;
  justify-items: space-around;
  z-index: 1;
  position: absolute;
  left: 25%;
  margin: 45% 0 0 0;
  column-gap: 200px;
`;
const CabinSection = styled.div`
  width: 100vw;
  height: auto;
  img {
    width: 100%;
  }
`;
const EntertainmentSection = styled.div`
  justify-content: center;
  height: 500px;
  display: flex;
  flex-direction: row;
  padding: 0 500px 0 100px;
  column-gap: 15px;
`;

const EntertainmnetCol1 = styled.div`
  width: 35%;
  z-index: 1;
  img {
    padding: 55px 0 0 0;
    height: auto;
    width: 100%;
    user-select: none;
    user-drag: none;
  }
`;
const EntertainmentCol2 = styled.div`
  z-index: 1;
  width: 65%;
  img {
    height: auto;
    width: 120%;
    user-select: none;
    user-drag: none;
  }
`;

const InteriorFeaturesSection = styled.div`
  height: 1080px;
`;
const InteriorFeaturesText = styled.div`
  padding: 250px 0 0 100px;
`;
const InteriorFeaturesScroll = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  position: relative;
  left: -400px;
  margin: 100px 0 0 0;
  column-gap: 12px;
  cursor: w-resize;
  img {
    height: auto;
    width: 35%;
    user-select: none;
    user-drag: none;
  }
`;
const InteriorSection = styled.div`
  height: auto;
  display: block;
  background-color: ${(props) => props.theme.secondaryColor};
`;
const InteriorRow1 = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px 0 100px;
`;
const InteriorRow2 = styled.div`
  img {
    object-fit: cover;
    width: 100vw;
  }
`;

const DashboardSection = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  height: auto;
`;
const DashboardTop = styled.div`
  height: 700px;
  background-color: ${(props) => props.theme.secondaryColor};
`;
const DashboardRow1 = styled.div`
  padding: 100px 0 50px 100px;
`;

const DashboardImg = styled.div`
  width: 100%;
  height: 100%;
`;

const DashboardRow2 = styled.div`
  margin: 0 200px 0 100px;
  padding-top: 50px;
`;
const DashboardBot = styled.div`
  position: relative;
  top: 120px;
  left: 200px;
  img {
    width: 36%;
    height: auto;
    user-select: none;
    user-drag: none;
  }
`;

const DashboardHero = styled.div`
  img {
    object-fit: cover;
    width: 100vw;
  }
`;

const AutonomousSection = styled.div`
  height: 1300px;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const AutonomousTop = styled.div`
  height: 700px;
  background-color: ${(props) => props.theme.secondaryColor};
`;

const AutonomousRow1 = styled.div`
  padding: 100px 100px 50px 100px;
  margin: 0 150px 0 0;
`;
const AutonomousRow2 = styled.div`
  margin: 0 200px 0 100px;
`;

const AutonomousVideo = styled.video`
  max-width: 100%;
  min-width: 1200px;
  height: auto;
`;

const ExteriorSection = styled.div`
  min-height: 800px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.secondaryColor};
  margin: 0;
`;
const ExteriorCol1 = styled.div`
  width: 30%;
  padding: 100px;
`;
const ExteriorCol2 = styled.div`
  width: 70%;
  margin: 0 200px 0 0;
  img {
    width: 100%;
    height: auto;
  }
`;

const SefetySectionImgWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const SafetySection = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 100vw;
`;
const Block = styled.div`
  height: 500px;
  position: relative;
  top: -250px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 40px 0 0 162px;
`;

const ChassisSection = styled.div`
  padding: 100px 0 50px 0;
  height: auto;
  display: flex;
  flex-direction: column;
  img {
    width: 100vw;
  }
`;

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const AutoPlayVideo = styled.picture``;

const TypeBlock = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-self: center;
`;

const TextBox = styled.div`
  height: 270px;
  background-color: ${(props) => props.theme.negativeColor};
  justify-content: center;
  padding: 60px 60px 0 60px;
  margin-top: auto;
  margin: 0 100px 0 0;
`;

const VideoWrapper = styled.div`
  height: 700px;
  z-index: -10;
`;

const BatterySection = styled.div`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.negativeColor};
  max-height: 100vh;
  min-height: 1080px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const BatteryCol1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 400px 100px auto 100px;
  width: 30%;
`;
const BatteryCol2 = styled.div`
  display: flex;
  width: 70%;
  img {
    margin: 100px 0 0 auto;
    height: auto;
    width: 90%;
  }
`;

const PowertrainSection = styled.div`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.negativeColor};
  max-height: 90vh;
  min-height: 900px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PowertrainCol1 = styled.div`
  width: 60%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const PowertrainCol2 = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 300px 0 0;
`;

const PerformanceCol1 = styled.div`
  margin-top: 100px;
  width: 100%;
`;
const PerformanceCol2 = styled.div`
  width: 100%;
  margin: 250px 0 0 0;
`;
const TextContainer = styled.div`
  width: clamp(20rem, 55rem, 40rem);
`;
const PerformanceHero = styled.div`
  justify-content: center;
  max-height: 100vh;
  min-height: 1080px;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
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

const RightImg = styled.div`
  top: 450px;
  right: 350px;
  position: absolute;
  margin: 200px 0 0 0;
`;

const MotionType = styled.h1`
  font-family: sans-serif;
  font-size: 8rem;
  color: white;
  align-self: center;
  padding-right: 80px;
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
