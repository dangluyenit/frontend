import React from "react";

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
  flex-direction: column;
  gap: 20px;
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
  const code = localStorage.getItem("code");
  const score = localStorage.getItem("score");
  const name = localStorage.getItem("test");
  return (
    <Container>
      <Card>
        <Title>Kết quả bài thi</Title>
        <Content>
          <Code>Mã sinh viên: {code}</Code>
          <Name>Bài thi: {name}</Name>
          <Score>Điểm của bạn là: {score}</Score>
        </Content>
      </Card>
    </Container>
  );
};

export default ResultDetails;
