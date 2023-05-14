import React from "react";
import styled from "styled-components";
function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>5</Digit>
            <InfoContainer>
              <Title>Teacher</Title>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>15</Digit>
            <InfoContainer>
              <Title>Student</Title>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}
const InfoCard = styled.div`
  height: max-content;
  width: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`;
const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;
const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
`;
const Digit = styled.div`
  background-color: #6100d4;
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h3`
  color: black;
`;
export default Info;
