import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/libraryStack.js";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import axios from "axios";
import { Timeline } from "gsap/gsap-core";
import gsap from "gsap";

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
import imgPlaceholder from "./img/imgPlaceholder.png";
import imgPlaceholderExtended from "./img/imgPlaceholderExtended.png";
import valuesImg from "./img/valuesImg.png";
import valuesInfoImg from "./img/valueInfoImg.png";
import enquiryImg from "./img/EnquiryImg.png";
import roadmapImg from "./img/roadmapImg.png";

function Investors() {
  const hostname = process.env.REACT_APP_HOSTNAME_URL;
  // While fetching render default placeholder data
  const [loading, setLoading] = useState(true);
  // Storing Data Fetched from API
  const [cardData, setCardData] = useState([]);

  // Fetch data asynchronously from th API uising Axios
  const fetchData = async () => {
    await axios
      .get(`${hostname}/api/investors`)
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

  let cardsRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    let tl = new Timeline();
    let cardsRig = cardsRef;

    tl = gsap.fromTo(
      cardsRig.children,
      {
        opacity: 0,
        y: "8em",
        stagger: 0.5,
        duration: 0.8,
        ease: "power2.easeOut",
      },
      {
        opacity: 1,
        y: "0",
        stagger: 0.5,
        duration: 0.8,
        ease: "power3.easeOut",

        scrollTrigger: {
          trigger: cardsRig,
          scroller: "[data-scroll-container]",
        },
      }
    );
  });
  let cardsRefTwo = useRef(null);

  useEffect(() => {
    // GSAP animations
    let tl = new Timeline();
    let cardsRigTwo = cardsRefTwo;

    tl = gsap.fromTo(
      cardsRigTwo.children,
      {
        opacity: 0,
        y: "8em",
        stagger: 0.5,
        duration: 0.8,
        ease: "power2.easeOut",
      },
      {
        opacity: 1,
        y: "0",
        stagger: 0.5,
        duration: 0.8,
        ease: "power3.easeOut",

        scrollTrigger: {
          trigger: cardsRigTwo,
          scroller: "[data-scroll-container]",
        },
      }
    );
  });

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
            headline="Precision Engineering, Living Innovation."
            body="A pioneering venture to design and develop a world class, high performance, electric supercar in Sri Lanka. For autonomous navigation, the use of advanced AI based software, coupled with intuitive software and hardware, optimizes the performance of the supercar and its powerful drive-train."
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
              subtitle="capabilities"
              headline="DESIGNing, PROTOTYPing, MANUFACTURing"
              body="Inspired by a hyper creative generation with multidisciplinary expertise, we design brilliant end-to-end solutions for multi industry applications. By harnessing the power of advanced algorithms and cutting-edge technology, we focus on delivering futuristic solution to optimize performance and profitability sustainably."
              color="black"
            />
          </CapabilitiesRow2>
        </CapabilitiesSection>

        {/* ---- VALUES SECTION ---- */}
        <ValuesSection>
          <DescriptionBody
            img={valuesImg}
            subtitle="values"
            headline="We Believe"
            body="The underlying magic you see in everything we do is a result of our team, their passion, innate talent and commitment to make the world a better place, inclusive and accessible to everyone alike; we believe we can, we know we must."
            isFliped={true}
          ></DescriptionBody>
        </ValuesSection>

        {/* ---- ROADMAP SECTION ---- */}
        <RoadmapSection>
          <RoadmapRow1 data-scroll data-scroll-speed="-0.5">
            <Typeset
              subtitle="roadmap"
              headline="THE FUTURE IS YET TO BE DEFINED"
              color="black"
            />
          </RoadmapRow1>
          <RoadmapRow2>
            <ImageHandler src={roadmapImg} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </RoadmapRow2>
        </RoadmapSection>
        {/* ---- INNOVATION SECTION ---- */}
        <Block data-scroll data-scroll-speed="2" ref={(el) => (cardsRef = el)}>
          <InnovationCol1>
            <InnovationHeadline>
              <Headline color="black" content="Innovation" />
            </InnovationHeadline>
            <Card
              Img={loading ? imgPlaceholder : cardData.card0.img}
              Subtitle={loading ? "Loading" : cardData.card0.subtitle}
              Headline={loading ? "Loading" : cardData.card0.headline}
              Body={loading ? "Loading" : cardData.card0.body}
              color="black"
              Headline="Candy coated to perfection"
            />
          </InnovationCol1>
          <InnovationCol2>
            <CardExtended
              Img={loading ? imgPlaceholderExtended : cardData.card1.img}
              Subtitle={loading ? "Loading" : cardData.card1.subtitle}
              Headline={loading ? "Loading" : cardData.card1.headline}
              Body={loading ? "Loading" : cardData.card1.body}
              color="black"
            />
          </InnovationCol2>
        </Block>
        {/* ---- VALUES INFO SECTION ---- */}
        <div
          style={{
            backgroundImage: `url(${valuesInfoImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <BannerMoreInfo
            contentText="Our Values"
            contentButton="About"
            onClick={() => window.open("/about", "_self")}
          ></BannerMoreInfo>
        </div>

        {/* ---- SUBSIDARIES SECTION ---- */}
        <SubsidariesSection>
          <Block
            data-scroll
            data-scroll-speed="1"
            ref={(el) => (cardsRefTwo = el)}
          >
            <SubsidariesCol1>
              <SubsidariesHeadline>
                <Headline color="black" content="Subsidaries" />
              </SubsidariesHeadline>
              <CardExtended
                Img={loading ? imgPlaceholderExtended : cardData.card2.img}
                Subtitle={loading ? "Loading" : cardData.card2.subtitle}
                Headline={loading ? "Loading" : cardData.card2.headline}
                Body={loading ? "Loading" : cardData.card2.body}
                color="black"
              />
            </SubsidariesCol1>
            <SubsidariesCol2>
              <Card
                Img={loading ? imgPlaceholder : cardData.card3.img}
                Subtitle={loading ? "Loading" : cardData.card3.subtitle}
                Headline={loading ? "Loading" : cardData.card3.headline}
                Body={loading ? "Loading" : cardData.card3.body}
                color="black"
              />
            </SubsidariesCol2>
          </Block>
        </SubsidariesSection>

        {/* ---- ENQUIRY SECTION ---- */}

        <EnquirySection>
          <Form
            img={enquiryImg}
            imgHeadline="lets create Brilliant synergies that are revolutionary"
            subtitle="enquiry"
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

const RoadmapSection = styled.div`
  height: 900px;
  margin: 0 0 50px 0;
  img {
    user-select: none;
    user-drag: none;
  }
`;
const RoadmapRow1 = styled.div`
  padding: 0 100px 50px 100px;
`;
const RoadmapRow2 = styled.div`
  img {
    width: 100vw;
    height: auto;
  }
`;

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
  margin-top: 80px;
`;

const SubsidariesCol1 = styled.div``;

const InnovationHeadline = styled.div`
  position: relative;
  top: -50px;
`;
const InnovationCol1 = styled.div``;
const InnovationCol2 = styled.div`
  margin-top: -30px;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1000px;
  flex-direction: row;
  column-gap: 20px;
  margin-right: 100px;
  padding-bottom: 150px;
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
    width: clamp(65rem, 100%, 85rem);
  }
`;

const CapabilitiesSection = styled.div`
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.negativeColor};
  display: flex;
  flex-direction: column;
  margin: auto 0 0 0;
  height: 1000px;
  background-color: ${(props) => props.theme.mainColor};
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
