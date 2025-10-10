import styled from "styled-components";

export const PagingButtonBtn = styled.button`
    right: 21%;
    top: 21%;
    cursor: pointer;
    position: absolute;
    padding: 10px 24px;
    font-size: 18px;
    color: rgba(240, 159, 92, 1);
    border: 2px solid rgba(240, 159, 92, 1);
    border-radius: 34px;
    background-color: transparent;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        margin: auto;
        width: 50px;
        height: 50px;
        border-radius: inherit;
        scale: 0;
        z-index: -1;
        background-color: rgba(240, 159, 92, 1);
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &:hover::before {
        scale: 3;
    }

    &:hover {
        color: #ffffffff;
        scale: 1.1;
        box-shadow: 0 0px 20px rgba(240, 159, 92, 1);
    }

    &:active {
        scale: 1;
    }
`;
