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

export const Top = styled.div`
  height:79vh;
  background-color: purple;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Chara = styled.img`
  align-self: center;
  max-height: 100%
  opacity: ${ props => props.visibility}
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
    height: 100%;
    top: 0;
`;

export const Question = styled.div`
  min-width: 25%;
  background-color: #fff;
  padding: 20px;
  border: 2px pink solid;
  margin: 10px 0;

  &:hover {
    background-color: pink; 
    &>span {
        color: #fff;
    }
  }

`;

export const QuestionText = styled.span`
    padding: 0;
    margin: 0;
    color: #333;
    font-size: 1.3em;
`;



export const TextBox = styled.div`
  height: 20vh;
  width: 80%;
  background-color: #fff;
  padding: 20px;
  border: 2px pink solid;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  color: #333;
  font-size: 1.3em;

`;