import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/libraryStack.js";
import { motion } from "framer-motion";
import axios from "axios";

// Components
import BannerMoreInfo from "../common/BannerMoreInfo.js";
import CardsBlock from "../common/CardsBlock.js";
import StayConnected from "./StayConnected.js";

// Images
import img001 from "./img/weeksTopTopicsImg01.png";
import img002 from "./img/weeksTopTopicsImg02.png";
import img003 from "./img/weeksTopTopicsImg03.png";

import newsletterInfoImg from "./img/newsletterInfoImg.png";
import stayConnectedImg01 from "./img/stayConnectedImg01.png";
import stayConnectedImg02 from "./img/stayConnectedImg02.png";
import stayConnectedImg03 from "./img/stayConnectedImg03.png";
import stayConnectedImg04 from "./img/stayConnectedImg04.png";
import stayConnectedImg05 from "./img/stayConnectedImg05.png";

function Blog() {
  const hostname = process.env.REACT_APP_HOSTNAME_URL;
  // While fetching render default placeholder data
  const [loading, setLoading] = useState(true);
  // Storing Data Fetched from API
  const [cardData, setCardData] = useState([]);

  // Fetch data asynchronously from th API uising Axios
  const fetchData = async () => {
    await axios
      .get(`${hostname}/api/blog`)
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
          <MotionType>BLOG AND NEWS</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        {/* ---- TOPTOPICS SECTION ---- */}
        <TopTopicsSection>
          <CardsBlock
            headline="THIS WEEK’S TOP TOPICS"
            img1={img001}
            subtitle1={loading ? "Loading" : cardData.card0.subtitle}
            headline1={loading ? "Loading" : cardData.card0.headline}
            body1={loading ? "Loading" : cardData.card0.body}
            img2={img002}
            subtitle2={loading ? "Loading" : cardData.card1.subtitle}
            headline2={loading ? "Loading" : cardData.card1.headline}
            body2={loading ? "Loading" : cardData.card1.body}
            img3={img003}
            subtitle3={loading ? "Loading" : cardData.card2.subtitle}
            headline3={loading ? "Loading" : cardData.card2.headline}
            body3={loading ? "Loading" : cardData.card2.body}
          />
        </TopTopicsSection>
        {/* ---- NEWSLETTER INFO SECTION ---- */}
        <div style={{ backgroundImage: `url(${newsletterInfoImg})` }}>
          <BannerMoreInfo
            contentText="SUBSCRIBE TO VEGA NEWSLETTER"
            contentButton="newsletter"
          ></BannerMoreInfo>
        </div>
        {/* ---- STAYCONNECTED SECTION ---- */}
        <StayConnectedSection>
          <StayConnected
            img00={stayConnectedImg01}
            subtitle00={loading ? "Loading" : cardData.card3.subtitle}
            headline00={loading ? "Loading" : cardData.card3.headline}
            body00={loading ? "Loading" : cardData.card3.body}
            img0={stayConnectedImg02}
            subtitle0={loading ? "Loading" : cardData.card4.subtitle}
            headline0={loading ? "Loading" : cardData.card4.headline}
            body0={loading ? "Loading" : cardData.card4.body}
            img1={stayConnectedImg03}
            subtitle1={loading ? "Loading" : cardData.card5.subtitle}
            headline1={loading ? "Loading" : cardData.card5.headline}
            body1={loading ? "Loading" : cardData.card5.body}
            img2={stayConnectedImg04}
            subtitle2={loading ? "Loading" : cardData.card6.subtitle}
            headline2={loading ? "Loading" : cardData.card6.headline}
            body2={loading ? "Loading" : cardData.card6.body}
            img3={stayConnectedImg05}
            subtitle3={loading ? "Loading" : cardData.card7.subtitle}
            headline3={loading ? "Loading" : cardData.card7.headline}
            body3={loading ? "Loading" : cardData.card7.body}
          />
        </StayConnectedSection>

        {/* ---- FOOTER SECTION ---- */}
        <Footer />
      </div>
    </main>
  );
}

export default Blog;

const StayConnectedSection = styled.div`
  display: flex;
  height: 1500px;
  background-color: ${(props) => props.theme.negativeColor};
  margin: 0 100px 0 0;
  width: 100vw;
  padding-top: 100px;
`;

const TopTopicsSection = styled.div`
  background-color: ${(props) => props.theme.negativeColor};
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
