import styled from "styled-components";

export const MiniTextBoxDiv = styled.div`
    padding: 10px;

    .input-wrapper {
        position: relative;
        margin: 15px auto;
    }

    .input-box {
        line-height: 20px;
        text-align: center;
        font-size: 19px;
        border: none;
        border-bottom: 2px solid #ccc;
        color: #08aeea;
        width: 100%;
        background-color: transparent;
        transition: border-color 0.3s ease-in-out;
    }

    .underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #08aeea;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }

    .input-box:focus {
        border-color: #08aeea;
        outline: none;
    }

    .input-box:focus + .underline {
        transform: scaleX(1);
    }
`;
