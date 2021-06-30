import React from "react";
import styled from "styled-components";

function HeroContainer(props) {
  return (
    <ContainerWrapper>
      <OverlayWrapper>
        <Text className={props.getClass}>{props.children}</Text>
      </OverlayWrapper>
      <Container>{props.content}</Container>
    </ContainerWrapper>
  );
}

export default HeroContainer;

const ContainerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div``;

const OverlayWrapper = styled.div`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 450px;
`;
const Text = styled.h1`
  opacity: 0;
  font-family: ${(props) => props.theme.mainFont};
  font-size: 3rem;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  display: inline-block;
  line-height: 1em;
  color: white;
  transition: all 0.25s ease-in-out;
  transition-timing-function: cubic-bezier(1, 0, 0, 1);
  cursor: default;
`;
