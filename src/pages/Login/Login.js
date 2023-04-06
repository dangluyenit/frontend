import React, { useState } from "react";
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
} from "./styles";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const Login = () => {
  const [click, setClick] = useState(true);
  return (
    <Body>
      <Container>
        <FormContainer>
          <LoginContainer clicked={click} className="login-container">
            <Form>
              <Title>Đăng nhập</Title>
              <Input
                type="email"
                name="email"
                id="emailId"
                placeholder="Email"
              />
              <Input
                type="password"
                name="password"
                id="passwordId"
                placeholder="Mật khẩu"
              />
              <Links href="#">Quên mật khẩu?</Links>
              <Button>Đăng nhập</Button>
            </Form>
          </LoginContainer>
          <RegisterContainer clicked={click} className="register-container">
            <Form>
              <Title>Đăng ký</Title>
              <Input
                type="text"
                name="username"
                id="usernameId"
                placeholder="Tên người dùng"
              />
              <Input
                type="email"
                name="email"
                id="emailId"
                placeholder="Email"
              />
              <Input
                type="password"
                name="password"
                id="passwordId"
                placeholder="Mật khẩu"
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
