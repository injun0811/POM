import styled from "styled-components";

export const YearCalender = styled.div``;

export const ScheduleDiv = styled.div`
    gap: 30px;
    display: flex;
`;

export const ScrollWrapper = styled.div`
    width: ${({ $isCompact }) => ($isCompact ? "375px" : "100%")};

    // gap: 32px;
    // overflow-x: auto; /* 가로 스크롤로 여러 달 렌더링 */

    gap: ${({ $isCompact }) => ($isCompact ? "0" : "32px")};
    overflow-x: ${({ $isCompact }) => ($isCompact ? "hidden" : "auto")};

    display: flex;
    padding: 24px 12px;
    scroll-snap-type: x mandatory; /* 월별 스냅 효과 */
    cursor: grab;
    user-select: none;
    transition: width 0.5s;
`;

export const ScheduleListDiv = styled.div`
    opacity: ${({ $isCompact }) => ($isCompact ? 1 : 0)};
    visibility: ${({ $isCompact }) => ($isCompact ? "visible" : "hidden")};
    pointer-events: ${({ $isCompact }) => ($isCompact ? "auto" : "none")};
    width: ${({ $isCompact }) => ($isCompact ? "350px" : "0px")};
    transition: opacity 1s, visibility 1s, width 1s;
    overflow: hidden;

    ul {
        background: #90caf9;
        border-radius: 12px;
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
