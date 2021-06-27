import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import Card from "../common/Card.js";
import gsap from "gsap";
import axios from "axios";

// Gsap Plugins plugins:
import { Timeline } from "gsap/gsap-core";

// Images
import imgPlaceholder from "./assets/imgPlaceholder.png";

function BlogAndNews() {
  let cardsRef = useRef(null);

  const hostname = process.env.REACT_APP_HOSTNAME_URL;
  // While fetching render default placeholder data
  const [loading, setLoading] = useState(true);
  // Storing Data Fetched from API
  const [cardData, setCardData] = useState([]);

  // Fetch data asynchronously from th API uising Axios
  const fetchData = async () => {
    await axios
      .get(`${hostname}/api/home`)
      .then((res) => {
        let dataArray = res.data[0];
        // Assing to hook
        setCardData(dataArray);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`error caught white fetching data : ${error}`);
      });
  };
  // callback on componentDidMount
  useEffect(() => fetchData(), []);

  useEffect(() => {
    let tl = new Timeline();
    let cardsRig = cardsRef;

    tl = gsap.fromTo(
      cardsRig.children,
      {
        opacity: 0,
        y: "8em",
        stagger: 0.5,
        duration: 0.8,
        ease: "power2.easeOut",
      },
      {
        opacity: 1,
        y: "0",
        stagger: 0.5,
        duration: 0.8,
        ease: "power3.easeOut",

        scrollTrigger: {
          trigger: cardsRig,
          scroller: "[data-scroll-container]",
        },
      }
    );
  }, []);
  return (
    <Container data-scroll data-scroll-speed="2">
      <Headline paddingLeft="card" content="BLOG AND NEWS" />
      <Block ref={(el) => (cardsRef = el)}>
        <Card
          Img={loading ? imgPlaceholder : cardData.card0.img}
          Subtitle={loading ? "Loading" : cardData.card0.subtitle}
          Headline={loading ? "Loading" : cardData.card0.headline}
          Body={loading ? "Loading" : cardData.card0.body}
        />
        <Card
          Img={loading ? imgPlaceholder : cardData.card1.img}
          Subtitle={loading ? "Loading" : cardData.card1.subtitle}
          Headline={loading ? "Loading" : cardData.card1.headline}
          Body={loading ? "Loading" : cardData.card1.body}
        />
        <Card
          Img={loading ? imgPlaceholder : cardData.card2.img}
          Subtitle={loading ? "Loading" : cardData.card2.subtitle}
          Headline={loading ? "Loading" : cardData.card2.headline}
          Body={loading ? "Loading" : cardData.card2.body}
        />
      </Block>
    </Container>
  );
}

export default BlogAndNews;

const Container = styled.div`
  background-color: ${(props) => props.theme.negativeColor};
`;
const Block = styled.div`
  height: 800px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.negativeColor};
  gap: 20px;
  padding: 90px 0 0 162px;
`;
