import React, { useState, useEffect } from "react";
import { ScheduleLi, HeaderDiv, DescDiv, InfoDiv, IconDiv } from "../../styled/common/ScheduleList";
import supabase from "../../services/supabaseClient";

const ScheduleList = () => {
    const [scheduleList, setScheduleList] = useState([]);
    const [loading, setLoading] = useState(true);

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
                            {schedule.desc}
                        </DescDiv>

                        <InfoDiv>
                            {/* 일정 카테고리 */}
                            <div>{schedule.category}</div>

                            {/* 사용자 */}
                            <div>{schedule.user_id}</div>

                            {/* 장소 - 아이콘 처리 후 마우스 올리면 DIV 생성되어 주소와 지도API 표시 */}
                            {schedule.place}
                            <div>
                                <img alt="holiday" src="../assets/icons/holiday.png" />
                            </div>

                            <IconDiv>
                                {/* 메모 - 아이콘 처리 후 마우스 올리면 DIV 생성되어 메모 내용 표시 */}
                                {schedule.memo}

                                {/* 알람 - 아이콘 처리 후 마우스 올리면 DIV 생성되어 알람 시간 표시 */}
                                {schedule.is_alert}
                                {/* 알람 일시 */}
                                {schedule.alert_date}

                                {/* 하루 종일 일정 - 리스트 DIV 맨 위에 줄 길게 생성 처리 */}
                                {schedule.is_allday}

                                {/* 휴일 - 날짜 표시에 빨간색으로 처리 (보통은 흰색, 검정색 처리) */}
                                {schedule.is_holiday}

                                {/* 완료 - 일정 내용 글자에 가운데 줄 긋기 처리 */}
                                {schedule.is_completed}
                                {/* 완료 일자 */}
                                {schedule.is_completed_date}
                            </IconDiv>
                        </InfoDiv>
                    </ScheduleLi>
                ))}
            </>
        );
    }
};

export default ScheduleList;
