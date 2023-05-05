import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  width: 450px;
  min-height: 200px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(63, 59, 59, 0.75);
  display: flex;
  justify-content: space-evenly;
  margin-left: 20vw;
  margin-top: 10vw;
`;
export const ScoreSection = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`;
export const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;
export const QuestionCount = styled.div`
  margin-bottom: 20px;
  span {
    font-size: 28px;
  }
`;
export const QuestionText = styled.div`
  margin-bottom: 12px;
`;
export const AnswerQuestion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  .btn-choice {
    width: 100%;
    font-size: 16px;
    color: #ffffff;
    background-color: #252d4a;
    border-radius: 15px;
    display: flex;
    padding: 5px;
    justify-content: flex-start;
    align-items: center;
    border: 5px solid #234668;
    cursor: pointer;
    :focus {
      background-color: #00ff00;
      color: black;
      font-style: inherit;
    }
    :active {
      transform: scale(0.95) rotateZ(1.7deg);
    }
  }
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

export const ButtonPre = styled.button`
  color: ${({ theme }) => theme.button};
  width: max-content;
  height: min-content;
  position: absolute;
  margin-top: 10%;
  margin-right: 45%;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const ButtonNext = styled.button`
  color: ${({ theme }) => theme.button};
  width: max-content;
  height: min-content;
  position: absolute;
  margin-top: 10%;
  margin-left: 75%;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
  }
  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    .icon-next {
      color: #fff;
    }
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
