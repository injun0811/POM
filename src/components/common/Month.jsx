import React from "react";
import { WeekSection, MonthTitle, WeekRow, WeeksWrapper } from "../../styled/common/Month";
import Day from "./Day";
import { MONTH_COLOR, WEEKDAYS } from "../../utils/monthInfo";

const Month = ({ year = now.getFullYear(), month = now.getMonth() + 1, selectedDate, setSelectedDate, isSolo, $isCompact }) => {
    const bgColor = MONTH_COLOR[month - 1];

    const handleDayClick = (day) => {
        if (day === "") return;
        if (selectedDate && selectedDate.year === year && selectedDate.month === month && selectedDate.day === day) {
            setSelectedDate(null);
        } else {
            setSelectedDate({ year, month, day });
        }
    };

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

    // 조건부 스타일 적용: 선택된 월(isSolo)이거나 compact 모드가 아닐 때만 표시
    const compactStyle = {
        opacity: !$isCompact || isSolo ? 1 : 0,
        width: !$isCompact || isSolo ? "375px" : "0",
        transition: "opacity 0.5s, width 0.5s",
        overflow: "hidden",
        flexShrink: 0,
        margin: "0 auto",
    };

    return (
        <div style={compactStyle}>
            <WeekSection $bgColor={bgColor}>
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
                                    return (
                                        <Day
                                            key={dIdx}
                                            day={d}
                                            isSelected={selectedDate && selectedDate.day === d && selectedDate.year === year && selectedDate.month === month}
                                            onClick={() => handleDayClick(d)}
                                        />
                                    );
                                })}
                            </WeekRow>
                        );
                    })}
                </WeeksWrapper>
            </WeekSection>
        </div>
    );
};

export default Month;
