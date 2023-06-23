import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  left: 30%;
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
const Title = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 37%;
  top: 50px;
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
    color: black;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td``;
const EditLesson = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const code = localStorage.getItem("code");
  const [values, setValues] = useState({
    name: "",
    content: "",
    image: "",
    video: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/lessons/${id}`)
      .then((response) => {
        console.log(response);
        setValues({
          ...values,
          name: response.data.metadata.name,
          content: response.data.metadata.content,
          image: response.data.metadata.image,
          video: response.data.metadata.video,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/api/v1/lessons/${id}`, values)
      .then((response) => {
        console.log(response);
        navigate(`/course`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Table>
        <Title>Chỉnh sửa bài học</Title>
        <Tr>
          <Th>Mã giáo viên</Th>
          <Td>: </Td>
          <input type="text" placeholder="Mã giáo viên" value={code} readOnly />
        </Tr>
        <Tr>
          <Th>Tên bài học</Th>
          <Td>: </Td>
          <input
            type="text"
            placeholder="Tên bài học"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </Tr>
        <Tr>
          <Th>Nội dung bài học</Th>
          <Td>: </Td>
          <input
            type="text"
            placeholder="Nội dung bài học"
            value={values.content}
            onChange={(e) => setValues({ ...values, content: e.target.value })}
          />
        </Tr>
        <Tr>
          <Th>Video</Th>
          <Td>: </Td>
          <input
            type="text"
            placeholder="Video"
            value={values.video}
            onChange={(e) => setValues({ ...values, video: e.target.value })}
          />
        </Tr>
        <Button onClick={handleUpdate}>Hoàn thành</Button>
      </Table>
    </Container>
  );
};

export default EditLesson;
