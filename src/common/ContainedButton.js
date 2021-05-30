import React, { Component } from "react";
import styled from "styled-components";

class ContainedButton extends Component {
    render() {
        const Button = styled.button`
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            border: none;
            border-radius: 4px;
            padding: 0 16px;
            vertical-align: middle;
            text-align: center;
            text-overflow: ellipsis;
            text-transform: uppercase;
            min-width: 144.78px;
            height: 44px;
            background-color: ${(props) =>
                this.props.body === "white" ? "white" : "black"};
            color: ${(props) =>
                this.props.text === "white" ? "white" : "black"};
        `;
        return <Button>{this.props.content}</Button>;
    }
}

export default ContainedButton;
