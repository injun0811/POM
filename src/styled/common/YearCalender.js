import styled from "styled-components";

export const YearCalender = styled.div``;

export const ScrollWrapper = styled.div`
    display: flex;
    gap: 32px;
    overflow-x: auto; /* 가로 스크롤로 여러 달 렌더링 */
    padding: 24px 12px;
    scroll-snap-type: x mandatory; /* 월별 스냅 효과 */
    cursor: grab;
`;
