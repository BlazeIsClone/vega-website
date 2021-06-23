import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Timeline } from "gsap/gsap-core";
import gsap from "gsap";

// Components
import Headline from "./Headline.js";
import Card from "./Card.js";

function CardsBlock(props) {
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
  const twoCards = props.twoCards;
  let body;
  if (twoCards) {
    body = (
      <Container data-scroll data-scroll-speed="1">
        <HeadlineWrapper>
          <Headline content={props.headline} />
        </HeadlineWrapper>
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
        </Block>
      </Container>
    );
  } else {
    body = (
      <Container data-scroll data-scroll-speed="1">
        <HeadlineWrapper>
          <Headline content={props.headline} />
        </HeadlineWrapper>
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
  return <div>{body}</div>;
}

export default CardsBlock;

const Container = styled.div`
  background-color: ${(props) => props.theme.negativeColor};
  padding: 100px 100px 0 0;
`;
const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Block = styled.div`
  padding: 40px;
  height: 900px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
