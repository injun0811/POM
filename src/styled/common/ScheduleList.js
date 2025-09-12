import styled from "styled-components";

export const LoadingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    font-size: 24px;
    color: #555;
`;

export const ScheduleLi = styled.li`
    margin: 15px;
    width: 320px;
    height: 120px;
    background: #90caf9;
    border-radius: 12px;

    p {
        width: 100%;
        height: 100%;
        padding: 0 0 30px 0;
        font-size: 20px;
        align-content: center;
    }
`;

export const HeaderDiv = styled.div`
    padding: 5px;
    justify-content: space-around;
    display: flex;

    div {
        color: beige;
        font-size: 18px;
    }

    time {
        color: steelblue;
        align-content: center;
    }
`;

export const DescDiv = styled.div`
    display: flex;
    padding: 5px;
    font-size: 16px;
    justify-content: space-between;
    padding: 0 10px 0 10px;

    section {
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: hidden;
        max-width: 70%;
    }
`;

export const DescP = styled.div`
    width: 30%;
    align-content: center;
`;

export const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CategoryDiv = styled.div`
    align-content: center;

    div {
        margin: 10px;
    }
`;

export const IconDiv = styled.div`
    display: flex;

    div {
        border-radius: 20%;
        background: cornflowerblue;
        margin: 10px;
        transition: background 0.5s;

        img {
            width: 30px;
            margin: 5px;
            cursor: pointer;
        }
    }

    .popup-trigger {
        transition: opacity 0.5s, transform 0.5s;
    }

    .active {
        background: palegoldenrod;
        transition: background 0.5s;
    }
`;

export const PopupDiv = styled.div`
    position: fixed;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    background: #e7a7a7ff;
    border: 3px solid #c75555ff;
    padding: 12px;
    min-width: 120px;
    z-index: 10;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

    opacity: ${({ $show }) => ($show ? 0.7 : 0)};
    pointer-events: ${({ $show }) => ($show ? "auto" : "none")};
    transition: opacity 0.5s;
`;
