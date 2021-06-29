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
import imgPlaceholder from "./img/imgPlaceholder.png";
import imgPlaceholderExtended from "./img/imgPlaceholderExtended.png";

import newsletterInfoImg from "./img/newsletterInfoImg.png";

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
            img1={loading ? imgPlaceholder : cardData.card0.img}
            subtitle1={loading ? "Loading" : cardData.card0.subtitle}
            headline1={loading ? "Loading" : cardData.card0.headline}
            body1={loading ? "Loading" : cardData.card0.body}
            img2={loading ? imgPlaceholder : cardData.card1.img}
            subtitle2={loading ? "Loading" : cardData.card1.subtitle}
            headline2={loading ? "Loading" : cardData.card1.headline}
            body2={loading ? "Loading" : cardData.card1.body}
            img3={loading ? imgPlaceholder : cardData.card2.img}
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
            onClick={() => window.open("/", "_self")}
          ></BannerMoreInfo>
        </div>
        {/* ---- STAYCONNECTED SECTION ---- */}
        <StayConnectedSection>
          <StayConnected
            img00={loading ? imgPlaceholderExtended : cardData.card3.img}
            subtitle00={loading ? "Loading" : cardData.card3.subtitle}
            headline00={loading ? "Loading" : cardData.card3.headline}
            body00={loading ? "Loading" : cardData.card3.body}
            img0={loading ? imgPlaceholder : cardData.card4.img}
            subtitle0={loading ? "Loading" : cardData.card4.subtitle}
            headline0={loading ? "Loading" : cardData.card4.headline}
            body0={loading ? "Loading" : cardData.card4.body}
            img1={loading ? imgPlaceholder : cardData.card5.img}
            subtitle1={loading ? "Loading" : cardData.card5.subtitle}
            headline1={loading ? "Loading" : cardData.card5.headline}
            body1={loading ? "Loading" : cardData.card5.body}
            img2={loading ? imgPlaceholder : cardData.card6.img}
            subtitle2={loading ? "Loading" : cardData.card6.subtitle}
            headline2={loading ? "Loading" : cardData.card6.headline}
            body2={loading ? "Loading" : cardData.card6.body}
            img3={loading ? imgPlaceholder : cardData.card7.img}
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
