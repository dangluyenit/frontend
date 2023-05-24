import React from "react";
import styled from "styled-components";
import MainContainer from "./components/MainContainer";

const Container = styled.div`
  display: flex;
  height: max-content;
  width: 75vw;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
const Admin = () => {
  return (
    <Container>
      <MainContainer />
    </Container>
  );
};

export default Admin;
