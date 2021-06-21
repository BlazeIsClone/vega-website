import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Timeline } from "gsap/gsap-core";
import gsap from "gsap";

// Components
import Headline from "../common/Headline.js";
import Card from "../common/Card.js";

function TopTopics(props) {
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
  return (
    <Container data-scroll data-scroll-speed="1">
      <Headline paddingLeft="card" content="THIS WEEK’S TOP TOPICS" />
      <Block ref={(el) => (cardsRef = el)}>
        <Card
          Img={props.img1}
          Subtilte={props.subtitle1}
          Headline={props.headline1}
          Body={props.body1}
        />
        <Card
          Img={props.img2}
          Subtilte={props.subtitle2}
          Headline={props.headline2}
          Body={props.body2}
        />
        <Card
          Img={props.img3}
          Subtilte={props.subtitle3}
          Headline={props.headline3}
          Body={props.body3}
        />
      </Block>
    </Container>
  );
}

export default TopTopics;

const Container = styled.div`
  background-color: ${(props) => props.theme.pureColor};
`;
const Block = styled.div`
  height: 700px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.pureColor};
  gap: 20px;
  padding: 90px 0 0 162px;
`;
