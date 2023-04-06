import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  flex: 0 0 calc(75% - 20px);
  max-width: 0 0 calc(25% - 20px);
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 100px;
  background: transparent;
  border-radius: 20px;
`;
const Recommendation = styled.div`
  flex: 0 0 calc(25% - 20px);
  max-width: 0 0 calc(25% - 20px);
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 100px;
  background: transparent;
  border-radius: 20px;
  margin-left: 30px;
`;
const Card = styled.div`
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
`;
const Title = styled.h2`
  flex: 0 0 cacl(50%);
  margin-left: 20px;
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
        Nội dung khoá học
        <Card>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/0SJE9dYdpps"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* <Title>Nội dung 1</Title> */}
        </Card>
        <Card>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/0SJE9dYdpps"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* <Title>Nội dung 2</Title> */}
        </Card>
      </Recommendation>
    </Container>
  );
};

export default CourseDetails;
