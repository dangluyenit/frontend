import React from "react";
import Badge from "./Badge";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlineLogout, AiOutlinePieChart } from "react-icons/ai";
import AvatarImage from "../../../assets/avatar.jpg";
import { GiTeacher } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
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
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Đặng Ngọc Luyến</Name>
        <Badge content="Amin" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Trang chủ</h3>
          </Link>
          <Link>
            <GiTeacher />
            <h3>Giáo viên</h3>
          </Link>
          <Link>
            <FaUserAlt />
            <h3>Sinh viên</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Khoá học</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Bài thi</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Kết quả</h3>
          </Link>
          <Link>
            <AiOutlineLogout />
            <h3>Đăng xuất</h3>
          </Link>
        </Links>
      </LinksContainer>
    </Container>
  );
};

export default Sidebar;
