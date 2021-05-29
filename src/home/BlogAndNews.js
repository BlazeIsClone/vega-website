import React, { Component } from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import Subtitle from "../common/Subtitle.js";
import Body from "../common/Body.js";

class BlogAndNews extends Component {
    render() {
        const GridLayout = styled.div`
            height: 100vh;
            display: grid;
            grid-template-columns: repeat(12, 141px);
            gap: 20px;
            justify-content: center;
        `;
        const Cardcontainer = styled.div`
            grid-column: 1/13;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 20px;
        `;
        const Card = styled.div`
            width: 465px;
            height: 590px;
            background-color: grey;
        `;
        const TextContainer = styled.div`
            grid-column: 2/5;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        `;
        return (
            <GridLayout>
                <TextContainer>
                    <Headline content="BLOG AND NEWS"></Headline>
                </TextContainer>
                <Cardcontainer>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </Cardcontainer>
            </GridLayout>
        );
    }
}

export default BlogAndNews;
