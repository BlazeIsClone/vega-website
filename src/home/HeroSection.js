import React, { Component } from "react";
import styled from "styled-components";
import videoSrc from "../common/mp4/heroMainVideo.mp4";
import Container from "../common/HeroContainer.js";

function HeroSection() {
  return (
    <ContainerWrapper>
      <EffectsWrapper>
        <EffectContainer className="hero-section-blur-container" />
        <EffectOverlay className="hero-section-overlay-container" />
      </EffectsWrapper>
      <Container
        content={
          <Player autoPlay loop muted data-keepplaying>
            <source src={videoSrc} type="video/mp4" />
          </Player>
        }
      />
    </ContainerWrapper>
  );
}

export default HeroSection;

const ContainerWrapper = styled.div``;

const Player = styled.video`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -50;
`;
const EffectsWrapper = styled.div`
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
`;
const EffectContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  transition: opacity 0.5s linear, transform 0.4s linear;
  transition-property: opacity, transform;
  transition-duration: 0.5s, 0.4s;
  transition-timing-function: linear, linear;
  transition: filter 1s linear;
  transition-delay: 0s, 0s;
  opacity: 1;
  z-index: -10;
`;
const EffectOverlay = styled.div`
  height: 100%;
  width: 100%;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background: rgba(22, 26, 33, 1);
  transition: opacity 0.5s linear, transform 0.4s linear;
  transition-property: opacity, transform;
  transition-duration: 0.5s, 0.4s;
  transition-timing-function: linear, linear;
  transition: filter 1s linear;
  transition-delay: 0s, 0s;
  opacity: 0;
  z-index: -20;
`;
