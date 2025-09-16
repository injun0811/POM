import React from "react";
import { Daydiv } from "../../styled/common/Day";

const Day = ({ day, isSelected, isHeader, hasSchedule = false, onClick }) => {
    const isBlank = day === "";
    return (
        <Daydiv $isBlank={isBlank} $isHeader={isHeader} $isSelected={isSelected} $hasSchedule={hasSchedule} onClick={isBlank ? undefined : onClick}>
            {day}
        </Daydiv>
    );
};

export default Day;
