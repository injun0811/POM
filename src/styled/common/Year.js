import styled from "styled-components";

export const Year = styled.div``;

export const ScheduleDiv = styled.div`
    gap: 30px;
    display: flex;
`;

export const ScrollWrapper = styled.div`
    width: ${({ $isCompact }) => ($isCompact ? "375px" : "100%")};
    gap: ${({ $isCompact }) => ($isCompact ? "0" : "15px")};
    overflow-x: auto;
    display: flex;
    align-items: center;
    scroll-snap-type: x mandatory; /* 월별 스냅 효과 */
    cursor: grab;
    user-select: none;
    transition: width 0.5s, gap 0.5s;
`;

export const ScheduleListDiv = styled.div`
    user-select: none;
    justify-items: center;

    ul {
        overflow-y: auto;
        overflow-x: hidden;
    }
`;

export const ScheduleAddDiv = styled.div`
    opacity: ${({ $isCompact }) => ($isCompact ? 1 : 0)};
    visibility: ${({ $isCompact }) => ($isCompact ? "visible" : "hidden")};
    pointer-events: ${({ $isCompact }) => ($isCompact ? "auto" : "none")};
    width: ${({ $isCompact }) => ($isCompact ? "350px" : "0px")};
    transition: opacity 1s, visibility 1s, width 1s;
    overflow: hidden;
`;
