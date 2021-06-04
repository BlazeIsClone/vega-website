import React, { Component } from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import ContainedButton from "../common/ContainedButton.js";
import imgValue from "./assets/homepagelocation.png";

class ChargeNetInfo extends Component {
  render() {
    const Layout = styled.div`
      display: block;
      height: 35vh;
    `;
    const Content = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      flex-wrap: nowrap;
      padding-top: calc(30vh / 2);
    `;
    return (
      <Layout>
        <Content>
          <Headline
            content="FIND THE NEAREST AVAILABLE CHARGING LOCATION"
            color="black"
            width="clamp"
          />
          <ContainedButton text="white" body="black" content="chargenet" />
        </Content>
      </Layout>
    );
  }
}

export default ChargeNetInfo;
