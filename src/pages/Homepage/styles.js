import styled from "styled-components";
import { v } from "../../styles/variables";
export const HDevider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg4};
  margin: ${v.lgSpacing} 0;
`;
