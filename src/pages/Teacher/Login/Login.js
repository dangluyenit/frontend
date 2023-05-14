import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Input,
  Button,
  Links,
  Title,
  Text,
  ButtonDir,
  FormContainer,
  Body,
  OverPlayContainer,
  OverPlay,
  OverplayLeft,
  OverplayRight,
  RegisterContainer,
  LoginContainer,
} from "./style";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [click, setClick] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teacherCode, setTeacherCode] = useState("");
  const history = useNavigate();
  const handleTCode = (e) => {
    setTeacherCode(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleTeacher = (e) => {
    e.preventDefault();
    console.log({ email, password, teacherCode });
    // eslint-disable-next-line no-unused-vars
    const response = axios
      .post("http://localhost:4000/api/v1/auth/teacher/sign-in", {
        email: email,
        password: password,
        teacherCode: teacherCode,
      })
      .then((result) => {
        console.log(result);
        const token = result.data.metadata.accessToken;
        const decode = jwt_decode(token, {
          payload: { role: true, teacherCode: true },
        });
        const code = decode.payload.teacherCode;
        const role = decode.payload.role;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("code", code);
        console.log(role);
        history("/");
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

  const handleRegisterTeacher = (e) => {
    e.preventDefault();
    console.log({ teacherCode, email, password });
    // eslint-disable-next-line no-unused-vars
    const reponse = axios
      .post("http://localhost:4000/api/v1/auth/teacher/sign-up", {
        teacherCode: teacherCode,
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        // if (result.data.status === "success") {
        //   setClick(false);
        // } else {
        //   setClick(true);
        // }
        history("/login/teacher");
      })
      .catch((error) => {
        console.log(error.reponse);
        if (error.response.status === 400) {
          alert("email đã tồn tại");
        } else {
          alert("server error");
        }
      });
  };

  return (
    <Body>
      <Container>
        <FormContainer>
          <LoginContainer clicked={click} className="login-container">
            <Form onSubmit={handleTeacher}>
              <Title>Đăng nhập</Title>
              <Input
                type="email"
                name="email"
                id="emailId"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
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
          <RegisterContainer clicked={click} className="register-container">
            <Form onSubmit={handleRegisterTeacher}>
              <Title>Đăng ký</Title>
              <Input
                type="text"
                name="username"
                id="usernameId"
                placeholder="Mã giáo viên"
                value={teacherCode}
                onChange={handleTCode}
              />
              <Input
                type="email"
                name="email"
                id="emailId"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
              <Input
                type="password"
                name="password"
                id="passwordId"
                placeholder="Mật khẩu"
                value={password}
                onChange={handlePassword}
              />
              <Input
                type="password"
                name="password"
                id="passwordId"
                placeholder="Nhập lại mật khẩu"
                value={password}
                onChange={handlePassword}
              />
              <Links href="#">Đã có tài khoản?</Links>
              <Button>Đăng ký</Button>
            </Form>
          </RegisterContainer>
        </FormContainer>
        <OverPlayContainer clicked={click}>
          <OverPlay clicked={click}>
            <OverplayLeft clicked={click}>
              <Text>
                <Title>Bạn đã sẵn sàng tham gia?</Title>
                <br />
                <ButtonDir onClick={() => setClick(true)} id="login">
                  Đăng nhập
                  <AiOutlineDoubleLeft />
                </ButtonDir>
              </Text>
            </OverplayLeft>
            <OverplayRight clicked={click}>
              <Text>
                <Title>Bạn chưa có tài khoản?</Title>
                <br />
                <ButtonDir onClick={() => setClick(false)} id="register">
                  Đăng kí
                  <AiOutlineDoubleRight />
                </ButtonDir>
              </Text>
            </OverplayRight>
          </OverPlay>
        </OverPlayContainer>
      </Container>
    </Body>
  );
};

export default Login;
