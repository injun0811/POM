import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        font-size: 16px;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    :root {
        --main-background: #eaddca;
        --main-border: #daa06d;
    }
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #121212;
    background: linear-gradient(135deg, #121212 25%, #1a1a1a 25%, #1a1a1a 50%, #121212 50%, #121212 75%, #1a1a1a 75%, #1a1a1a);
    background-size: 40px 40px;

    animation: move 4s linear infinite;

    @keyframes move {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 40px 40px;
        }
    }
`;

export default GlobalStyle;
