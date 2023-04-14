import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background: gray;
  border-radius: 20px;
  box-shadow: 0 0 10px black;
  width: 50vw;
  height: 70vh;
  position: relative;
  left: 30%;
  top: 100px;
  input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
  }
`;
const Title = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 40%;
  top: 50px;
`;
const Button = styled.button`
  position: absolute;
  left: 40%;
  top: 85%;
  color: ${({ theme }) => theme.text};
  width: max-content;
  height: max-content;
  background: ${({ theme }) => theme.bg3};
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 0 10px #0f0c29;
`;
const AddCourse = () => {
  return (
    <Container>
      <Table>
        <Title>Thêm khoá học</Title>
        <tr>
          <th>
            {/* <MdOutlineDriveFileRenameOutline /> */}
            Tên khoá học
          </th>
          <td>: </td>
          <input type="text" placeholder="Tên khoá học" />
        </tr>
        <tr>
          <th>
            {/* <BiPhone /> */}
            Nội dung khoá học
          </th>
          <td>: </td>
          <input type="text" placeholder="Nội dung khoá học" />
        </tr>
        <Button>Hoàn thành</Button>
      </Table>
    </Container>
  );
};

export default AddCourse;
