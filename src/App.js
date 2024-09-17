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
`;

const ColorBox = styled.div`
  font-family: Danfo, sans-serif;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 24px;
  max-width: 1060px;
  max-height: 600px;
  min-width: 150px; /* Minimum width before scroll or other behavior */
  min-height: 150px; /* Minimum height before scroll or other behavior */
  width: 100%; /* Take up to 100% of the flex parent width */
  height: 100%;
  background-color: ${(props) => props.$bgcolor};
  border: 2px solid #000;
  border-radius: 40px;
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

export default function App() {
  // state declaration
  const [color, setColor] = useState('#fff');

  return (
    <Main>
      <Title>Random Color Generator</Title>
      <ColorBox $bgcolor={color}>Generated Color: {color}</ColorBox>
      <GenerateButton onClick={() => setColor(randomColor())}>
        Generate
      </GenerateButton>
    </Main>
  );
}
