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

export const Button = styled.button`
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
    color: black;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
  svg {
    font-size: 20px;
  }
`;
export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  position: absolute;
  left: 22%;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: #6100d4;
`;
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  font-size: 20px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.text};
`;
export const TableEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
  font-size: 20px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.text};
`;
export const Modal = styled.div`
  display: grid;
  height: 90vh;
  border: none;
  border-radius: 10px;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 12%;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #4bb6b7);
    border: none;
    border-radius: 6px;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background: white;
  border-radius: 10px;
  width: 80vw;
  height: max-content;
  input {
    width: 40vw;
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
  border-radius: 10px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  width: max-content;
  height: max-content;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    color: black;
  }
  :focus {
    outline: none;
  }
`;

export const ButtonClose = styled.button`
  border-radius: 10px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  width: max-content;
  height: max-content;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    color: black;
  }
  :focus {
    outline: none;
  }
`;
export const Tr = styled.tr``;
export const Th = styled.th`
  svg {
    font-size: 20px;
  }
`;
export const Td = styled.td``;
export const Input = styled.input``;
export const InputFile = styled.input`
  ::-webkit-file-upload-button {
    background: #000;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }
`;
