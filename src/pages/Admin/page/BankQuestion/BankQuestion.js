import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 75vw;
  height: max-content;
  position: relative;
  top: 0;
  left: 1%;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem;
`;
const Table = styled.table`
  display: table;
  width: 80vw;
  height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem;
  overflow: hidden;
`;
const Tr = styled.tr`
  text-align: center;
  :nth-child(even) {
    background-color: #0000000b;
  }
`;
const Th = styled.th`
  height: 50px;
`;
const Td = styled.td`
  height: 50px;
`;
const BankQuestion = () => {
  const [bankQuestion, setBankQuestion] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/bank-questions")
      .then((result) => {
        console.log(result);
        setBankQuestion(result.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <Table>
        <Tr>
          <Th>Tên ngân hàng câu hỏi</Th>
        </Tr>
        {bankQuestion.map((data) => {
          return (
            <Tr>
              <Td>{data.name}</Td>
            </Tr>
          );
        })}
      </Table>
    </Container>
  );
};

export default BankQuestion;
