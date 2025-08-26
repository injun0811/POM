import React from "react";
import { Daydiv } from "../../styled/common/Day";

const Day = ({ day, isHeader }) => {
    const isBlank = day === "";
    return (
        <Daydiv $isBlank={isBlank} $isHeader={isHeader}>
            {day}
        </Daydiv>
    );
};

export default Day;
