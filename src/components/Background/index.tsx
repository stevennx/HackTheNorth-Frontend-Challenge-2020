import React from "react";
import styled from "styled-components";
import CardContainer from "../CardContainer";

const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #070a1c;
  width: 100vw;
  height: 100vh;

  div {
    box-sizing: border-box;
  }

  span,
  a,
  div {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
`;

const Background = () => (
  <BackgroundContainer>
    <CardContainer>
      <div id="temp">{"hello world"}</div>
    </CardContainer>
  </BackgroundContainer>
);

export default Background;
