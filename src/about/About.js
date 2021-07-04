import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/libraryStack.js";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import axios from "axios";

// Components
import Typeset from "../common/Typeset.js";
import CardsBlock from "../common/CardsBlock.js";
import Headline from "../common/Headline.js";
import BannerMoreInfo from "../common/BannerMoreInfo.js";
import DescriptionBody from "../common/DescriptionBody.js";
import CardSlider from "../common/CardSlider.js";

// images
import companyImg from "./img/companyImg.png";
import careersInfoImg from "./img/careersBannerInfoImg.png";
import compatibilitiesManufactureImg from "./img/compatibilitiesManufactureImg.png";
import compatibilitiesDesignImg from "./img/compatibilitiesDesignImg.png";
import compatibilitiesPrototypingImg from "./img/compatibilitiesPrototypingImg.png";
import compatibilitiesSoftwareImg from "./img/compatibilitiesSoftwareImg.png";
import valuesHeroImg from "./img/valuesHeroImg.png";
import valuesImg01 from "./img/valuesImg01.png";
import valuesImg02 from "./img/valuesImg02.png";
import imgPlaceholder from "./img/imgPlaceholder.png";

function About() {
  const hostname = process.env.REACT_APP_HOSTNAME_URL;
  // While fetching render default placeholder data
  const [loading, setLoading] = useState(true);
  // Storing Data Fetched from API
  const [cardData, setCardData] = useState([]);

  // Fetch data asynchronously from th API uising Axios
  const fetchData = async () => {
    await axios
      .get(`${hostname}/api/about`)
      .then((res) => {
        let dataArray = res.data[0];
        // Assing to hook
        setCardData(dataArray);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`error caught white fetching data : ${error}`);
      });
  };
  // callback on componentDidMount
  useEffect(() => fetchData(), []);

  return (
    <main>
      <Scroll />
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>ABOUT</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        {/* ---- COMPANY SECTION ---- */}
        <CompanyHero>
          <DescriptionBody
            img={companyImg}
            subtitle="company"
            headline="A brand inspired by passion"
            body="We challenge everything we do, from ideas to processes and even the minute detail that may seem insignificant to another."
          ></DescriptionBody>
        </CompanyHero>

        {/* ---- VALUES SECTION ---- */}
        <ValuesSection>
          <ValuesCol1 data-scroll data-scroll-speed="1">
            <ValuesTypeWrapper>
              <Typeset
                body="Our teams are highly skilled, we perform brilliantly, when we collaborate; it is something we do every day."
                color="black"
              />
            </ValuesTypeWrapper>
            <ProgressiveImage src={valuesImg01} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ProgressiveImage>
          </ValuesCol1>
          <ValuesCol2 data-scroll data-scroll-speed="-1">
            <ProgressiveImage src={valuesImg02} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ProgressiveImage>
            <ValuesTypeWrapper>
              <Typeset
                subtitle="values"
                headline="We Believe"
                body="The underlying magic you see in everything we do is a result of our team, their passion, innate talent and commitment to make the world a better place, inclusive and accessible to everyone alike; we believe we can, we know we must."
                color="black"
              />
            </ValuesTypeWrapper>
          </ValuesCol2>
        </ValuesSection>

        {/* ---- CAPABILITIES SECTION ---- */}
        <CardSlider
          titleSubtitle="compatibilities"
          titleHeadline="AREAS OF FOCUS"
          titleBody="Every inch of the Vega EVX is crafted for a one-of-a-kind driving excitement."
          img01={compatibilitiesSoftwareImg}
          img01Alt="software interface"
          body1="Software"
          img02={compatibilitiesPrototypingImg}
          img02Alt="circuit board"
          body2="Prototype"
          img03={compatibilitiesManufactureImg}
          img03Alt="fabricator working with a machine"
          body3="Manufacture"
          img04={compatibilitiesDesignImg}
          img04Alt="designer sketching on a paper"
          body4="Design"
        />
        {/* ---- VALUESHERO SECTION ---- */}
        <ValuesHero>
          <ValuesHeroText data-scroll data-scroll-speed="0.7">
            <Headline
              color="white"
              content="A Team, A Family, A Journey With A Vision"
            />
          </ValuesHeroText>
          <ProgressiveImage src={valuesHeroImg} placeholder={{}}>
            {(src) => <img src={src} alt="vega evx car" />}
          </ProgressiveImage>
        </ValuesHero>

        {/* ---- VISIONARIES SECTION ---- */}
        <VisionariesSection>
          <CardsBlock
            twoCards={true}
            headline="THIS WEEK’S TOP TOPICS"
            img1={loading ? imgPlaceholder : cardData.card0.img}
            subtitle1={loading ? "Loading" : cardData.card0.subtitle}
            headline1={loading ? "Loading" : cardData.card0.headline}
            body1={loading ? "Loading" : cardData.card0.body}
            img2={loading ? imgPlaceholder : cardData.card1.img}
            subtitle2={loading ? "Loading" : cardData.card1.subtitle}
            headline2={loading ? "Loading" : cardData.card1.headline}
            body2={loading ? "Loading" : cardData.card1.body}
          />
        </VisionariesSection>

        {/* ---- CAREERSINFO SECTION ---- */}
        <CareersInfo>
          <div style={{ backgroundImage: `url(${careersInfoImg})` }}>
            <BannerMoreInfo
              contentText="JOIN OUR TEAM "
              contentButton="Careers"
              onClick={() => window.open("/careers", "_self")}
            ></BannerMoreInfo>
          </div>
        </CareersInfo>

        {/* ---- FOOTER SECTION ---- */}
        <Footer />
      </div>
    </main>
  );
}

export default About;

const VisionariesSection = styled.div``;
const ValuesHeroText = styled.div`
  display: flex;
  h1 {
    position: absolute;
    align-self: flex-end;
    margin: 150px;
    width: 900px;
    min-width: 300px;
  }
`;
const ValuesHero = styled.div`
  height: auto;
  width: 100%;
  padding: 100px 200px 100px 100px;
  display: flex;
  img {
    height: auto;
    width: 100%;
  }
`;
const ValuesTypeWrapper = styled.div`
  padding: 40px 0 40px 0;
`;
const ValuesSection = styled.div`
  margin: 100px 200px 100px 100px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ValuesCol1 = styled.div`
  padding: 100px 100px 100px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  img {
    width: 90%;
  }
`;
const ValuesCol2 = styled.div`
  padding: 100px 100px 100px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  img {
    width: 90%;
  }
`;

const CareersInfo = styled.div``;
const CompanyHero = styled.div``;

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
