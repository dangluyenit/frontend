import styled from "styled-components";

export const Container = styled.div`
  width: 85vw;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 3%;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem;
`;
export const Table = styled.table`
  display: table;
  width: 80vw;
  height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem;
  overflow: hidden;
`;
export const Tr = styled.tr`
  text-align: center;
  :nth-child(even) {
    background-color: #0000000b;
  }
`;
export const Th = styled.th`
  height: 50px;
`;
export const Td = styled.td`
  height: 50px;
`;
export const Links = styled.a`
  text-decoration: none;
  color: wheat;
`;
