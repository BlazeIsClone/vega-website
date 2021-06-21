import React from "react";
import styled from "styled-components";
import ProgressiveImage from "react-progressive-image";

// Components
import Typeset from "./Typeset";
import ContainedButton from "./ContainedButton";
import Body from "./Body";
import Headline from "./Headline.js";

function Form(props) {
  let subtitle = "enquiry";
  let formFooterInfo = "We typically respond within one business day.";

  const onSubmit = () => {
    alert("Thank You For Submitting!");
  };

  return (
    <BlockWrapper>
      <Col1>
        <HeadlineImgWrapper>
          <Headline color="white" content={props.imgHeadline} />
        </HeadlineImgWrapper>
        <ProgressiveImage src={props.img} placeholder={props.imgLow}>
          {(src) => <img src={src} alt="vega evx car" />}
        </ProgressiveImage>
      </Col1>
      <Col2>
        {/* ---- Headline ---- */}
        <HeadlineWrapper>
          <Typeset
            subtitle={props.subtitle}
            headline={props.headline}
            body={props.body}
          />
        </HeadlineWrapper>
        {/* ---- Name ---- */}
        <FormBlock>
          <FormElementName action="#">
            <InputLabel>Name</InputLabel>
            <InputElement type="name" placeholder="Sam Holdands" />
          </FormElementName>

          {/* ---- Email ---- */}
          <FormElementEmail action="#">
            <InputLabel>Email</InputLabel>
            <InputElement type="email" placeholder="samholdands@email.com" />
          </FormElementEmail>

          {/* ---- Message ---- */}
          <InputLabel for="input-body">Message</InputLabel>
          <FormElementMessage action="#">
            <InputElement id="input-body" type="text">
              Im intrested in
            </InputElement>
          </FormElementMessage>
        </FormBlock>

        {/* ---- FormFooter ---- */}
        <FormFooter>
          <Body content={formFooterInfo} />
          <ContainedButton text="white" content="Send" onClick={onSubmit} />
        </FormFooter>
      </Col2>
    </BlockWrapper>
  );
}

export default Form;

const BlockWrapper = styled.div`
  max-width: 1923px;
  width: 100vw;
  min-height: 1080px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.pureColor};
`;
const Col1 = styled.div`
  width: 41.04%;
`;

const HeadlineImgWrapper = styled.div`
  color: white;
  position: absolute;
  width: 470px;
  padding: 780px 0 0 60px;
`;

const Col2 = styled.div`
  width: calc(100% - 41.04%);
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  margin: 150px 200px 0 150px;
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 657.02px;
  padding-left: 20px;
`;

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  align-self: flex-start;
  padding: 60px 20px 10px 15px;
`;
const FormElementBase = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  font-family: ${(props) => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: black;
  margin: 0 0 60px 0;
  width: 627.02px;
  display: block;
`;

const FormElementName = styled(FormElementBase)`
  height: 44px;
`;

const FormElementEmail = styled(FormElementBase)`
  height: 44px;
`;
const FormElementMessage = styled.textarea`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  font-family: ${(props) => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: black;
  margin: 0 0 20px 0;
  width: 627.02px;
  display: block;
  height: 215.27px;
  background: #f9f9f9;
  border-radius: 3px;
  border: 1px solid #f9f9f9;
  resize: none;
`;

const InputLabel = styled.label`
  color: black;
  margin: 10px 0 20px 15px;
  font-weight: bold;
  font-family: ${(props) => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: black;
`;

const InputElement = styled.input`
  height: 100%;
  width: 100%;
  display: block;
  background: #f9f9f9;
  border-radius: 3px;
  border: 1px solid #f9f9f9;
  padding: 0 0 0 15px;
  text-align: start;
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 130px 0 15px;
  font-family: ${(props) => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: black;
`;
