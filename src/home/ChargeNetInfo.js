import React, { Component } from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import ContainedButton from "../common/ContainedButton.js";
import imgValue from "./assets/homepagelocation.png";

class ChargeNetInfo extends Component {
    render() {
        const Img = styled.img`
            position: absolute;
            height: 35vh;
            width: 100vw;
            z-index: -99;
        `;

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
                <Img src={imgValue} />
                <Content>
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
