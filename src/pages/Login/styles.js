import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  height: 100vh;
  margin-left: 5vw;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
  position: relative;
  left: 0;
  overflow: hidden;
  width: 100%;
  max-width: 100%;

  gap: 100px;
`;
export const Button = styled.button`
  position: relative;
  /* top: 20%;
  left: 15%; */
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  width: 100%;
  height: 100px;
  padding: 12px 80px;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    letter-spacing: 2px;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
