import React, { Component } from "react";
import styled from "styled-components";

class Subtitile extends Component {
    render() {
        const Type = styled.h1`
            color: red;
            font-family: Numans, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            text-transform: uppercase;
        `;
        return <Type>{this.props.content}</Type>;
    }
}
export default Subtitile;
