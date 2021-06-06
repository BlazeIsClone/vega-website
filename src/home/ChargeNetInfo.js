import React, { Component } from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import ContainedButton from "../common/ContainedButton.js";
import imgValue from "./assets/homepagelocation.png";

class ChargeNetInfo extends Component {
  render() {
    const Layout = styled.div`
      display: flex;
      flex-direction: column;
      height: 336px;
      background-image: url(${imgValue});
    `;
    const Content = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      flex-wrap: nowrap;
      padding-top: 126px;
    `;
    return (
      <Layout>
        <Content data-scroll data-scroll-speed="1">
          <Headline
            content="FIND THE NEAREST AVAILABLE CHARGING LOCATION"
            color="white"
            width="clamp"
          />
          <ContainedButton text="black" body="white" content="chargenet" />
        </Content>
      </Layout>
    );
  }
}

export default ChargeNetInfo;
