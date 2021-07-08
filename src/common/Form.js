import React from "react";
import styled from "styled-components";
import ProgressiveImage from "react-progressive-image";

// Components
import Typeset from "./Typeset";
import ContainedButton from "./ContainedButton";
import Body from "./Body";
import Headline from "./Headline.js";

function Form(props) {
  return (
    <BlockWrapper>
      <Col1>
        <HeadlineImgWrapper data-scroll data-scroll-speed="1">
          <Headline color="white" content={props.imgHeadline} />
        </HeadlineImgWrapper>
        <ProgressiveImage src={props.img} placeholder={props.imgLow}>
          {(src) => <img src={src} alt="vega evx car" />}
        </ProgressiveImage>
      </Col1>
      <Col2>
        <WidthWrapper>
          {/* ---- Headline ---- */}
          <HeadlineWrapper>
            <Typeset
              subtitle={props.subtitle}
              headline={props.headline}
              body={props.body}
            />
          </HeadlineWrapper>
          {/* ---- Name ---- */}
          <form action="http://localhost:5000/enquiry" method="post">
            <FormBlock>
              <FormElementName>
                <InputLabel>Name</InputLabel>
                <InputElement
                  type="name"
                  name="name"
                  placeholder="Sam Holdands"
                  autoComplete="on"
                  required
                />
              </FormElementName>
              {/* ---- Email ---- */}
              <FormElementEmail>
                <InputLabel>Email</InputLabel>
                <InputElement
                  type="email"
                  name="email"
                  placeholder="samholdands@email.com"
                  autoComplete="on"
                  required
                />
              </FormElementEmail>
              {/* ---- Message ---- */}
              <InputLabel for="input-body">Message</InputLabel>
              <FormElementMessage
                placeholder="hello! I have a question regarding..."
                id="form-message"
                name="message"
                required
              ></FormElementMessage>
            </FormBlock>

            {/* ---- FormFooter ---- */}
            <FormFooter>
              <Body content={formFooterInfo} />
              <ContainedButton
                text="white"
                content="Send"
                type="submit"
                value="submit"
              />
            </FormFooter>
          </form>
        </WidthWrapper>
      </Col2>
    </BlockWrapper>
  );
}

export default Form;

let formFooterInfo = "We typically respond within one business day.";

const onSubmit = () => {
  if (window.confirm("Are you sure you want to submit?")) {
    return alert("🚀 Thank you for submitting!");
  } else {
    return;
  }
};

const BlockWrapper = styled.div`
  width: 100vw;
  min-height: 1080px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 0 100px 0 0;
  background-color: ${(props) => props.theme.negativeColor};
`;
const Col1 = styled.div`
  width: 40%;
  h1 {
    min-width: 100px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const HeadlineImgWrapper = styled.div`
  color: white;
  position: absolute;
  padding: 780px 0 0 60px;
  z-index: 1;
  width: 470px;
`;

const Col2 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  padding: 100px 150px 0;
  z-index: 2;
`;

const WidthWrapper = styled.div`
  width: 100%;
  min-width: 500px;
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  width: 100%;
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
  width: 100%;
  display: block;
  height: 215.27px;
  background: #f9f9f9;
  border-radius: 3px;
  border: 1px solid #f9f9f9;
  resize: none;
  padding: 10px 0 0 15px;
`;

const InputLabel = styled.label`
  margin: 10px 0 20px 15px;
  font-family: ${(props) => props.theme.secondaryFont};
  font-style: normal;
  font-weight: 400;
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
  text-align: start;
  padding: 0 0 0 15px;
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: ${(props) => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: black;
  padding: 0 0 0 20px;
  width: 100%;
`;
