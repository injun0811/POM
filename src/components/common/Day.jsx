import React from "react";
import { motion } from "framer-motion";
import { Daydiv } from "../../styled/common/Day";

// Day 컴포넌트 (바인딩 변수)

// day : 날짜
// isSelected : 선택된 날짜 여부
// isHeader : 헤더('요일') 여부
// hasSchedule : 일정 존재 여부
// onClick : 클릭 이벤트 핸들러

const Day = ({ day, isSelected, isHeader, hasSchedule = false, onClick }) => {
    const isBlank = day === "";
    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <Daydiv $isBlank={isBlank} $isHeader={isHeader} $isSelected={isSelected} $hasSchedule={hasSchedule} onClick={isBlank ? undefined : onClick}>
                {day}
            </Daydiv>
        </motion.div>
    );
};

export default Day;
