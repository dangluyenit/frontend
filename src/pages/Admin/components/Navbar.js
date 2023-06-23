import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <Text>
        Chào,
        <span>Luyến</span>
      </Text>
    </NavbarContainer>
  );
}
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
`;
const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
`;

export default Navbar;
