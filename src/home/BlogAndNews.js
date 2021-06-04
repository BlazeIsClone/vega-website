import React, { Component } from "react";
import styled from "styled-components";
import img001 from "./assets/homepageblog_newsim01.png";
import img002 from "./assets/homepageblog_newsim02.png";
import img003 from "./assets/homepageblog_newsim03.png";
import Headline from "../common/Headline.js";
import Card from "../common/Card.js";

class BlogAndNews extends Component {
  render() {
    const Block = styled.div`
      height: 85vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 162px;
      gap: 20px;
    `;
    return (
      <>
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
      </>
    );
  }
}

export default BlogAndNews;
