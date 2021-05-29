import React, { Component } from "react";
import styled from "styled-components";
import SimpleButton from "../common/SimpleButton.js";
import img from "./assets/homeValuesImg.png";

class ValuesSliderFirst extends Component {
  render() {
    const GridTemplate = styled.div`
      height: 100vh;
      width: auto;
      display: grid;
      grid-template-columns: repeat(12, 135px);
      gap: 20px;
    `;

    const GridLayout = styled(GridTemplate)`
      justify-content:center;
      align-items: center;
    `
    const ImgContainer = styled.img`
      grid-column: 2/3;
      height: 70vh;
      width: auto;
    `;
    const Container = styled.div`
      grid-column: 3/4;
      margin-left: 5vw;
    `;
    const SubjectText = styled.h4`
      color: black;
      font-family: Ruda, sans-serif;
      font-style: normal;
      font-weight: bold;
    `;
    const TitleText = styled.h2`
      color: black;
      padding: auto 0 0 40px;
      font-family: Ruda, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 46px;
      text-transform: uppercase;
    `;

    const BodyText = styled.p``;
    return (
      <GridLayout>
        <ImgContainer src={img} alt="Car spray painting" />
        <Container>
          <SubjectText>VALUES</SubjectText>
          <TitleText>Redefining Tomorrow's World</TitleText>
          <BodyText>
            Inspired by a hyper creative generation of multidisciplinary
            innovators, our passion brought us here. We are now ready to
            revolutionise the world we live in with cutting-edge technology, to
            enhance lives, to bring people closer to nature and to each other in
            extraordinary ways.
          </BodyText>
          <SimpleButton content="About Us"></SimpleButton>
        </Container>
      </GridLayout>
    );
  }
}

export default ValuesSliderFirst;
