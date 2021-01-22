import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        font-family: 'Fraunces', serif;
    }
    html {
        height: 100%;
        min-height: 100%;
    }
    body {
        background: #fbfbfc;
        min-height: 100%;
    }
`;
