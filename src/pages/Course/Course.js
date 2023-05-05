import React, { useEffect, useState } from "react";
import { Button, Card, Container, Image, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import axios from "axios";

const Course = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/courses")
      .then((response) => {
        setCourse(response.data.metadata);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <Container>
      {course.map((post, index) => (
        <Card onClick={() => navigate("/course/details")}>
          <Image key={index}>
            <Title>{post.name}</Title>
          </Image>
        </Card>
      ))}

      <Card>
        <Button onClick={() => navigate("/course/add")}>
          <BiMessageSquareAdd className="icon-btn" />
        </Button>
      </Card>
    </Container>
  );
};
export default Course;
