import React from "react";
import styled from "styled-components";
import CardContainer from "../CardContainer";
import LoginCard from "../LoginCard";

const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #070a1c;
  width: 100vw;
  height: 100vh;

  * {
    box-sizing: border-box;
  }
`;

const Background = () => (
  <BackgroundContainer>
    <CardContainer>
      <LoginCard/>
    </CardContainer>
  </BackgroundContainer>
);

export default Background;
