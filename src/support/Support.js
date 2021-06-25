import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection.js";
import Footer from "../common/Footer.js";
import Scroll from "../common/libraryStack.js";
import { motion } from "framer-motion";

// Components
import Form from "../common/Form.js";
import Headline from "../common/Headline.js";
import TextButton from "../common/TextButton.js";

// Images
import EnquiryImg from "./img/enquiryImg.png";

function Support() {
  return (
    <main>
      <Scroll />
      <MotionContainer>
        <motion.div
          style={motionContainerStyle}
          animate={{ y: "100vh" }}
          transition={transition}
        >
          <MotionType>SUPPORT</MotionType>
        </motion.div>
      </MotionContainer>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div data-scroll-section className="scroll-optimize">
        {/* ---- HELP SECTION ---- */}
        <HelpSection>
          <HeadlineWrapper>
            <Headline content="what kind of help do you need?"></Headline>
          </HeadlineWrapper>
          <HelpBlock>
            <HelpCol1>
              <ListHead>Purchasing</ListHead>
              <ListSort>
                <ListItem>Pre-ordering</ListItem>
                <ListItem>Enquire</ListItem>
                <ListItem>Configuration</ListItem>
                <ListItem>Reservation</ListItem>
              </ListSort>
            </HelpCol1>
            <HelpCol2>
              <ListHead>Products</ListHead>
              <ListSort>
                <ListItem>Pre-Ordering</ListItem>
                <ListItem>Enquire</ListItem>
                <ListItem>Configuration</ListItem>
                <ListItem>Reservation</ListItem>
              </ListSort>
            </HelpCol2>
            <HelpCol3>
              <ListHead>Company</ListHead>
              <ListSort>
                <ListItem>About</ListItem>
                <ListItem>Our Values</ListItem>
                <ListItem>The Team</ListItem>
                <ListItem>Careers</ListItem>
              </ListSort>
            </HelpCol3>
            <HelpCol4>
              <ListHead>News and Alerts</ListHead>
              <ListSort>
                <ListItem>Blog and News</ListItem>
                <ListItem>Newsletter</ListItem>
                <ListItem>Soical Media</ListItem>
                <ListItem>Contact</ListItem>
              </ListSort>
            </HelpCol4>
          </HelpBlock>
        </HelpSection>
        {/* ---- CONTACT SECTION ---- */}
        <ContactSection>
          <HeadlineWrapper>
            <Headline content="Contact"></Headline>
          </HeadlineWrapper>
          <ContactBlock>
            <ContactCol1>
              <ListHead>EMAIL</ListHead>
              <ul>
                <ContactListItem>
                  Contact us any time. We typically respond within one business
                  day.
                </ContactListItem>
              </ul>
              <a href="mailto:contact@vega.com?subject = Contact&body = Hello!">
                <TextButton content="customerservice@vega.com" />
              </a>
            </ContactCol1>
            <ContactCol2>
              <ListHead>CHAT and CALL</ListHead>
              <ul>
                <ContactListItem>
                  Weekdays: 8 AM-8 PM (CDT) Weekends: Closed.
                </ContactListItem>
              </ul>

              <a href="tel:+94123-456-7890">
                <TextButton content="+94 010-1010101" />
              </a>
            </ContactCol2>
            <ContactCol3>
              <ListHead>HEADQUARTERS</ListHead>
              <ul>
                <ContactListItem>
                  Trace Expert City, Tripoli Market, Maradana, Sri Lanka.
                </ContactListItem>
              </ul>
              <a href="https://www.google.com/maps/place/Vega+Innovations/@6.92919,79.8588103,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae25957b0ad1599:0xd167ac13eea7707a!8m2!3d6.9292439!4d79.8610685">
                <TextButton content="Find on Map" />
              </a>
            </ContactCol3>
            <ContactCol4>
              <ListHead>FACTORY</ListHead>
              <ul>
                <ContactListItem>
                  Contact us any time. We typically respond within one business
                  day.
                </ContactListItem>
              </ul>
              <a href="https://www.google.com/maps/place/Vega+Innovations/@6.92919,79.8588103,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae25957b0ad1599:0xd167ac13eea7707a!8m2!3d6.9292439!4d79.8610685">
                <TextButton content="Find on Map" />
              </a>
            </ContactCol4>
          </ContactBlock>
        </ContactSection>

        {/* ---- ENQUIRY SECTION ---- */}
        <EnquirySection>
          <Form
            img={EnquiryImg}
            subtitle="enquiry"
            headline="let’s talk!"
            body="Hello there! Looks like you re interested in finding out more about Vega Or maybe you just wanted to
start a conversation if so feel free to make an enquiry."
            imgHeadline='"With Infinite Imaginations We Can Achieve Greatness Together"'
          />
        </EnquirySection>

        {/* ---- FOOTER SECTION ---- */}
        <Footer />
      </div>
    </main>
  );
}

export default Support;

const ListSort = styled.ul`
  width: 100%;
`;
const ConatctColumnPrototype = styled.div`
  margin: 80px 70px 0;
  width: 100%;
`;
const ContactCol1 = styled(ConatctColumnPrototype)``;
const ContactCol2 = styled(ConatctColumnPrototype)``;
const ContactCol3 = styled(ConatctColumnPrototype)``;
const ContactCol4 = styled(ConatctColumnPrototype)``;

const ContactBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0 100px 0 0;
  padding: 0 100px 0 100px;
  align-items: center;
  justify-content: center;
`;
const ContactSection = styled.div`
  height: 800px;
  width: 100%;
  background-color: ${(props) => props.theme.negativeColor};
  color: black;
`;

const ContactListItem = styled.li`
  list-style: none;
  font-family: ${(props) => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
  color: #000000;
  padding: 10px 0 0 2px;
`;

const HelpBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 100px 0 0;
  align-items: center;
  justify-content: center;
`;
const HeadlineWrapper = styled.div`
  padding: 150px 0 0 100px;
`;
const ListHead = styled.h2`
  font-family: ${(props) => props.theme.mainFont};
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  align-items: center;
  text-transform: uppercase;
  color: #000000;
  padding: 10px 0;
  width: auto;
`;
const ListItem = styled.li`
  list-style: none;
  font-family: ${(props) => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
  color: #000000;
  padding: 20px 0 0 20px;
  width: auto;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
`;
const HelpColumnPrototype = styled.div`
  margin: 80px 70px 0;
  width: auto;
`;
const HelpCol1 = styled(HelpColumnPrototype)``;
const HelpCol2 = styled(HelpColumnPrototype)``;
const HelpCol3 = styled(HelpColumnPrototype)``;
const HelpCol4 = styled(HelpColumnPrototype)``;

const EnquirySection = styled.div`
  background-color: ${(props) => props.theme.negativeColor};
  width: 100vw;
`;

const HelpSection = styled.div`
  height: 600px;
  width: 100%;
  background-color: ${(props) => props.theme.negativeColor};
  color: black;
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
