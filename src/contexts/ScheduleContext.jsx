import { createContext, useContext, useState } from "react";

// 1. Context 객체 생성
export const ScheduleContext = createContext();

// 2. Provider + 상태관리 정의
export const ScheduleProvider = ({ children }) => {
    // 일정 관련 state
    const [scheduleData, setScheduleData] = useState({});

    // 필요시 추가 state 및 함수 선언

    return <ScheduleContext.Provider value={{ scheduleData, setScheduleData }}>{children}</ScheduleContext.Provider>;
};

// 3. Custom Hook (사용 편의성)
export const useSchedule = () => useContext(ScheduleContext);
