import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        background: ${(props) => props.theme.BACKGROUND_COLOR};
        color: ${(props) => props.theme.TEXT_COLOR};
        letter-spacing: .6px;
    }
`;
