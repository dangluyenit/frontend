import React, { useEffect, useState } from "react";
import { Button, ButtonEdit, Card, Container, Image, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";

const Test = (props) => {
  const navigate = useNavigate();
  const [test, setTest] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/tests")
      .then((response) => {
        console.log(response.data.metadata);
        setTest(response.data.metadata);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <Container>
      <Title>Bài thi</Title>
      {test.map((post) => (
        <Card key={post.id}>
          {localStorage.getItem("role") === "TEACHER" ? (
            <Image onClick={() => navigate(`/test/addquestion/${post.id}`)}>
              <Title>{post.name}</Title>
            </Image>
          ) : (
            <Image onClick={() => navigate(`/test/details/${post.id}`)}>
              <Title>{post.name}</Title>
            </Image>
          )}

          {localStorage.getItem("role") === "TEACHER" ? (
            <ButtonEdit onClick={() => navigate(`/test/edit/${post.id}`)}>
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
