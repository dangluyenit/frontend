import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [join, setJoin] = useState([]);
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
    axios
      .get("http://localhost:4000/api/v1/join-courses")
      .then((result) => {
        console.log(result);
        setJoin(result.data.metadata);
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
          <Th>Số lượng sinh viên tham gia</Th>
        </Tr>
        {course.map((item) => {
          const courseData = join.filter((data) => data.idCourse === item.id);
          return (
            <Tr>
              <Td>{item.name}</Td>
              <Td>{courseData.length}</Td>
            </Tr>
          );
        })}
      </Table>
    </Container>
  );
};

export default Course;
