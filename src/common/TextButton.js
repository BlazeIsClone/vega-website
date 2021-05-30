import React, { Component } from "react";
import styled from "styled-components";
import iconSvg from "./svg/chevron_left_black_24dp.svg";

class TextButton extends Component {
    render() {
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
            padding: 14px 0 0 0;
            cursor: pointer;
        `;
        var getValue = null;
        const Icon = styled.img`
            transform: rotate(-90%);
            padding: 10px 0 0 0;
        `;
        const Gridlayout = styled.div`
            display: flex;
            flex-direction: row;
            
        `;

        return (
            <Gridlayout>
                <Icon src={iconSvg} />
                <Button>{this.props.content}</Button>
            </Gridlayout>
        );
    }
}

export default TextButton;
