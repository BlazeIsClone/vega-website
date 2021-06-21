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
import Headline from "../common/Headline.js";
import CardExtended from "../common/CardExtended.js";
import BannerMoreInfo from "../common/BannerMoreInfo.js";
import DescriptionBody from "../common/DescriptionBody.js";
import Form from "../common/Form.js";

// images
import companyImg from "./img/companyImg.png";
import capabilitiesImg from "./img/capabilitiesImg.png";
import newsImg1 from "./img/newsImg1.png";
import newsImg2 from "./img/newsImg2.png";
import valuesImg from "./img/valuesImg.png";
import valuesInfoImg from "./img/valueInfoImg.png";
import subsidariesChargenet from "./img/subsidariesChargenet.png";
import subsidariesAirgrow from "./img/subsidariesAirgrow.png";
import enquiryImg from "./img/EnquiryImg.png";

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
          <DescriptionBody
            img={companyImg}
            subtitle="company"
            headline="A brand inspired by passion"
            body="We challenge everything we do, from ideas to processes and even the minute detail that may seem insignificant to another."
          ></DescriptionBody>
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

        {/* ---- VALUES SECTION ---- */}
        <ValuesSection>
          <DescriptionBody
            img={valuesImg}
            subtitle="company"
            headline="A brand inspired by passion"
            body="We challenge everything we do, from ideas to processes and even the minute detail that may seem insignificant to another."
            isFliped={true}
          ></DescriptionBody>
        </ValuesSection>

        {/* ---- ROADMAP SECTION ---- */}
        {/* ---- INNOVATION SECTION ---- */}
        <Block data-scroll data-scroll-speed="2">
          <InnovationCol1>
            <InnovationHeadline>
              <Headline color="black" content="Innovation" />
            </InnovationHeadline>
            <Card
              Img={newsImg1}
              Headline="conquering covid 19"
              Subtilte="news"
              Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale"
              color="black"
              Headline="Candy coated to perfection"
            />
          </InnovationCol1>
          <InnovationCol2>
            <CardExtended
              Img={newsImg2}
              Headline="conquering covid 19"
              Subtilte="news"
              Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale, made for a unique event at the Mugello circuit in Italy"
              color="black"
            />
          </InnovationCol2>
        </Block>
        {/* ---- VALUES INFO SECTION ---- */}
        <div style={{ backgroundImage: `url(${valuesInfoImg})` }}>
          <BannerMoreInfo
            contentText="Our Values"
            contentButton="About"
          ></BannerMoreInfo>
        </div>

        {/* ---- SUBSIDARIES SECTION ---- */}
        <SubsidariesSection>
          <Block data-scroll data-scroll-speed="1">
            <SubsidariesCol1>
              <SubsidariesHeadline>
                <Headline color="black" content="Subsidaries" />
              </SubsidariesHeadline>
              <CardExtended
                Img={subsidariesChargenet}
                Headline="conquering covid 19"
                Subtilte="news"
                Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale"
                color="black"
                Headline="Candy coated to perfection"
              />
            </SubsidariesCol1>
            <SubsidariesCol2>
              <Card
                Img={subsidariesAirgrow}
                Headline="conquering covid 19"
                Subtilte="news"
                Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale, made for a unique event at the Mugello circuit in Italy"
                color="black"
              />
            </SubsidariesCol2>
          </Block>
        </SubsidariesSection>

        {/* ---- ENQUIRY SECTION ---- */}

        <EnquirySection>
          <Form
            img={enquiryImg}
            subtilte="enquiry"
            headline="let’s talk!"
            body="Hello there! Looks like you re interested in finding out more about Vega Or maybe you just wanted to
start a conversation if so feel free to make an enquiry."
          />
        </EnquirySection>
        {/* ---- FOOTER SECTION ---- */}
        <Footer />
      </div>
    </main>
  );
}

export default Investors;

const EnquirySection = styled.div``;

const SubsidariesSection = styled.div`
  padding-top: 70px;
  height: 1000px;
`;

const SubsidariesHeadline = styled.div`
  position: relative;
  top: -50px;
`;

const SubsidariesCol2 = styled.div`
  margin-top: 135px;
`;

const SubsidariesCol1 = styled.div``;

const InnovationHeadline = styled.div`
  position: relative;
  top: -50px;
`;
const InnovationCol1 = styled.div``;
const InnovationCol2 = styled.div`
  margin-top: -43.5px;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 900px;
  flex-direction: row;
  column-gap: 20px;
  margin-right: 100px;
`;

const ValuesSection = styled.div``;

const CapabilitiesRow1 = styled.div``;

const CapabilitiesRow2 = styled.div`
  justify-content: flex-start;
  padding: 100px 0 0 0;
  h1,
  h2,
  p {
    padding: 0 0 0 500px;
    width: clamp(65rem, 85%, 75rem);
  }
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
    min-width: 1200px;
    height: auto;
  }
`;

const CompanyHero = styled.div``;

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
