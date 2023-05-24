import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
function Info() {
  const [student, setStudent] = useState("");
  const [teacher, setTeacher] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/student")
      .then((response) => {
        console.log(response);
        setStudent(response.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:4000/api/v1/teacher")
      .then((response) => {
        console.log(response);
        setTeacher(response.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>{teacher.length}</Digit>
            <InfoContainer>
              <Title>Giáo viên</Title>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>{student.length}</Digit>
            <InfoContainer>
              <Title>Sinh viên</Title>
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
