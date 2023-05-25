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
const Test = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/tests")
      .then((result) => {
        console.log(result);
        setTest(result.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <Table>
        <Tr>
          <Th>Tên bài thi</Th>
          <Th>Mã giáo viên</Th>
          <Th>Số lượng câu hỏi</Th>
        </Tr>
        {test.map((item) => (
          <Tr>
            <Td>{item.name}</Td>
            <Td>{item.teacherCode}</Td>
            <Td>{item.quantityQuestion}</Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default Test;
