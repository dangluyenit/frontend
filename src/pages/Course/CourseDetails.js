import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: 1.8fr 0.5fr;
  gap: 50px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;
  text-align: center;
  padding: 5px;
  margin-top: 20px;
  background: transparent;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
  :focus {
    /* background: rgb(75, 182, 183); */
    background: #33ccff;
  }
`;
const Lesson = styled.div`
  width: 100%;
  height: 90vh;
  padding: 20px;
  margin-top: 30px;
  margin-left: 30px;
  background: transparent;
  border-radius: 20px;
  background: #fff;
`;
const Recommendation = styled.div`
  display: grid;
  width: 100%;
  height: 300px;
  margin-top: 120px;
  background: transparent;
  margin-left: 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #33ccff);
    border-radius: 6px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
`;

const CourseDetails = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState([]);
  const [video, setVideo] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/lessons/courses/${id}`)
      .then((response) => {
        console.log(response);
        setLesson(response.data.metadata);
        setVideo(response.data.metadata[0].video);
        console.log({ video });
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, [id]);

  const onVideoSelection = (id) => {
    axios
      .get(`http://localhost:4000/api/v1/lessons/${id}`)
      .then((response) => {
        console.log(response);
        setVideo(response.data.metadata.video);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Lesson>
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          url={video}
        ></ReactPlayer>
      </Lesson>
      <Recommendation>
        {lesson.map((data) => {
          return (
            <Content
              tabIndex="0"
              key={data.name}
              onClick={() => onVideoSelection(data.id)}
            >
              <Title>{data.name}</Title>
            </Content>
          );
        })}
      </Recommendation>
    </Container>
  );
};

export default CourseDetails;
