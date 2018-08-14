import styled, {keyframes} from 'styled-components';

export const Main = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #f0f6ff;
`;

export const Place = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #f0f6ff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Chara = styled.img`
  align-self: center;
  max-height: 70vh;
`;

export const TextBox = styled.div`
  height: 20vh;
  width: 80%;
  background-color: #fff;
  padding: 20px;
  border: 2px pink solid;
  margin-bottom: 5vh;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  color: #333;
  font-size: 1.3em;

`;