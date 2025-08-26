import React from "react";
import YearCalender from "../../components/common/YearCalender";

const SM = () => {
    return (
        <div>
            <h1>일정 관리</h1>
            <h2>schedule management</h2>
            <div>
                <YearCalender year={2025} />
            </div>
        </div>
    );
};

export default SM;
