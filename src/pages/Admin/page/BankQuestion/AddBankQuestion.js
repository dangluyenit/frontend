import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 75vw;
  height: 100% !important;
  position: relative;
  top: 0;
  left: 1%;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem;
`;
const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem;
  overflow: hidden;
`;
const Tr = styled.tr`
  text-align: center;
`;
const Th = styled.th`
  height: 50px;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #fff;
  color: black;
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
    background: #3399ff;
    color: #fff;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
const Input = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  background-color: rgb(238, 238, 238);
`;
const Title = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 37%;
  top: 100px;
`;

const AddBankQuestion = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/bank-questions", {
        name: name,
      })
      .then((result) => {
        console.log(result);
        navigate("/bank-questions");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Table>
        <Title>Thêm ngân hàng câu hỏi</Title>
        <Tr>
          <Th>Tên ngân hàng câu hỏi</Th>
          <Input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Tên ngân hàng câu hỏi"
          ></Input>
        </Tr>
        <Button onClick={handleAdd}>Hoàn thành</Button>
      </Table>
    </Container>
  );
};

export default AddBankQuestion;
