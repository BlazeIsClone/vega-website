import React from "react";
import styled from "styled-components";
import img001 from "./assets/homepageblog_newsim01.png";
import img002 from "./assets/homepageblog_newsim02.png";
import img003 from "./assets/homepageblog_newsim03.png";
import Headline from "../common/Headline.js";
import Card from "../common/Card.js";

function BlogAndNews() {
  return (
    <Container data-scroll data-scroll-speed="4">
      <Headline paddingLeft="card" content="BLOG AND NEWS" />
      <Block>
        <Card
          Img={img001}
          Subtilte="news"
          Headline="Candy coated to perfection"
          Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale, made for a unique event at the Mugello circuit in Italy"
        />
        <Card
          Img={img002}
          Subtilte="news"
          Headline="camber defined"
          Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale, made for a unique event at the Mugello circuit in Italy"
        />
        <Card
          Img={img003}
          Subtilte="races"
          Headline="LIVING ON THE TRACK"
          Body="A superstar techno DJ, inspired by motorsport and sampling the sounds of the race track, performing live alongside a 1000cv Ferrari SF90 Stradale, made for a unique event at the Mugello circuit in Italy"
        />
      </Block>
    </Container>
  );
}

export default BlogAndNews;

const Container = styled.div`
  margin-top: 100px;
  background-color: white;
`;
const Block = styled.div`
  height: 700px;
  display: flex;
  flex-direction: row;
  background-color: white;
  gap: 20px;
  padding: 90px 0 0 162px;
`;
