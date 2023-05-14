import React, { useEffect, useState } from "react";
import { Button, Card, Container, Image, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import axios from "axios";
const Test = (props) => {
  const navigate = useNavigate();
  const [test, setTest] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/tests")
      .then((response) => {
        setTest(response.data.metadata);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  return (
    <Container>
      <Title>Bài thi</Title>
      {test.map((post, index) => (
        <Card>
          {localStorage.getItem("role") === "TEACHER" ? (
            <Image key={index} onClick={() => navigate("/test/addquestion")}>
              <Title>{post.name}</Title>
            </Image>
          ) : (
            <Image key={index} onClick={() => navigate("/test/details")}>
              <Title>{post.name}</Title>
            </Image>
          )}
        </Card>
      ))}
      {localStorage.getItem("role") === "TEACHER" ? (
        <Card>
          <Button onClick={() => navigate("/test/add")}>
            <BiMessageSquareAdd className="icon-btn" />
          </Button>
        </Card>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Test;
