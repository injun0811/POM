import React, { useState, useEffect, useRef } from "react";
import { ScheduleLi, HeaderDiv, DescDiv, InfoDiv, IconDiv, CategoryDiv, DescP, PopupDiv } from "../../styled/common/ScheduleList";
import supabase from "../../services/supabaseClient";
import AutoScrollSection from "./AutoScrollSection";
import { holidayIcon, alertIcon, memoIcon, placeIcon } from "../../assets/icons/index";

const ScheduleList = () => {
    const [scheduleList, setScheduleList] = useState([]);
    const [loading, setLoading] = useState(true);

    const [popup, setPopup] = useState({ visible: false, x: 0, y: 0, data: null });
    const detailRef = useRef();

    // 아이콘 활성화 클래스명 반환
    const getIconClass = (schedule, type) => {
        return "popup-trigger " + (popup.visible && popup.data && schedule.idx === popup.data.idx && popup.data.title === dataToShow(schedule, type).title ? "active" : "");
    };

    // 팝업에 표시할 데이터 가공
    const dataToShow = (schedule, type) => {
        switch (type) {
            case "place":
                return {
                    title: "장소",
                    value: schedule.place || "",
                    extra: schedule.place_url || null,
                };
            case "memo":
                return {
                    title: "메모",
                    value: schedule.memo || "",
                };
            case "alert":
                return {
                    title: "알람",
                    value: schedule.alert_date || "",
                    is_alert: !!schedule.is_alert,
                };
            case "holiday":
                return {
                    title: "휴일",
                    value: schedule.is_holiday ? "휴일" : "",
                };
        }
    };

    // 팝업 토글
    const handleImgClick = (e, schedule, type) => {
        if (popup.visible && popup.data && popup.data.title === dataToShow(schedule, type).title && schedule.idx === popup.data.idx) {
            setPopup((popup) => ({ ...popup, visible: false }));
        } else {
            setPopup({
                visible: true,
                x: e.clientX + 20,
                y: e.clientY + 20,
                data: { ...dataToShow(schedule, type), idx: schedule.idx },
            });
        }
    };

    // 일정 리스트 가져오기
    useEffect(() => {
        const fetchScheduleList = async () => {
            const { data, error } = await supabase.from("schedule_list").select("*");
            if (error) console.error("Error fetching items:", error);
            else {
                setScheduleList(data || []);
                setLoading(false);
            }
        };
        fetchScheduleList();
    }, []);

    // 팝업 외부 클릭 시 닫기
    useEffect(() => {
        const handleClick = (e) => {
            if (detailRef.current && detailRef.current.contains(e.target)) {
                return;
            }
            if (e.target.classList.contains("popup-trigger")) {
                return;
            }
            setPopup((popup) => ({ ...popup, visible: false }));
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    if (loading)
        return (
            <>
                <h2>loading...</h2>
            </>
        );
    else {
        return (
            <>
                {scheduleList.map((schedule) => (
                    <ScheduleLi key={schedule.idx}>
                        {/* https://uiverse.io/SouravBandyopadhyay/rude-tiger-29 */}
                        {/* https://uiverse.io/Samalander0/sweet-eel-98 */}

                        <HeaderDiv>
                            <div>
                                {/* 일정 제목 */}
                                {schedule.title}
                            </div>
                            <time>
                                {/* 일정 등록 일자 */}
                                {schedule.reg_date.slice(0, 10)}
                            </time>
                        </HeaderDiv>

                        <DescDiv>
                            {/* 일정 내용 */}
                            <AutoScrollSection>{schedule.desc}</AutoScrollSection>

                            {/* 사용자 */}
                            <DescP>{schedule.user_id}</DescP>
                        </DescDiv>

                        <InfoDiv>
                            <CategoryDiv>
                                {/* 일정 카테고리 */}
                                <div>{schedule.category}</div>
                            </CategoryDiv>

                            <IconDiv>
                                {/* 장소 - 주소API로 지도 표시 */}
                                {schedule.place !== "" && (
                                    <div className={getIconClass(schedule, "place")}>
                                        <img alt="place" src={placeIcon} onClick={(e) => handleImgClick(e, schedule, "place")} className="popup-trigger" />
                                    </div>
                                )}

                                {/* 메모 */}
                                {schedule.memo !== "" && (
                                    <div className={getIconClass(schedule, "memo")}>
                                        <img alt="memo" src={memoIcon} onClick={(e) => handleImgClick(e, schedule, "memo")} className="popup-trigger" />
                                    </div>
                                )}

                                {/* 알람 - 알람 입력되면 알람 시간도 함께 필수 입력 되도록 처리 필요 */}
                                {schedule.is_alert && (
                                    <div className={getIconClass(schedule, "alert")}>
                                        <img alt="alert" src={alertIcon} onClick={(e) => handleImgClick(e, schedule, "alert")} className="popup-trigger" />
                                    </div>
                                )}

                                {/* 하루 종일 일정 - 일정 내용과 일정 등록자 배경에 색 줄 그림 처리 */}
                                {schedule.is_allday}
                                {/* 휴일 */}
                                {schedule.is_holiday && (
                                    <div className={getIconClass(schedule, "holiday")}>
                                        <img alt="holiday" src={holidayIcon} onClick={(e) => handleImgClick(e, schedule, "holiday")} className="popup-trigger" />
                                    </div>
                                )}

                                {/* 완료 - 일정 제목에 가운데 줄 긋기 처리 */}
                                {schedule.is_completed}
                                {/* 완료 일자 - 일정 제목에 hover 시 div 생성되어 완료 날짜 표시 */}
                                {schedule.is_completed_date}
                            </IconDiv>
                        </InfoDiv>
                    </ScheduleLi>
                ))}

                {/* 팝업 DIV */}
                <PopupDiv ref={detailRef} $top={popup.y} $left={popup.x} $show={popup.visible} style={{ pointerEvents: popup.visible ? "auto" : "none" }}>
                    {popup.data && (
                        <>
                            <strong>{popup.data.title}</strong>
                            <div style={{ marginTop: 6 }}>{popup.data.value}</div>
                            {popup.data.extra && (
                                <div style={{ marginTop: 6 }}>
                                    <a href={popup.data.extra} target="_blank" rel="noopener noreferrer">
                                        지도보기
                                    </a>
                                </div>
                            )}
                        </>
                    )}
                </PopupDiv>
            </>
        );
    }
};

export default ScheduleList;
