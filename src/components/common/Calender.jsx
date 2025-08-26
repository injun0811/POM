import React from "react";
import { Calenderdiv, MonthTitle, WeekRow, WeeksWrapper } from "../../styled/common/Calender";
import Day from "./Day";
import { MONTH_COLOR, WEEKDAYS } from "../../utils/monthInfo";

const Calender = ({ year = 2025, month = 8 }) => {
    const bgColor = MONTH_COLOR[month - 1];

    const getMonthMatrix = (year, month) => {
        const result = [];
        const firstDay = new Date(year, month - 1, 1).getDay(); // 0(일) ~ 6(토)
        const lastDate = new Date(year, month, 0).getDate(); // 해당 월 마지막 날짜

        let cur = 1 - firstDay; // 시작 offset (음수면 앞에 빈 칸 필요)
        for (let w = 0; w < 6; w++) {
            const week = [];
            for (let d = 0; d < 7; d++) {
                if (cur >= 1 && cur <= lastDate) {
                    week.push(cur);
                } else {
                    week.push("");
                }
                cur++;
            }
            result.push(week);
        }
        return result;
    };

    const daysMatrix = getMonthMatrix(year, month);

    return (
        <Calenderdiv $bgColor={bgColor}>
            <MonthTitle>
                {year}년 {month}월
            </MonthTitle>
            <WeekRow>
                {WEEKDAYS.map((name, idx) => {
                    return <Day key={idx} day={name} isHeader />;
                })}
            </WeekRow>
            <WeeksWrapper>
                {daysMatrix.map((week, wIdx) => {
                    // week 7개가 모두 빈칸인 경우, 렌더링 미처리
                    if (week.every((cell) => cell === "")) return null;
                    return (
                        <WeekRow key={wIdx}>
                            {week.map((d, dIdx) => {
                                return <Day key={dIdx} day={d} />;
                            })}
                        </WeekRow>
                    );
                })}
            </WeeksWrapper>
        </Calenderdiv>
    );
};

export default Calender;
