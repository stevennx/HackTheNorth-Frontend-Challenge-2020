import React, { useLayoutEffect } from "react";
import styled from "styled-components";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

const BackgroundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("https://hcti.io/v1/image/a0c0a72e-d150-4b81-b285-a356793a24b4");

  * {
    box-sizing: border-box;
  }
`;

const CardContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  width: 400px;
  height: 550px;
  background: #4d3585;
  background-color: transparent;
  > div {
    width: 100%;
    height: 100%;
  }
`;

const Background: React.FC<Props> = ({ children }) => {
  const logoCenterCoordinates = () => {
    // Warning: Conversion cancer! I got lazy! :P
    const $logo = $("#logo").first();
    const offset = $logo.offset() as any;
    const width = $logo.width() as number;
    const height = $logo.height() as number;

    const leftOffset = offset.left as number;
    const topOffset = offset.top as number;
    return {
      x: leftOffset + width / 2,
      y: topOffset + height / 2
    };
  };
  useLayoutEffect(() => {
    const { x, y } = logoCenterCoordinates();
    const $background = $("#main") as any;
    $background.ripples({
      interactive: false
    });
    $background.ripples("drop", x, y, 80, 1);
  }, []);

  return (
    <BackgroundContainer id="main">
      <CardContainer>{children}</CardContainer>
    </BackgroundContainer>
  );
};

export default Background;
