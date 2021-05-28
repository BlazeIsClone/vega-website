import React, { Component } from "react";
import styled from "styled-components";

class NavBar extends Component {
  render() {
    const ListItem = styled.ul`
      list-style: none;
      display: flex;
      justify-content: space-around;
      font-family: sans-serif;
      height: 8vh;
      background-color: black;
      color: white;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
    `;
    return (
        <ListItem>
          <li>overview</li>
          <li>design</li>
          <li>performance</li>
          <li>innovation</li>
          <li>specs</li>
        </ListItem>
    );
  }
}

export default NavBar;
