import React, { useEffect } from "react";
import styled from "styled-components";
import ProgressiveImage from "react-progressive-image";

//Components
import Typeset from "./Typeset.js";
import Body from "./Body.js";

function CardSlider(props) {
  const isCompact = props.isCompact;
  let body;
  if (!isCompact) {
    body = (
      <Section className="card-slider-container">
        <Row1>
          <TextWrapper>
            <Typeset
              subtitle={props.titleSubtitle}
              headline={props.titleHeadline}
              body={props.titleBody}
              color="black"
            />
          </TextWrapper>
        </Row1>
        <Row2 data-scroll data-scroll-speed="0.7">
          <Cell>
            <ProgressiveImage src={props.img01} placeholder={{}}>
              {(src) => <img src={src} alt={props.img01Alt} />}
            </ProgressiveImage>
            <Body content={props.body1} />
          </Cell>
          <Cell>
            <ProgressiveImage src={props.img02} placeholder={{}}>
              {(src) => <img src={src} alt={props.img02Alt} />}
            </ProgressiveImage>
            <Body content={props.body2} />
          </Cell>
          <Cell>
            <ProgressiveImage src={props.img03} placeholder={{}}>
              {(src) => <img src={src} alt={props.img03Alt} />}
            </ProgressiveImage>
            <Body content={props.body3} />
          </Cell>
          <Cell>
            <ProgressiveImage src={props.img04} placeholder={{}}>
              {(src) => <img src={src} alt={props.img04Alt} />}
            </ProgressiveImage>
            <Body content={props.body4} />
          </Cell>
        </Row2>
      </Section>
    );
  } else {
    body = (
      <Section className="card-slider-container">
        <Row1>
          <TextWrapper>
            <Typeset
              subtitle={props.titleSubtitle}
              headline={props.titleHeadline}
              body={props.titleBody}
              color="black"
            />
          </TextWrapper>
        </Row1>
        <Row2 data-scroll data-scroll-speed="0.7">
          <Cell>
            <ProgressiveImage src={props.img01} placeholder={{}}>
              {(src) => <img src={src} alt={props.img01Alt} />}
            </ProgressiveImage>
            <Body content={props.body1} />
          </Cell>
          <Cell>
            <ProgressiveImage src={props.img02} placeholder={{}}>
              {(src) => <img src={src} alt={props.img02Alt} />}
            </ProgressiveImage>
            <Body content={props.body2} />
          </Cell>
          <Cell>
            <ProgressiveImage src={props.img03} placeholder={{}}>
              {(src) => <img src={src} alt={props.img03Alt} />}
            </ProgressiveImage>
            <Body content={props.body3} />
          </Cell>
        </Row2>
      </Section>
    );
  }
  return <div>{body}</div>;
}

export default CardSlider;

const Section = styled.div`
  position: relative;
  overflow-x: scroll;
  height: 1000px;
  background-color: ${(props) => props.theme.pureColor};
  padding: 60px 0 0 100px;
`;

const TextWrapper = styled.div`
  padding: 0 0 0 200px;
`;

const Row1 = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: center;
`;

const Row2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: hidden;
  padding: 50px 200px 0 0;
`;
const Cell = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  img {
    user-select: none;
    -webkit-user-drag: none;
    width: 100%;
    height: auto;
    min-width: 300px;
    padding: 0 0 6px 0;
  }
`;
