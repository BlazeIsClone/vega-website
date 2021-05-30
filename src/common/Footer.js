import React, { Component } from "react";
import styled from "styled-components";
import Headline from "./Headline.js";
import Body from "./Body.js";
import iconSvg from "./svg/icons8-facebook-f 1.svg";

class Footer extends Component {
   render() {
      const FooterGrid = styled.div`
         display: flex;
         flex-direction: column;
         height: 620px;
         color: white;
         background-color: #0f0f0f;
         text-align: center;
         justify-content: center;
         align-items: center;
      `;

      const IconGrid = styled.div`
         display: flex;
         flex-direction: row;
      `;
      const Icons = styled.img`
         height: 30px;
      `;
      return (
            <FooterGrid>
               <Headline
                  place="center"
                  color="white"
                  content="VEGA INNOVATIONS"
               />
               <IconGrid>
                  <Icons src={iconSvg} />
                  <Icons src={iconSvg} />
                  <Icons src={iconSvg} />
                  <Icons src={iconSvg} />
                  <Icons src={iconSvg} />
               </IconGrid>

               <Body
                  color="white"
                  content="Copyright © 2021 Vega Innovations All rights reserved"
               />
            </FooterGrid>
      );
   }
}

export default Footer;
