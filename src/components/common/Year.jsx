import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScheduleDiv, ScrollWrapper, ScheduleListDiv, ScheduleAddDiv } from "../../styled/common/Year";
import Month from "./Month";
import ScheduleList from "./ScheduleList";
import ScheduleAdd from "./ScheduleAdd";

const Year = ({ year = 2025, scheduleList = [], loading }) => {
    const scrollRef = useRef(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showSM, setShowSM] = useState(false);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const dragScrollLeft = useRef(0);

    // 달력 축소 시 선택된 월이 가운데에 오도록 스크롤 이동
    useEffect(() => {
        if (selectedDate && scrollRef.current) {
            const selectedMonthIndex = selectedDate.month - 1;
            const scrollToX = 375 * selectedMonthIndex - (scrollRef.current.offsetWidth - 375) / 2;
            scrollRef.current.scrollTo({
                left: Math.max(0, scrollToX),
                behavior: "smooth",
            });
        }
    }, [selectedDate]);

    // 일정 관련 DIV 활성화
    const handleTransitionEnd = () => {
        if (selectedDate) setShowSM(true);
    };

    // 키보드 좌/우 이동
    const handleKeyDown = (e) => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.offsetWidth * 0.9;
        if (e.key === "ArrowRight") {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
        if (e.key === "ArrowLeft") {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    // 마우스 드래그/터치 스와이프
    const onMouseDown = (e) => {
        isDragging.current = true;
        scrollRef.current.classList.add("dragging");
        startX.current = e.pageX;
        dragScrollLeft.current = scrollRef.current.scrollLeft;
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };
    const onMouseUp = () => {
        isDragging.current = false;
        scrollRef.current.classList.remove("dragging");
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    };
    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const walk = (e.pageX - startX.current) * 1.1;
        scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
    };

    // 터치 이벤트
    const touchStartX = useRef(0);
    const touchScrollLeft = useRef(0);

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].pageX;
        touchScrollLeft.current = scrollRef.current.scrollLeft;
    };
    const onTouchMove = (e) => {
        const x = e.touches.pageX;
        const walk = (x - touchStartX.current) * 1.1;
        scrollRef.current.scrollLeft = touchScrollLeft.current - walk;
    };

    return (
        <ScheduleDiv>
            <AnimatePresence mode="wait">
                {/* 월 캐러셀 모드 */}
                {!selectedDate ? (
                    <motion.div
                        key="carousel"
                        layout
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: "flex", width: "100%" }}
                    >
                        <ScrollWrapper
                            ref={scrollRef}
                            tabIndex={0}
                            onKeyDown={handleKeyDown}
                            onMouseUp={onMouseUp}
                            onMouseDown={onMouseDown}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            $isCompact={!!selectedDate}
                            onTransitionEnd={handleTransitionEnd}
                            style={{ outline: "none", padding: "10px 0" }}
                        >
                            {Array.from({ length: 12 }, (_, i) => (
                                <Month
                                    key={i}
                                    year={year}
                                    month={i + 1}
                                    selectMonth={selectedMonth}
                                    setSelectedMonth={setSelectedMonth}
                                    selectedDate={selectedDate}
                                    setSelectedDate={setSelectedDate}
                                    isSolo={!!selectedDate && selectedDate.month === i + 1}
                                    $isCompact={!!selectedDate}
                                    scheduleList={scheduleList}
                                />
                            ))}
                        </ScrollWrapper>
                    </motion.div>
                ) : (
                    // compact 모드: 선택 월 fade, 일정 영역 등장
                    <motion.div
                        key="compact"
                        layout
                        initial={{ opacity: 0, scale: 0.95, x: 0 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: "flex", width: "100%", gap: 30, justifyContent: "left", padding: "10px 0" }}
                    >
                        <ScrollWrapper ref={scrollRef} tabIndex={0} $isCompact={true} style={{ outline: "none" }}>
                            <Month
                                year={year}
                                month={selectedDate.month}
                                selectMonth={selectedMonth}
                                setSelectedMonth={setSelectedMonth}
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate}
                                isSolo
                                $isCompact
                                scheduleList={scheduleList}
                            />
                        </ScrollWrapper>

                        {/* 상세 일정 영역 등장 */}
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 375 }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{ overflow: "hidden", height: 390, display: "contents" }}
                        >
                            <ScheduleListDiv $isCompact={!!selectedDate}>
                                {/* 일정 LIST DIV */}
                                <ScheduleList selectedDate={selectedDate} scheduleList={scheduleList} loading={loading}></ScheduleList>
                            </ScheduleListDiv>
                            {/* <ScheduleAddDiv $isCompact={!!selectedDate}>
                            </ScheduleAddDiv> */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </ScheduleDiv>
    );
};

export default Year;
