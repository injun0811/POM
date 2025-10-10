import styled from "styled-components";

export const TextBoxDiv = styled.div`
    .input {
        position: relative;
        margin-bottom: 1.2em;

        input {
            font-size: 100%;
            padding: 0.8em;
            outline: none;
            border: 2px solid rgb(141, 109, 255);
            background-color: transparent;
            border-radius: 20px;
            width: 100%;
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
        input:valid ~ label {
            transform: translateY(-50%) scale(0.9);
            margin: 0em;
            margin-left: 1.3em;
            padding: 0.4em;
            background-color: white;
        }

        input:focus,
        input:valid {
            border-color: rgb(37, 37, 211);
        }
    }
`;
