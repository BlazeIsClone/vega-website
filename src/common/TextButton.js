import { findByLabelText } from "@testing-library/dom";
import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as IconSvg } from "./svg/chevron_left_black_24dp.svg";

class TextButton extends Component {
    render() {
        const Gridlayout = styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        `
        const Button = styled.button`
            width: 200px;
            display: inline-block;
            font-family: Ruda;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 36px;
            letter-spacing: -0.015em;
            border: none;
            background-color: inherit;
            cursor: pointer;
        `;
        const Icon = styled.div`
        align-self: center;
        `        
        return (
            <Gridlayout>
                <Icon>
                <IconSvg />
                </Icon>
                <Button>{this.props.content}</Button>
            </Gridlayout>
        );
    }
}

export default TextButton;
