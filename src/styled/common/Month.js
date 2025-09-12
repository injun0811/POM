import styled from "styled-components";

export const WeekSection = styled.section`
    width: 340px;
    height: 390px;
    padding: 16px;
    background: ${({ $bgColor }) => $bgColor || "#fafafa"};
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
    margin: 0 auto;
`;

export const WeeksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const WeekRow = styled.div`
    display: flex;
    gap: 6px;
`;

export const MonthTitle = styled.h2`
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: #1976d2;
    letter-spacing: 0.2em;
`;
