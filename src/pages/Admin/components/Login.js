import React, { useState } from "react";
import styled from "styled-components";
import images from "../images/image.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  height: 100vh;
  margin-left: 15vw;
`;
const Container = styled.div`
  background-color: #fff;
  background-image: url(${images});
  border-radius: 25px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 500px;
`;
const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
`;
const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 25vw;
  z-index: 2;
`;
const Form = styled.form`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;
const Title = styled.h2`
  color: black;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 45px;
  margin: 0;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
`;
const Input = styled.input`
  background-color: #eee;
  border-radius: 10px;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;
const Links = styled.div``;
const Button = styled.button`
  position: relative;
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
    letter-spacing: 3px;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleAdmin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/auth/admin/sign-in", {
        username: username,
        password: password,
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.data.metadata.accessToken);
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 400) {
          alert("email or mật khẩu không đúng?");
        } else {
          alert("server error");
        }
      });
  };
  return (
    <Body>
      <Container>
        <FormContainer>
          <LoginContainer className="login-container">
            <Form onSubmit={handleAdmin}>
              <Title>Đăng nhập</Title>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleUsername}
              />
              <Input
                type="password"
                name="password"
                id="passwordId"
                placeholder="Mật khẩu"
                value={password}
                onChange={handlePassword}
              />
              <Links href="#">Quên mật khẩu?</Links>
              <Button type="submit">Đăng nhập</Button>
            </Form>
          </LoginContainer>
        </FormContainer>
      </Container>
    </Body>
  );
};

export default Login;
