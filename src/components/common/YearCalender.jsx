import React from "react";
import { ScrollWrapper, YearCalender } from "../../styled/common/YearCalender";
import Calender from "./Calender";

const YearCalender = ({ year = 2025 }) => {
    return (
        <ScrollWrapper>
            {Array.from({ length: 12 }, (_, i) => (
                <Calender key={i} year={year} month={i + 1} />
            ))}
        </ScrollWrapper>
    );
};

export default YearCalender;
