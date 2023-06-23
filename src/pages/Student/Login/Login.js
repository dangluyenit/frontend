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
import ClipLoader from "react-spinners/ClipLoader";
const Login = () => {
  const [click, setClick] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSCode = (e) => {
    setStudentCode(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleStudent = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    axios
      .post("http://localhost:4000/api/v1/auth/student/sign-in", {
        email: email,
        password: password,
        studentCode: studentCode,
      })
      .then((result) => {
        console.log(result.data);
        const token = result.data.metadata.accessToken;

        const decode = jwt_decode(token, {
          payload: { role: true, studentCode: true },
        });
        const role = decode.payload.role;
        const code = decode.payload.studentCode;
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
  const handleRegisterStudent = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history("/login/student");
    }, 1500);
    axios
      .post("http://localhost:4000/api/v1/auth/student/sign-up", {
        studentCode: studentCode,
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
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
            <Form onSubmit={handleStudent}>
              <Title>Đăng nhập</Title>
              <Input
                type="email"
                name="email"
                id="emailId"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                required
              />

              <Input
                type="password"
                name="password"
                id="passwordId"
                placeholder="Mật khẩu"
                value={password}
                onChange={handlePassword}
                required
              />

              <Links href="#">Quên mật khẩu?</Links>
              {loading ? (
                <Button type="submit">
                  <ClipLoader
                    color="#3300ff"
                    loading={loading}
                    size={25}
                    speedMultiplier={0.5}
                  />
                </Button>
              ) : (
                <Button type="submit">Đăng nhập</Button>
              )}
            </Form>
          </LoginContainer>
          <RegisterContainer clicked={click} className="register-container">
            <Form onSubmit={handleRegisterStudent}>
              <Title>Đăng ký</Title>
              <Input
                type="text"
                name="username"
                id="usernameId"
                placeholder="Mã sinh viên"
                value={studentCode}
                onChange={handleSCode}
                required
              />
              <Input
                type="email"
                name="email"
                id="emailId"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                required
              />
              <Input
                type="password"
                name="password"
                id="passwordId"
                placeholder="Mật khẩu"
                value={password}
                onChange={handlePassword}
                required
              />
              <Input
                type="password"
                name="password"
                id="passwordId"
                placeholder="Nhập lại mật khẩu"
                value={password}
                onChange={handlePassword}
                required
              />
              <Links href="#">Đã có tài khoản?</Links>
              {loading ? (
                <Button>
                  <ClipLoader
                    color="#3300ff"
                    loading={loading}
                    size={25}
                    speedMultiplier={0.5}
                  />
                </Button>
              ) : (
                <Button>Đăng ký</Button>
              )}
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
