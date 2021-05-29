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
            color: ${(props) =>
                this.props.color === "white" ? "white" : "black"};
        `;

        return <Type>{this.props.content}</Type>;
    }
}
export default Headline;
