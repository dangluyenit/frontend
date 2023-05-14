import React, { useEffect, useState } from "react";
import { Container, Table } from "./style";
import axios from "axios";

const Result = () => {
  const [score, setScore] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/scores")
      .then((response) => {
        setScore(response.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Bài thi</th>
            <th>Điểm</th>
          </tr>
        </thead>

        {score.map((data) => (
          <tbody>
            <tr>
              <th>{data.name}</th>
              <th>{data.score}</th>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Result;
