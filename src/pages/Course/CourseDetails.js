import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 80vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1.9fr 1.1fr;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 50px;
  background: transparent;
  border-radius: 20px;
`;
const Recommendation = styled.div`
  display: grid;
  width: 100%;
  height: 400px;
  margin-top: 120px;
  background: transparent;
  margin-left: 30px;
  overflow-y: auto;
`;
const Card = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  cursor: pointer;
  margin-top: 30px;
`;
const Title = styled.h2`
  margin-left: 20px;
`;
const TitleContent = styled.h2`
  position: absolute;
  top: 100px;
`;
const CourseDetails = () => {
  return (
    <Container>
      <Content>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/0SJE9dYdpps"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Title>Tên bài học</Title>
      </Content>
      <Recommendation>
        <TitleContent>Nội dung khoá học</TitleContent>
        <Card>
          <p>01</p>
          <h3>Nội dung 1</h3>
        </Card>
        <Card>
          <p>02</p>
          <h3>Nội dung 2 </h3>
        </Card>
        <Card>
          <p>03</p>
          <h3>Nội dung 3</h3>
        </Card>
        <Card>
          <p>04</p>
          <h3>Nội dung 4</h3>
        </Card>
        <Card>
          <p>05</p>
          <h3>Nội dung 5</h3>
        </Card>
        <Card>
          <p>06</p>
          <h3>Nội dung 6</h3>
        </Card>
        <Card>
          <p>07</p>
          <h3>Nội dung 7</h3>
        </Card>
        <Card>
          <p>07</p>
          <h3>Nội dung 7</h3>
        </Card>
        <Card>
          <p>07</p>
          <h3>Nội dung 7</h3>
        </Card>
        <Card>
          <p>07</p>
          <h3>Nội dung 7</h3>
        </Card>
      </Recommendation>
    </Container>
  );
};

export default CourseDetails;
