import styled from "styled-components";

export const Container = styled.div`
  width: 85vw;
  height: 95vh;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 1%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #3399ff);
    border: none;
    border-radius: 6px;
  }
  /* background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 2rem; */
`;
export const Table = styled.table`
  display: table;
  width: 80vw;
  height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #3399ff 70%);
  border-radius: 10px;
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
