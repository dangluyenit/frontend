import React, { useContext, useState } from "react";
import {
  SBtHistory,
  SBtLogin,
  SBtLogout,
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLogo,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";

import { logoSVG } from "../../assets";

import {
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineFolderOpen,
  AiOutlineFileText,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  BsCalendar2EventFill,
  BsPeople,
  BsQuestionSquare,
} from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>

      <SDivider />
      {linksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      {localStorage.getItem("role") === "STUDENT" ? (
        <SBtHistory tabIndex="0" onClick={() => navigate("/result")}>
          <BsCalendar2EventFill />
          {sidebarOpen && <>Lịch sử bài thi</>}
        </SBtHistory>
      ) : (
        ""
      )}
      {localStorage.getItem("role") === "TEACHER" ? (
        <SBtHistory tabIndex="0" onClick={() => navigate("/test/addquestion")}>
          <BsQuestionSquare />
          {sidebarOpen && <>Câu hỏi</>}
        </SBtHistory>
      ) : (
        ""
      )}
      <SDivider />
      {localStorage.getItem("token") ? (
        <SBtLogout
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          {sidebarOpen && <>Đăng xuất</>}
          <AiOutlineLogout />
        </SBtLogout>
      ) : (
        <SBtLogin onClick={() => navigate("/login")}>
          {sidebarOpen && <>Đăng nhập</>}
          <AiOutlineLogin />
        </SBtLogin>
      )}

      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Chế độ tối</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Trang chủ",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Khoá học",
    icon: <AiOutlineFolderOpen />,
    to: "/course",
  },
  {
    label: "Thông tin cá nhân",
    icon: <BsPeople />,
    to: "/info",
  },
  {
    label: "Bài thi",
    icon: <AiOutlineFileText />,
    to: "/test",
  },
  // {
  //   label: "Câu hỏi",
  //   icon: <BsQuestionSquare />,
  //   to: "/test/addquestion",
  // },
];

export default Sidebar;
