import React, { Component } from "react";
import styled from "styled-components";

class SimpleButton extends Component {
    render() {
        const Button = styled.button`
            width: 200px;
            display: inline-block;
        `;
        var getValue = null;

        return <Button>{this.props.content}</Button>;
    }
}

export default SimpleButton;
