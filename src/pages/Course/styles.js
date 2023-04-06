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
`;
export const Title = styled.h2`
  width: 100%;
  height: 100%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
export const Image = styled.div`
  :root {
    --bg-card: brown;
  }
  width: 250px;
  height: 25vh;
  border-radius: 30px;
  /* background: linear-gradient(to left, #6666ff, #9933ff) right; */
  background: #ff8c00;
  :hover {
    border: 2px solid black;
    transform: scale(1.05);
    border-radius: 30px;
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
  :active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;
export const Button = styled.button`
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
