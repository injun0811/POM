import React from "react";
import { ScheduleLi } from "../../styled/common/ScheduleList";

const ScheduleList = () => {
    return (
        <ScheduleLi>
            {/* https://uiverse.io/SouravBandyopadhyay/rude-tiger-29 */}
            {/* https://uiverse.io/Samalander0/sweet-eel-98 */}

            {/* 하루 종일 일정 - 리스트 DIV 맨 위에 줄 길게 생성 처리 */}

            {/* 완료 - 일정 내용 글자에 가운데 줄 긋기 처리 */}
            <p>styled-component 정리</p>

            {/* 휴일 - 날짜 표시에 빨간색으로 처리 (보통은 흰색, 검정색 처리) */}
            <div>
                <img src="" />
            </div>

            {/* 장소 - 아이콘 처리 후 마우스 올리면 DIV 생성되어 주소와 지도API 표시 */}

            {/* 메모 - 아이콘 처리 후 마우스 올리면 DIV 생성되어 메모 내용 표시 */}

            {/* 알람 - 아이콘 처리 후 마우스 올리면 DIV 생성되어 알람 시간 표시 */}
        </ScheduleLi>
    );
};

export default ScheduleList;
