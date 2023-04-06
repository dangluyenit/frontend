import React from "react";
import { Button, Card, Container, Image, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";

const Course = (props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Card onClick={() => navigate("/course/details")}>
        <Image>
          <Title>Lập trình hướng đối tượng</Title>
        </Image>
      </Card>
      <Card>
        <Image>
          <Title>Lập trình website</Title>
        </Image>
      </Card>
      <Card>
        <Image>
          <Title>Lập trình website</Title>
        </Image>
      </Card>
      <Card>
        <Image>
          <Title>Lập trình website</Title>
        </Image>
      </Card>
      <Card>
        <Button>
          <BiMessageSquareAdd className="icon-btn" />
        </Button>
      </Card>
    </Container>
  );
};
export default Course;
