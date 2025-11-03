import styled, { css } from "styled-components";

export const TextBoxDiv = styled.div`
    align-content: center;
    width: 350px;
    height: 60px;

    .input {
        position: relative;

        input {
            font-size: 100%;
            padding: 0.8em;
            outline: none;
            border: 2px solid rgb(141, 109, 255);
            background-color: transparent;
            border-radius: 20px;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        label {
            font-size: 100%;
            position: absolute;
            left: 0;
            padding: 0.8em;
            margin-left: 0.5em;
            pointer-events: none;
            transition: all 0.3s ease;
            color: black;
        }

        input:focus ~ label,
        input:valid ~ label,
        label.active {
            transform: translateY(-50%) scale(0.9);
            margin: 0em;
            margin-left: 1.3em;
            padding: 0.4em;
            background-color: white;
        }

        input:focus,
        input:valid {
        label.active {
            border-color: rgb(37, 37, 211);
        }
    }
`;

export const TextAreaDiv = styled.div`
    /* 항상 렌더링, 투명 및 비활성 처리 */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    ${({ $active }) =>
        $active &&
        css`
            opacity: 1;
            pointer-events: auto;
        `}

    .background {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }

    ${({ $active }) =>
        $active &&
        css`
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        `}

    .popup-content {
        position: fixed;
        width: 1170px;
        height: 200px;
        top: 690px;
        left: 370px;
        background: #fff;
        border-radius: 20px;
        box-shadow: 0 2px 32px rgba(0, 0, 0, 0.25);
        padding: 10px;
        flex-direction: column;
        align-items: flex-end;

        .title {
            position: absolute;
            cursor: pointer;
            padding: 15px;
            top: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            margin: 0;
        }

        textarea {
            width: 100%;
            height: 100px;
            border: 2px solid rgb(141, 109, 255);
            border-radius: 10px;
            padding: 10px;
            font-size: 16px;
            resize: none;
            outline: none;
        }
    }
`;
