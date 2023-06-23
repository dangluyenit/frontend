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
  border-radius: 10px;
  cursor: pointer;
`;
export const Links = styled.button`
  display: flex;
  width: max-content;
  padding: 15px;
  opacity: 1;
  text-decoration: none;
  position: relative;
  left: 25%;
  transform: translateY(40px);
  background: #fff;
  color: black;
  border: none;
  border-radius: 10px;
  :hover {
    opacity: 0.5;
  }
  :active {
    transform: scale(0.05);
  }
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
export const TitleCourse = styled.h2`
  width: max-content;
  height: 100%;
  font-size: 25px;
  color: ${({ theme }) => theme.text};
  position: absolute;
  top: 0;
  left: 50vw;
`;
export const Image = styled.div`
  width: 250px;
  height: 25vh;
  border: 10px solid white;
  box-shadow: 1px 1px 20px #000;
  border-radius: 20px;
  background: linear-gradient(to left, #6666ff, #9933ff) right;

  :hover {
    transform: scale(1.05);
    opacity: 0.5;
  }

  :active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;

export const Button = styled.button`
  display: flex;
  width: max-content;
  padding: 15px;
  opacity: 1;
  text-decoration: none;
  position: relative;
  left: 15%;
  transform: translateY(30px);
  color: ${({ theme }) => theme.button};
  margin-left: 45px;
  background: none;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  .icon-btn {
    font-size: 50px;
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
  color: #fff;
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
    color: black;
  }
  svg {
    font-size: 15px;
  }
`;
