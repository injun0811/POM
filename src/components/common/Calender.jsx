import React from "react";
import { Calender, MonthTitle, WeekRow, WeeksWrapper } from "../../styled/common/Calender";
import Day from "./Day";

const Calender = ({ year = 2025, month = 8 }) => {
    const WEEKS = 6;
    const DAYS_IN_WEEK = 7;
    const daysMatrix = Array.from({ length: WEEKS }, () => Arrat.from({ length: DAYS_IN_WEEK }, (_, dayIdx) => dayIdx + 1));

    return (
        <Calender>
            <MonthTitle>
                {year}년 {month}월
            </MonthTitle>
            <WeeksWrapper>
                {daysMatrix.map((week, wIdx) => {
                    <WeekRow key={wIdx}>
                        {week.map((d, dIdx) => {
                            <Day key={dIdx} day={""} />;
                        })}
                    </WeekRow>;
                })}
            </WeeksWrapper>
        </Calender>
    );
};

export default Calender;
