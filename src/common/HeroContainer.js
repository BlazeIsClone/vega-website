import React, { Component } from "react";
import styled from "styled-components";

class HeroContainer extends Component {
    render() {
        const Container = styled.div`
          position: relative;
          height: 100vh;
          display: block;
          overflow: hidden;
        `;
        return (
            <Container>
                {this.props.content}
            </Container>
        );
    }
}

export default HeroContainer;
