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
const ButtonDelete = styled.button`
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: black;
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
`;
const Student = () => {
  const [student, setStudent] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/student")
      .then((result) => {
        console.log(result);
        setStudent(result.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);
  const handleDelete = (id) => {
    console.log({ id });
    axios
      .delete(`http://localhost:4000/api/v1/student/${id}`)
      .then((response) => {
        console.log(response);
        setReload(!reload);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Table>
        <Tr>
          <Th>Họ và tên</Th>
          <Th>Mã sinh viên</Th>
          <Th>Email</Th>
          <Th>Chức năng</Th>
        </Tr>
        {student.map((item, index) => (
          <Tr key={index !== null}>
            <Td>{item.name}</Td>
            <Td>{item.studentCode}</Td>
            <Td>{item.email}</Td>
            <Td>
              <ButtonDelete onClick={() => handleDelete(item.studentCode)}>
                Xoá
              </ButtonDelete>
            </Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default Student;
