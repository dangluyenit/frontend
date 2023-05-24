import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        font-family: 'Poppins', sans-serif;
        letter-spacing: .6px;
        &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #CC33FF);
    border-radius: 6px;
  }
    }
`;
