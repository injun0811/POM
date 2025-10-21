import styled from "styled-components";

export const FormButtonDiv = styled.div`
    button {
        width: ${({ $width }) => $width};
        height: ${({ $height }) => $height};
        font-size: ${({ $fontSize }) => $fontSize};
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
        color: #b9b9b9;
        font-weight: 700;
        position: relative;
        transition: all 0.5s;
        z-index: 1;
    }

    button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background-color: #08aeea;
        z-index: -1;
        transition: all 0.5s;
    }

    button:hover::before {
        width: 100%;
    }

    button:hover {
        color: black;
    }

    button:active:before {
        background: #08aeea;
    }
`;
