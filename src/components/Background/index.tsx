import React from "react";
import styled from "styled-components";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

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

const CardContainer = styled.div`
    width: 400px;
    height: 550px;
    background: #4d3585;
    padding: 40px 20px;
`

const Background: React.FC<Props> = ({ children }) => (
  <BackgroundContainer>
    <CardContainer>
      {children}
    </CardContainer>
  </BackgroundContainer>
);

export default Background;
