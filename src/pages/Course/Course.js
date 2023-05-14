import React, { useEffect, useState } from "react";
import { Button, Card, Container, Image, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Course = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/courses")
      .then((response) => {
        console.log(response.data.metadata);
        setCourse(response.data.metadata);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [reload]);
  const handleJoin = (idCourse) => {
    const studentCode = localStorage.getItem("code");
    console.log({ idCourse, studentCode });
    axios
      .post("http://localhost:4000/api/v1/join-courses", {
        idCourse: idCourse,
        studentCode: studentCode,
      })
      .then((result) => {
        console.log(result);
        if (localStorage.setItem("join", result.data.metadata.id) !== null) {
          alert("Khoá học đã được đăng ký");
        } else {
          alert("Đăng ký thành công");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (id) => {
    console.log({ id });
    axios
      .delete(`http://localhost:4000/api/v1/courses/${id}`)
      .then((result) => {
        console.log(result);
        setReload(!reload);
      })
      .catch((error) => {
        console.log(error);
        if (localStorage.getItem("join") !== null) {
          alert("Khoá học có người đăng ký, không thể xoá!");
        } else {
          alert("Xoá thành công");
        }
      });
  };

  return (
    <Container>
      <Title>Khoá học</Title>
      {course.map((post) => (
        <Card key={post.id}>
          {localStorage.getItem("role") === "TEACHER" ? (
            <Image onClick={() => navigate("/course/addlesson")}>
              <Title>{post.name}</Title>
            </Image>
          ) : (
            <Image onClick={() => navigate("/course/details")}>
              <Title>{post.name}</Title>
            </Image>
          )}

          {localStorage.getItem("role") === "TEACHER" ? (
            <Button onClick={() => handleDelete(post.id)}>Xoá</Button>
          ) : (
            <Button onClick={() => handleJoin(post.id)} type="submit">
              Đăng ký
            </Button>
          )}
        </Card>
      ))}

      {localStorage.getItem("role") === "TEACHER" ? (
        <Card>
          <Button onClick={() => navigate("/course/add")}>
            <BiMessageSquareAdd className="icon-btn" />
          </Button>
        </Card>
      ) : (
        ""
      )}
    </Container>
  );
};
export default Course;
