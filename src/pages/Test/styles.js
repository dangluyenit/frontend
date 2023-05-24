import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  flex: 0 0 calc(25% - 20px);
  max-width: 0 0 calc(25% - 20px);
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 100px;
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
`;
export const Title = styled.h2`
  width: 100%;
  height: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;
export const Image = styled.div`
  width: 250px;
  height: 25vh;
  border: 10px solid white;
  border-radius: 30px;
  background: linear-gradient(to left, #9966cc, #ff6633) right;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;
export const Question = styled.div`
  width: 88vw;
  height: 80vh;
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5vw;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #30ff00);
    border-radius: 6px;
  }
`;
export const ScoreSection = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`;
export const QuestionSection = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
export const QuestionCount = styled.div`
  margin-bottom: 20px;
  span {
    font-size: 28px;
  }
`;
export const QuestionText = styled.div`
  margin-bottom: -15px;
  display: block;

  p {
    font-weight: bold;
  }
  svg {
    font-size: 25px;
    transform: translateX(-30px) translateY(-25px);
  }
`;
export const AnswerQuestion = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  background-color: #252d4a;
  border-radius: 15px;

  &:focus {
    background: #6699ff;
  }
  p {
    width: 100%;
    cursor: pointer;
    font-size: 16px;
    color: #ffffff;
    display: flex;
    padding: 5px;
  }
`;
export const Input = styled.input`
  width: 50px;
`;
export const Button = styled.button`
  color: ${({ theme }) => theme.button};
  margin-left: 45px;
  background: none;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
  .icon-btn {
    font-size: 50px;
  }
`;
export const ButtonClearn = styled.button`
  width: max-content;
  height: min-content;
  background: linear-gradient(transparent, #33ccff);
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-3px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
export const ButtonSubmit = styled.button`
  color: ${({ theme }) => theme.button};
  width: max-content;
  height: min-content;
  position: absolute;
  margin-top: 0%;
  margin-left: 80%;
  background: linear-gradient(transparent, #30ff00);
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-5px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
export const ButtonDelete = styled.button`
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: ${({ theme }) => theme.button};
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  width: max-content;
  padding: 12px 20px;
  letter-spacing: 1px;
  text-transform: capitalize;
  cursor: pointer;
  transform: translateY(10px);
  :hover {
    opacity: 0.5;
  }
  svg {
    font-size: 10px;
  }
`;
export const ButtonEdit = styled.button`
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: ${({ theme }) => theme.button};
  font-size: 15px;
  font-weight: 700;
  margin: 15px;
  width: max-content;
  padding: 12px 20px;
  letter-spacing: 1px;
  text-transform: capitalize;
  cursor: pointer;
  transform: translateX(50px);
  :hover {
    opacity: 0.5;
  }
  svg {
    font-size: 10px;
  }
`;
export const Timer = styled.div`
  color: ${({ theme }) => theme.button};
  width: 135px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  position: absolute;
  margin-top: 0%;
  margin-left: 65%;
  background: transparent;
  border: 2px solid black;
  border-radius: 10px;
`;
