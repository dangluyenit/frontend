import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: transparent;
  border-radius: 20px;
  box-shadow: 0 0 10px black;
  width: 50vw;
  height: 70vh;
  position: relative;
  left: 0%;
  top: 100px;
  input {
    width: 500px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: rgb(238, 238, 238);
  }
`;
const TableList = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: transparent;
  border-radius: 20px;
  box-shadow: 0 0 10px black;
  width: 30vw;
  height: 70vh;
  position: relative;
  left: 5%;
  top: 100px;
  input {
    width: 500px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: rgb(238, 238, 238);
  }
  h2 {
    position: absolute;
    left: 25%;
  }
`;
const Title = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 37%;
  top: 20px;
`;
const Button = styled.button`
  position: absolute;
  left: 30%;
  top: 85%;
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  width: max-content;
  padding: 12px 80px;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    letter-spacing: 2px;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: max-content;
  text-align: center;
  padding: 5px;
  margin-top: 20px;
  background: transparent;
  border-radius: 10px;
  background: #4bb6b7;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
  :focus {
    background: rgb(75, 182, 183);
  }
`;
const Recommendation = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: transparent;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #33ccff);
    border-radius: 6px;
  }
`;
const AddLesson = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [video, setVideo] = useState("");
  const [lesson, setLesson] = useState([]);
  const [reload, setReload] = useState(false);
  const handleVideo = (e) => {
    setVideo(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const code = localStorage.getItem("code");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/lessons/courses/${id}`)
      .then((response) => {
        setLesson(response.data.metadata);
        setReload(!reload);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, [reload]);
  const hanldeAdd = () => {
    axios
      .post(`http://localhost:4000/api/v1/lessons`, {
        teacherCode: code,
        name: name,
        content: content,
        video: video,
        idCourse: id,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Table>
        <Title>Thêm bài học</Title>
        <tr>
          <th>Mã giáo viên</th>
          <td>: </td>
          <input type="text" placeholder="Mã giáo viên" value={code} readOnly />
        </tr>
        <tr>
          <th>Tên bài học</th>
          <td>: </td>
          <input
            type="text"
            placeholder="Tên bài học"
            value={name}
            onChange={handleName}
          />
        </tr>
        <tr>
          <th>Nội dung bài học</th>
          <td>: </td>
          <input
            type="text"
            placeholder="Nội dung bài học"
            value={content}
            onChange={handleContent}
          />
        </tr>
        <tr>
          <th>Video</th>
          <td>: </td>
          <input
            type="text"
            placeholder="Video"
            value={video}
            onChange={handleVideo}
          />
        </tr>
        <Button onClick={hanldeAdd}>Hoàn thành</Button>
      </Table>
      <TableList>
        <Title>Danh sách bài học</Title>
        <Recommendation>
          {lesson.map((data) => (
            <Content>{data.name}</Content>
          ))}
        </Recommendation>
      </TableList>
    </Container>
  );
};

export default AddLesson;
