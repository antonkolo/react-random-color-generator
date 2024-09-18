import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

// styled components
const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #f1f3ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Danfo, sans-serif;
  font-size: 40px;
  max-width: 400px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 0;
  /* shadow */
  /* text-shadow: 0 10px 5px; */
  text-shadow: ${(props) => `0 5px 3px ${props.$shadowColor}`};
  transition: text-shadow 300ms ease-in-out;
`;

const ColorBox = styled.div`
  /* font styles */
  font-family: Danfo, sans-serif;
  font-size: 32px;
  /* layout */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 24px 20px 0px 20px;

  /* size styles */
  max-width: 1060px;
  max-height: 600px;
  min-width: 150px;
  min-height: 150px;
  width: 100%;
  height: 100%;
  border: 2px solid #000;
  border-radius: 40px;
  /* color styles */
  background-color: ${(props) => props.$bgcolor};
  transition: background-color 300ms ease-in-out;
`;

const GenerateButton = styled.button`
  outline: inherit;
  display: inline-block;
  font-family: Danfo, sans-serif;

  font-size: 28px;
  box-sizing: border-box;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 20px 80px;
  border-radius: 20px;
  background-color: #000;
  color: #f1f3ff;
  letter-spacing: 2px;
  border: 1px solid #000;

  &:hover {
    background-color: #c2c2c2;
    color: #f1f3ff;
    cursor: pointer;
  }

  &:active {
    background-color: #c2c2c2;
    color: #f1f3ff;
    border: #f1f3ff;
    cursor: pointer;
  }
`;

const PaintSplash = styled.svg`
  width: 10%;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export default function App() {
  // state declaration
  const [color, setColor] = useState('#fff');

  return (
    <Main>
      <PaintSplash src="./src/img/303242.svg" fill="#000" />
      <Title $shadowColor={color}>Random Color Generator</Title>
      <ColorBox $bgcolor={color}>Generated Color: {color}</ColorBox>
      <GenerateButton onClick={() => setColor(randomColor())}>
        Generate
      </GenerateButton>
    </Main>
  );
}
