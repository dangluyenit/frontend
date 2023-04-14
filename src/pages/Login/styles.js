import styled from "styled-components";
import images from "../Login/images/image.gif";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  height: 100vh;
  margin-left: 15vw;
`;
export const Container = styled.div`
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 500px;
`;
export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
`;
export const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 25vw;
  z-index: 2;
  ${(props) =>
    props.clicked !== true
      ? `
    transform: translateX(0%);
    opacity: 1;
    z-index: 5;
  `
      : null}
`;
export const RegisterContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 25vw;
  z-index: 1;
  ${(props) => (props.clicked !== true ? `transform: translateX(120%);` : null)}
`;
export const Form = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;
export const Title = styled.h2`
  color: inherit;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 45px;
  margin: 0;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
`;
export const Input = styled.input`
  background-color: #eee;
  border-radius: 10px;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;
export const Links = styled.div``;
export const Button = styled.button`
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
export const OverPlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.clicked !== true ? `transform: translateX(-100%);` : null}
`;
export const Text = styled.div``;
export const ButtonDir = styled.button`
  position: relative;
  border-radius: 20px;
  background-color: rgba(225, 225, 225, 0.2);
  border: 2px solid #fff;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  padding: 12px 80px;
  letter-spacing: 2px;
  width: max-content;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
export const OverPlay = styled.div`
  background-image: url(${images});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.clicked !== true ? `transform: translateX(50%);` : null)}
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(46, 94, 109, 0.4) 40%,
      rgba(46, 94, 109, 0)
    );
  }
`;
export const OverplayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;
export const OverplayLeft = styled(OverplayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.clicked !== true ? `transform: translateX(0%);` : null)}
`;
export const OverplayRight = styled(OverplayPanel)`
  transform: translateX(100%);
  ${(props) => (props.clicked !== true ? `transform: translateX(100%);` : null)}
`;
