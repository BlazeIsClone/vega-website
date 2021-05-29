import React, { Component } from "react";
import styled from "styled-components";


class NavBar extends Component {
  render() {
    const ListItem = styled.ul`
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-family: sans-serif;
      height: 8vh;
      background-color: black;
      color: white;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
    `;
    const ListBreakInner = styled.div`
      display: flex;
      justify-content: space-between;
      gap: 20vw;
      color: white;
      position: absolute;
    `;
    const ListBreakOuter = styled.div`
      display: flex;
      justify-content: space-between;
      gap: 62vw;
      color: white;
      position: absolute;
    `;
    return (
        <ListItem>
          <ListBreakInner>
            <p>|</p>
            <p>|</p>
          </ListBreakInner>
          <ListBreakOuter>
            <p>|</p>
            <p>|</p>
          </ListBreakOuter>

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
