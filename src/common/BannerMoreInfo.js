import React from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import ContainedButton from "../common/ContainedButton.js";

function BannerMoreInfo(props) {
  return (
    <Layout>
      <Content data-scroll data-scroll-speed="1">
        <Headline content={props.contentText} color="white" width="clamp" />
        <ContainedButton
          text="black"
          body="white"
          content={props.contentButton}
          onClick={props.onClick}
        />
      </Content>
    </Layout>
  );
}

export default BannerMoreInfo;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 336px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding-top: 140px;
  padding-right: 100px;
`;
