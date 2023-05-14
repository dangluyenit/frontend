import styled from "styled-components";

export const Container = styled.div`
  width: 75vw;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 10%;
  left: 5%;
`;
export const Table = styled.div`
  display: table;
  width: inherit;
  border-collapse: collapse;
  box-shadow: 0 5px 10px gray;
  background: white;
  text-align: left;
  overflow: hidden;

  thead {
    box-shadow: 0 5px 10px gray;
  }
  th {
    padding: 1rem 2rem;
    letter-spacing: 1px;
    text-align: center;
  }
  td {
    padding: 1rem 2rem;
  }
  tr:nth-child(even) {
    background-color: grey;
  }
`;
