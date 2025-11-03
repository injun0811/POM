import styled from "styled-components";

export const RegistForm = styled.div`
    padding-top: 20px;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition: opacity 0.5s, visibility 0.5s;

    .textTab {
        display: flex;
        gap: 10px;
    }

    .date {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        margin: 5px;
        width: 155px;
        height: 50px;
        display: flex;
        padding: 10px;
        background: #f8fafc;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    }
`;
