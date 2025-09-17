import styled, { css } from "styled-components";

export const Daydiv = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 2px 2px 0;
    border: none;
    background: #fff;
    color: #222;
    font-size: 16px;
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
    ${({ $isSelected }) =>
        $isSelected &&
        css`
            background: #90caf9;
            color: #222;
            box-shadow: 0 0 0 2px #1976d2; // 예시: 선택 강조
            font-weight: bold;
        `}

    /* 비활성(이번달 아님) */
    ${({ $isOutside }) =>
        $isOutside &&
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

    /* hover 효과 */
    &:hover:not(:disabled):not([isBlank]) {
        background: #e3f2fd;
    }

    /* 헤더 셀 */
    ${({ $isHeader }) =>
        $isHeader &&
        css`
            font-weight: bold;
            background: transparent;
            color: #1976d2;
            cursor: default;
            pointer-events: none;
        `}

    /* 일정이 있는 날 */
    ${({ $hasSchedule }) =>
        $hasSchedule &&
        css`
            background: #ffc700;
            color: white;
            font-weight: bold;
        `}
`;
