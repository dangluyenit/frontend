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
const Course = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/courses")
      .then((result) => {
        console.log(result);
        setCourse(result.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <Table>
        <Tr>
          <Th>Tên khoá học</Th>
          <Th>Mã giáo viên</Th>
        </Tr>
        {course.map((item) => (
          <Tr>
            <Td>{item.name}</Td>
            <Td>{item.teacherCode}</Td>
            <Td></Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default Course;
