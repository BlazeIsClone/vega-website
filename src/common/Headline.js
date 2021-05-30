import React, { Component } from "react";
import styled from "styled-components";

class Headline extends Component {
    render() {
        const Type = styled.h1`
            font-family: Ruda, sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 46px;
            text-transform: uppercase;
            width: ${(props) =>
                this.props.width === "clamp"
                    ? "clamp(20rem, 100%, 50rem)"
                    : "clamp(45ch, 50%, 70ch)"};
            color: ${(props) =>
                this.props.color === "white" ? "white" : "black"};
            text-align: ${(props) =>
                this.props.align === "center" ? "center" : "none"};
            place-self: ${(props) =>
                this.props.place === "center" ? "center" : "none"};
        `;

        return <Type>{this.props.content}</Type>;
    }
}
export default Headline;
