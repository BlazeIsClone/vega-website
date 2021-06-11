import React from "react";
import styled from "styled-components";

function HeroContainer(props) {
  return (
    <>
      <ContainerWrapper>
        <BlurParent className="blur-container"></BlurParent>
        <BlurContainer></BlurContainer>
        <Container>{props.content}</Container>
      </ContainerWrapper>
    </>
  );
}

export default HeroContainer;

const BlurParent = styled.div`
  background-color: rgba(22, 26, 33, 0.8);
  background-position-x: initial;
  background-position-y: initial;
  background-attachment: initial;
  backdrop-filter: blur(15px);
  background-origin: initial;
  background-image: initial;
  background-size: initial;
  background-clip: initial;
  position: relative;
  user-select: none;
  display: block;
  height: 100vh;
  z-index: 99;
  z-index: 1;
  opacity: 0;
  top: 0px;
  left: 0px;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
`;
const ContainerWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: block;
  z-index: -99;
`;
const Container = styled.div``;
const BlurContainer = styled.div``;
