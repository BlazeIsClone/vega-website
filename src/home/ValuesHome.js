import React, { Component } from "react";
import styled from "styled-components";
import TextButton from "../common/TextButton.js";
import img from "./assets/homeValuesImg.png";
import Headline from "../common/Headline.js";
import Subtitle from "../common/Subtitle.js";
import Body from "../common/Body.js";

class ValuesHome extends Component {
  render() {
    const GridTemplate = styled.div`
      max-height: 100vh;
      min-height: 980px;
      width: auto;
      display: grid;
      grid-template-columns: repeat(12, 141px);
      grid-template-rows: 1fr;
      gap: 20px;
      background-color: white;
    `;

    const GridLayout = styled(GridTemplate)`
      align-items: center;
      justify-content: center;
    `;
    const Img = styled.img`
      height: 695px;
      width: 802px;
    `;
    const ImgContainer = styled.div`
      grid-column: 2/8;
      display: flex;
      grid-row: 1/2;
    `;

    const Container = styled.div`
      grid-column: 8/11;
      grid-row: 1/2;
    `;
    return (
      <GridLayout>
        <ImgContainer>
          <Img src={img} />
        </ImgContainer>
        <Container>
          <div data-scroll data-scroll-speed="1">
            <Subtitle content="values"></Subtitle>
            <Headline content="Redefining Tomorrow's World"></Headline>
            <Body
              content="Inspired by a hyper creative generation of multidisciplinary innovators, our passion brought us here.
We are now ready to revolutionise the world we live in with cutting-edge technology, to enhance lives, to bring people closer to nature and to each other in extraordinary ways.
"
            />
          </div>
          <TextButton content="About Us"></TextButton>
        </Container>
      </GridLayout>
    );
  }
}

export default ValuesHome;
