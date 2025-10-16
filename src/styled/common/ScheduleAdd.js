import styled from "styled-components";

export const RegistForm = styled.div`
    padding-top: 20px;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition: opacity 0.5s, visibility 0.5s;

    .textTab {
        display: flex;
        gap: 20px;
    }
`;
