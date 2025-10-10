import styled from "styled-components";

export const RegistForm = styled.div`
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    width: ${({ $open }) => ($open ? "1150px" : "0")};
    height: ${({ $open }) => ($open ? "140px" : "0")};
    transition: opacity 0.5s, visibility 0.5s, width 0.5s, height 0.5s;
`;
