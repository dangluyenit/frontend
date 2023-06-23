import React from "react";
import Badge from "./Badge";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine, RiBankFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import AvatarImage from "../../../assets/avatar.jpg";
import { GiTeacher } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;
const Name = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;
const LinksContainer = styled.div`
  background-color: #162349;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
  text-decoration: none;
  align-items: center;
  color: white;
  font-size: 16px;
  position: relative;
  top: -15px;
  left: -15px;
`;

const Link = styled.li`
  margin-left: 15%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;

  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 8px;
  }
  :focus {
    width: max-content;
    height: 30px;
    background: gray;
    border-radius: 10px;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Đặng Ngọc Luyến</Name>
        <Badge content="Quản trị viên" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link onClick={() => navigate("/admin")} tabIndex="1">
            <h3>Trang chủ</h3>
            <RiHomeLine />
          </Link>
          <Link onClick={() => navigate("/teacher")} tabIndex="1">
            <h3>Giáo viên</h3>
            <GiTeacher />
          </Link>
          <Link onClick={() => navigate("/student")} tabIndex="1">
            <h3>Sinh viên</h3>
            <FaUserAlt />
          </Link>
          <Link onClick={() => navigate("/courses")} tabIndex="1">
            <h3>Khoá học</h3>
            <RiFileCopyLine />
          </Link>
          <Link onClick={() => navigate("/tests")} tabIndex="1">
            <h3>Bài thi</h3>
            <FaWallet />
          </Link>
          <Link onClick={() => navigate("/bank-questions")} tabIndex="1">
            <h3>Ngân hàng câu hỏi</h3>
            <RiBankFill />
          </Link>
          <Link
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            <h3>Đăng xuất</h3>
            <AiOutlineLogout />
          </Link>
        </Links>
      </LinksContainer>
    </Container>
  );
};

export default Sidebar;
