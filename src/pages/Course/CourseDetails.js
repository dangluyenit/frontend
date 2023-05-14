import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineDownloadDone } from "react-icons/md";
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
const Input = styled.input`
  width: 300px;
  height: 30%;
  border-radius: 10px;
`;
const Button = styled.button`
  width: max-content;
  height: max-content;
  font-size: 30px;
  color: ${({ theme }) => theme.button};
  transform: translateY(-10px);
`;
const CourseDetails = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [video, setVideo] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handleVideo = (e) => {
    setVideo(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/lessons", {
        name: name,
        content: content,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      {localStorage.getItem("role") === "TEACHER" ? (
        ""
      ) : (
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
      )}
      {localStorage.getItem("role") === "TEACHER" ? (
        <Recommendation>
          <TitleContent>Nội dung khoá học</TitleContent>
          <Card>
            <p>01</p>

            <Input
              type="text"
              placeholder="Nội dung"
              value={content}
              onChange={handleContent}
            />
            <Button onClick={handleAdd}>
              <MdOutlineDownloadDone />
            </Button>
          </Card>
        </Recommendation>
      ) : (
        <Recommendation>
          <TitleContent>Nội dung khoá học</TitleContent>
          <Card>
            <iframe
              width="100%"
              height="150"
              src="https://www.youtube.com/embed/0SJE9dYdpps"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Card>
        </Recommendation>
      )}
    </Container>
  );
};

export default CourseDetails;
