import React, { useEffect, useState } from "react";
import { Button, ButtonEdit, Card, Container, Image, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

const Course = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);

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
  }, []);

  return (
    <Container>
      <Title>Khoá học</Title>
      {course.map((post) => (
        <Card key={post.id}>
          {localStorage.getItem("role") === "TEACHER" ? (
            <Image onClick={() => navigate(`/course/addlesson/${post.id}`)}>
              <Title>{post.name}</Title>
            </Image>
          ) : (
            <Image onClick={() => navigate(`/course/details/${post.id}`)}>
              <Title>{post.name}</Title>
            </Image>
          )}

          {localStorage.getItem("role") === "TEACHER" ? (
            <ButtonEdit onClick={() => navigate(`/course/edit/${post.id}`)}>
              <FaRegEdit />
              Cập nhật
            </ButtonEdit>
          ) : (
            ""
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
