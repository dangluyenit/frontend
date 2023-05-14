import React, { useContext, useRef, useState } from "react";
import {
  SBtLogin,
  SBtLogout,
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLogo,
  SSearch,
  SSearchIcon,
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
  AiOutlineSearch,
  AiOutlineFolderOpen,
  AiOutlineFileText,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsCalendar2EventFill, BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const searchRef = useRef(null);
  const { theme, setTheme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

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
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Tìm kiếm"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
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
  {
    label: "Kết quả",
    icon: <BsCalendar2EventFill />,
    to: "/result",
  },
];

export default Sidebar;
