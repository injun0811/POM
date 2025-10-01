import React from "react";
import { RegistForm } from "../../styled/common/ScheduleAdd";

const ScheduleAdd = () => {
    return (
        <RegistForm>
            {/* title */}

            {/* is_allday (true / false) */}

            {/* is_holiday (true / false) */}

            {/* is_completed (true / false) */}

            {/* completed_date */}

            {/* is_alert (true / false) */}

            {/* alert_date */}

            {/* start_date */}

            {/* end_date */}

            {/* category */}

            {/* 컴포넌트화 DIV 하나로 보여주는 데이터 (hover, click) */}
            <DetailDiv Name={Name}>
                {/* desc - textArea*/}

                {/* place - 주소 입력 및 지도 API 연동 */}

                {/* memo - textArea */}
            </DetailDiv>

            {/* 등록 날짜 & 업뎃 날짜 */}

            {/* reg_date */}

            {/* update_date */}
        </RegistForm>
    );

    // 컴포넌트 DIV
    <div></div>;
};

export default ScheduleAdd;
