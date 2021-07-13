import React from "react";
import styled from "styled-components";

// Components
import Headline from "./common/Headline";

const NotFound = () => {
  return (
    <div>
      <HeadlineWrapper>
        <HeadHigh>
          <Headline content="404 :(" />
        </HeadHigh>
        <Headline content="oops! The page you're looking for doesn't exist." />
      </HeadlineWrapper>
    </div>
  );
};
export default NotFound;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  row-gap: 100px;
  padding: 100px;
`;

const HeadHigh = styled.div`
  h1 {
    font-size: 6rem;
  }
`;
