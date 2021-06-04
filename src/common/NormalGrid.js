import React, { Component } from "react";
import styled from "styled-components";

class NormalGrid extends Component {
    render() {
        const GridTemplate = styled.div`
            height: 100vh;
            width: auto;
            display: grid;
            grid-template-columns: repeat(12, 141px);
            gap: 20px;
        `;

        return <GridTemplate></GridTemplate>;
    }
}

export default NormalGrid;
