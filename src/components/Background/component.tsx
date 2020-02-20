import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Props } from "./index"
import { Coordinates } from "../../redux/modules/Background/types"

const BackgroundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  min-width: 320px;
  min-height: 700px;

  * {
    box-sizing: border-box;
    font-family: monospace;
  }
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://hcti.io/v1/image/9ada3f7d-280e-409f-a8f6-8d19e8ab4b9a");
  background-position: center;
`;

const CardContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  width: 450px;
  height: 750px;
  background: #4d3585;
  background-color: transparent;
  > div {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 450px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Background: React.FC<Props> = ({ children, fireRippleEffect }) => {

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

  const [logoCoordinates, setLogoCoordinates] = useState<Coordinates>({x: -1, y: -1});

  // Set an event listener to change logo coordinates on screen resize
  useLayoutEffect(() => {
    const updateLogoCoordinates = () => {
      const { x, y } = logoCenterCoordinates();
      setLogoCoordinates({x: x, y: y})
    }
    updateLogoCoordinates();

    window.addEventListener('resize', updateLogoCoordinates);
    return () => window.removeEventListener('resize', updateLogoCoordinates);
  }, [])
  
  // Start firing ripples once all components have rendered
  useLayoutEffect(() => {
    const {x , y} = logoCoordinates; 

    if (x <= -1 || y <= -1) return;

    const $background = $("#main") as any;
    fireRippleEffect({
      x: x, 
      y: y, 
      $background: $background
    })}, [fireRippleEffect, logoCoordinates]);

  return (
    <BackgroundContainer>
      <BackgroundImage id={"main"} />
      <CardContainer>{children}</CardContainer>
    </BackgroundContainer>
  );
};

export default Background;
