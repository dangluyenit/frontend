import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 85vw;
  height: max-content;
  position: relative;
  left: 3%;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem;
`;
const Title = styled.h2`
  position: absolute;
  top: 10vw;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20rem;
`;
const Score = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Code = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const ResultDetails = () => {
  const id = useParams();
  const [result, setResult] = useState({
    studentCode: "",
    score: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/scores/${id}`)
      .then((response) => {
        console.log(response);
        setResult(response.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <Card>
        <Title>Kết quả bài thi</Title>

        <Content>
          <Code>Mã sinh viên:{result.studentCode}</Code>
          <Name>Bài thi:</Name>
          <Score>Điểm của bạn là:{result.score}</Score>
        </Content>
      </Card>
    </Container>
  );
};

export default ResultDetails;
