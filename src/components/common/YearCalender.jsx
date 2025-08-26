import React, { useRef } from "react";
import { ScrollWrapper } from "../../styled/common/YearCalender";
import Calender from "./Calender";

const YearCalender = ({ year = 2025 }) => {
    const scrollRef = useRef(null);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const dragScrollLeft = useRef(0);

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
        startX.current = e.pageX - scrollRef.current.scrollLeft;
        dragScrollLeft.current = scrollRef.current.scrollLeft;
    };
    const onMouseLeave = () => {
        isDragging.current = false;
        scrollRef.current.classList.remove("dragging");
    };
    const onMouseUp = () => {
        isDragging.current = false;
        scrollRef.current.classList.remove("dragging");
    };
    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.1;
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
        <ScrollWrapper
            ref={scrollRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            style={{ outline: "none" }}
        >
            {Array.from({ length: 12 }, (_, i) => (
                <Calender key={i} year={year} month={i + 1} />
            ))}
        </ScrollWrapper>
    );
};

export default YearCalender;
