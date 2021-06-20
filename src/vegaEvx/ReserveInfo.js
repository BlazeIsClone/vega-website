import React from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import ContainedButton from "../common/ContainedButton.js";

function ChargeNetInfo() {
  return (
    <Layout>
      <Content data-scroll data-scroll-speed="1">
        <Headline
          content="reserve your vega evx today"
          color="white"
          width="clamp"
        />
        <ContainedButton text="black" body="white" content="Reserve" />
      </Content>
    </Layout>
  );
}

export default ChargeNetInfo;
const Layout = styled.div`
  position: relative;
  top: -200px;
  display: flex;
  flex-direction: column;
  background-color: initial;
  padding: 50px 100px 0 0;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
`;
