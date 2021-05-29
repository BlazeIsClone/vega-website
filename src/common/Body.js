import React, { Component } from "react";
import styled from "styled-components";

class Body extends Component {
    render() {
        const Type = styled.p`
            @import url("https://fonts.googleapis.com/css2?family=Ruda&display=swap");
            font-family: Roboto, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            color: ${(props) =>
                this.props.color === "white" ? "white" : "black"};
        `;
        return <Type>{this.props.content}</Type>;
    }
}
export default Body;
