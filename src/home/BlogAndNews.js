import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import img001 from "./assets/homepageblog_newsim01.png";
import img002 from "./assets/homepageblog_newsim02.png";
import img003 from "./assets/homepageblog_newsim03.png";
import Headline from "../common/Headline.js";
import Card from "../common/Card.js";
import gsap from "gsap";

// Gsap Plugins plugins:
import { Timeline } from "gsap/gsap-core";

// GSAP animations

function BlogAndNews() {
  let cardsRef = useRef(null);

  useEffect(() => {
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
  return (
    <Container data-scroll data-scroll-speed="2">
      <Headline paddingLeft="card" content="BLOG AND NEWS" />
      <Block ref={(el) => (cardsRef = el)}>
        <Card
          Img={img001}
          Subtitle="news"
          Headline="Candy coated to perfection"
          Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale, made for a unique event at the Mugello circuit in Italy"
        />
        <Card
          Img={img002}
          Subtitle="news"
          Headline="camber defined"
          Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale, made for a unique event at the Mugello circuit in Italy"
        />
        <Card
          Img={img003}
          Subtitle="races"
          Headline="LIVING ON THE TRACK"
          Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale, made for a unique event at the Mugello circuit in Italy"
        />
      </Block>
    </Container>
  );
}

export default BlogAndNews;

const Container = styled.div`
  background-color: ${(props) => props.theme.negativeColor};
`;
const Block = styled.div`
  height: 800px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.negativeColor};
  gap: 20px;
  padding: 90px 0 0 162px;
`;
