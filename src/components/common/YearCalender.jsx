import React, { useEffect, useRef, useState } from "react";
import { ScheduleDiv, ScrollWrapper, ScheduleListDiv, ScheduleAddDiv } from "../../styled/common/YearCalender";
import Calender from "./Calender";
import ScheduleList from "./ScheduleList";

const YearCalender = ({ year = 2025 }) => {
    const scrollRef = useRef(null);
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
                style={{ outline: "none" }}
            >
                {Array.from({ length: 12 }, (_, i) => (
                    <Calender
                        key={i}
                        year={year}
                        month={i + 1}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        isSolo={!!selectedDate && selectedDate.month === i + 1}
                        $isCompact={!!selectedDate}
                    />
                ))}
            </ScrollWrapper>

            {showSM && (
                <>
                    <ScheduleListDiv $isCompact={!!selectedDate}>
                        {/* 일정 LIST DIV */}
                        <ul>
                            {/* li 를 이용한 일정 LIST */}
                            <ScheduleList></ScheduleList>
                        </ul>
                    </ScheduleListDiv>
                    <ScheduleAddDiv $isCompact={!!selectedDate}>
                        <h3>일정 등록</h3>
                        {/* 시작 날짜 DIV */}

                        {/* 종료 날짜 DIV */}

                        {/* 하루 종일 일정 체크 DIV */}

                        {/* 완료 일정 체크 DIV */}

                        {/* 휴일 체크 DIV */}

                        {/* 장소 DIV */}

                        {/* 메모 DIV */}

                        {/* 알람 DIV */}
                    </ScheduleAddDiv>
                </>
            )}
        </ScheduleDiv>
    );
};

export default YearCalender;
