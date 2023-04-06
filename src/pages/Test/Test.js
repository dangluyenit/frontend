import React from "react";
import { Button, Card, Container, Image, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
const Test = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card onClick={() => navigate("/test/details")}>
        <Image>
          <Title>Lập trình hướng đối tượng</Title>
        </Image>
      </Card>
      <Card>
        <Image>
          <Title>Thiết kế web</Title>
        </Image>
      </Card>
      <Card>
        <Image>
          <Title>Lập trình C</Title>
        </Image>
      </Card>
      <Card>
        <Image>
          <Title>Lập trình Nodejs</Title>
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

export default Test;
