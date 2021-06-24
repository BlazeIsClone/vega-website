import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Timeline } from "gsap/gsap-core";
import gsap from "gsap";

// Components
import Headline from "../common/Headline.js";
import Card from "../common/Card.js";
import CardExtended from "../common/CardExtended.js";

function StayConnected(props) {
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
      <Block ref={(el) => (cardsRef = el)}>
        <HeadlineWrapper>
          <Headline paddingLeft="card" content="Stay Connected" />
        </HeadlineWrapper>
        <BlockRow1>
          <CardExtended
            Img={props.img00}
            Subtitle={props.subtitle00}
            Headline={props.headline00}
            Body={props.body0}
          />
          <Card
            Img={props.img0}
            Subtitle={props.subtitle0}
            Headline={props.headline0}
            Body={props.body0}
          />
        </BlockRow1>
        <BlockRow2>
          <Card
            Img={props.img1}
            Subtitle={props.subtitle1}
            Headline={props.headline1}
            Body={props.body1}
          />
          <Card
            Img={props.img2}
            Subtitle={props.subtitle2}
            Headline={props.headline2}
            Body={props.body2}
          />
          <Card
            Img={props.img3}
            Subtitle={props.subtitle3}
            Headline={props.headline3}
            Body={props.body3}
          />
        </BlockRow2>
      </Block>
    </Container>
  );
}

export default StayConnected;
const HeadlineWrapper = styled.div`
  position: relative;
  left: -160px;
  top: -50px;
`;
const BlockRow1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const BlockRow2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.pureColor};
`;
const Block = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.pureColor};
  column-gap: 20px;
  padding: 90px 100px 0 162px;
`;
