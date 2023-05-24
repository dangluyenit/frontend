import React from "react";
import Sidebar from "../Sidebar";
import styled from "styled-components";
import { v } from "../../../../styles/variables";
const SLayout = styled.div`
  display: flex;
`;
const SMain = styled.div`
  padding: calc(${v.smSpacing} * 2);
  h1 {
    font-size: 14px;
  }
`;
const Layout = ({ children }) => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
