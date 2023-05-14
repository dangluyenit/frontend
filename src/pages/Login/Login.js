import React from "react";

import { Container, Body, Button } from "./styles";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Body>
      <Container>
        <Button onClick={() => navigate("/login/student")}>Sinh viên</Button>
        <Button onClick={() => navigate("/login/teacher")}>Giáo viên</Button>
        <Button onClick={() => navigate("/login/admin")}>Quản trị viên</Button>
      </Container>
    </Body>
  );
};

export default Login;
