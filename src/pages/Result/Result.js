import React, { useEffect, useState } from "react";
import { Container, Table, Td, Th, Tr } from "./style";
import axios from "axios";
import moment from "moment";
const Result = () => {
  const [score, setScore] = useState([]);
  const id = localStorage.getItem("code");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/scores/student/${id}`)
      .then((response) => {
        setScore(response.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <Container>
      <Table>
        <Tr>
          <Th>Bài thi</Th>
          <Th>Điểm</Th>
          <Th>Thời gian làm</Th>
          <Th></Th>
        </Tr>

        {score.map((data) => (
          <Tr>
            <Td>{data.test.name}</Td>
            <Td>{data.score}</Td>
            <Td>
              {moment(data.submissionTime).format("MMMM Do YYYY, h:mm a")}
            </Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default Result;
