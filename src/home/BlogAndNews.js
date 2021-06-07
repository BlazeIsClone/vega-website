import React, { Component } from "react";
import styled from "styled-components";
import img001 from "./assets/homepageblog_newsim01.png";
import img002 from "./assets/homepageblog_newsim02.png";
import img003 from "./assets/homepageblog_newsim03.png";
import Headline from "../common/Headline.js";
import Card from "../common/Card.js";

class BlogAndNews extends Component {
  render() {
    const Container = styled.div`
      margin-top: 100px;
      background-color: white;
    `;
    const Block = styled.div`
      height: 800px;
      display: flex;
      flex-direction: row;
      background-color: white;
      gap: 20px;
      padding: 90px 0 0 162px;
    `;
    return (
      <Container data-scroll data-scroll-speed="4">
        <Headline paddingLeft="card" content="BLOG AND NEWS" />
        <Block>
          <Card
            Img={img001}
            Subtilte="Subtitle"
            Headline="Headline"
            Body="Body"
          />
          <Card
            Img={img002}
            Subtilte="Subtitle"
            Headline="Headline"
            Body="Body"
          />
          <Card
            Img={img003}
            Subtilte="Subtitle"
            Headline="Headline"
            Body="Body"
          />
        </Block>
      </Container>
    );
  }
}

export default BlogAndNews;
