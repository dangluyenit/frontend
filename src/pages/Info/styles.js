import styled from "styled-components";
export const Container = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftInfo = styled.div`
  flex: 0 0 calc(40% - 20px);
  max-width: 0 0 calc(50% - 20px);
  width: 100%;
  height: 50%;
  padding: 20px;
  margin-top: 20px;
  margin-left: 50px;
  background: transparent;
  box-shadow: 0px 0px 30px 1px rgba(156, 156, 156);
  border-radius: 20px;
`;
export const RightInfo = styled.div`
  flex: 0 0 calc(60% - 20px);
  max-width: 0 0 calc(50% - 20px);
  width: 100%;
  height: max-content;
  padding: 20px;
  margin-top: 20px;
  background: transparent;
  border-radius: 20px;
  margin-left: 30px;
  box-shadow: 0px 0px 30px 1px rgba(156, 156, 156);
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .profile_img {
    width: 200px;
    height: 200px;
    background: transparent;
    border-radius: 50%;
    border: 10px solid gray;
  }
`;
export const CardBody = styled.div`
  margin-top: 10px;
`;

export const Table = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  font-size: 20px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
  /* color: ${({ theme }) => theme.text};
  width: max-content;
  background: ${({ theme }) => theme.bg3};
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 0 0 10px #0f0c29; */
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  width: max-content;
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

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  backdrop-filter: blur(4px);
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 10px black;
  width: 50%;
  height: 100vh;
  input {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
  }
`;

export const Gender = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: max-content;
  gap: 20px;

  input {
    width: max-content;
  }
`;

export const ButtonDone = styled.button`
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  width: max-content;
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

export const ButtonClose = styled.button`
  transform: translate(570px, -66px);
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  width: max-content;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    letter-spacing: 2px;
  }
  :focus {
    outline: none;
  }
`;
