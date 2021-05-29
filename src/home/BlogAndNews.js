import React, { Component } from "react";
import styled from "styled-components";

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
    const TitleText = styled.h2`
      grid-column: 2/5;
      color: black;
      padding: auto 0 0 40px;
      font-family: Ruda, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 46px;
      text-transform: uppercase;
    `;


        return (
            <GridLayout>
                    <TitleText>BLOG AND NEWS</TitleText>
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
