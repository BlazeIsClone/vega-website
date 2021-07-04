import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import TextButton from "../common/TextButton.js";
import img from "./assets/homeValuesImg.png";
import Headline from "../common/Headline.js";
import Subtitle from "../common/Subtitle.js";
import Body from "../common/Body.js";
import gsap from "gsap";

// or get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";
// Gsap Plugins plugins:
gsap.registerPlugin(ScrollTrigger);

function ValuesHome() {
  let animationWrapper = useRef(null);
  let images = useRef(null);
  let text = useRef(null);

  useEffect(() => {
    let tl = new Timeline();
    const firstImage = images;
    let textElement = text;
    //Image Animations
    tl = gsap.from(firstImage, {
      scrollTrigger: {
        trigger: animationWrapper,
        scroller: "[data-scroll-container]",
        start: "top center",
      },
      y: 200,
      duration: 0.8,
    });

    tl = gsap.from(firstImage.firstElementChild, {
      scrollTrigger: {
        trigger: firstImage.firstElementChild,
        scroller: "[data-scroll-container]",
      },
      scale: 1.5,
      duration: 0.7,
    });
    // Text Animations
    tl = gsap.from(textElement, {
      scrollTrigger: {
        trigger: textElement,
        scroller: "[data-scroll-container]",
      },
      y: 200,
      duration: 1.2,
    });
  });
  return (
    <ContainerWrapper
      ref={(el) => (animationWrapper = el)}
      data-scroll
      data-scroll-speed="2"
    >
      <ImgContainer ref={(el) => (images = el)}>
        <Img src={img} />
      </ImgContainer>
      <Container ref={(el) => (text = el)}>
        <TextWrapper value>
          <Subtitle content="values"></Subtitle>
          <Headline content="Redefining Tomorrow's World"></Headline>
          <Body
            content="Inspired by a hyper creative generation of multidisciplinary innovators, our passion brought us here.
We are now ready to revolutionise the world we live in with cutting-edge technology, to enhance lives, to bring people closer to nature and to each other in extraordinary ways."
            width="clamp"
          />
          <TextButton
            content="About Us"
            onClick={() => window.open("/about", "_self")}
          ></TextButton>
        </TextWrapper>
      </Container>
    </ContainerWrapper>
  );
}

export default ValuesHome;

const GridTemplate = styled.div`
  min-height: 880px;
  width: auto;
  display: flex;
  column-gap: 60px;
  background-color: ${(props) => props.theme.negativeColor};
  align-items: center;
  justify-self: center;
  padding: 100px 60px 0 160px;
`;

const ContainerWrapper = styled(GridTemplate)`
  align-items: center;
  justify-content: center;
`;
const ImgContainer = styled.div`
  height: 605px;
  width: 1300px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  min-width: 500px;
  object-fit: cover;
  height: auto;
  user-select: none;
  user-drag: none;
`;

const Container = styled.div``;
const TextWrapper = styled.div``;
