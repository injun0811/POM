import styled, { css } from "styled-components";

export const Daydiv = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 2px 2px 0;
    border: none;
    background: #fff;
    color: #222;
    font-size: 1rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    outline: none;
    align-content: center;

    /* 오늘 날짜일 때 */
    ${(props) =>
        props.isToday &&
        css`
            background: #1976d2;
            color: #fff;
            font-weight: bold;
        `}

    /* 선택일 때 */
    ${(props) =>
        props.isSelected &&
        css`
            background: #90caf9;
            color: #222;
        `}

    /* 비활성(이번달 아님) */
    ${(props) =>
        props.isOutside &&
        css`
            color: #ccc;
            background: #f5f5f5;
            cursor: not-allowed;
        `}

    /* 빈칸(hover 불가) */
    ${({ $isBlank }) =>
        $isBlank &&
        css`
            cursor: default;
            pointer-events: none; /* hover, 클릭 모두 막기 */
        `}

    &:hover:not(:disabled):not([isBlank]) {
        background: #e3f2fd;
    }

    ${({ $isHeader }) =>
        $isHeader &&
        css`
            font-weight: bold;
            background: transparent;
            color: #1976d2;
            cursor: default;
            pointer-events: none;
        `}
`;
