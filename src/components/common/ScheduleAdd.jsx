import React, { useState, useEffect } from "react";
import { RegistForm } from "../../styled/common/ScheduleAdd";
import SelectBox from "../common/ui/SelectBox";
import supabase from "../../services/supabaseClient";

const ScheduleAdd = ({ open }) => {
    const [category, setCategory] = useState([]);

    // 카테고리 리스트 가져오기
    useEffect(() => {
        const fetchScheduleCategory = async () => {
            const { data, error } = await supabase.from("schedule_category").select("*");
            if (error) console.error("Error fetching items:", error);
            else {
                const list = (data || []).map((item, idx) => ({
                    idx: idx + 1,
                    value: item.category,
                    text: item.desc,
                }));
                setCategory(list);
            }
        };
        fetchScheduleCategory();
    }, []);

    return (
        <>
            <RegistForm $open={open}>
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
                <SelectBox list={category} onChange={(selected) => console.log(selected)} />

                {/* 컴포넌트화 DIV 하나로 보여주는 데이터 (hover, click) */}
                {/* <DetailDiv Name={Name}> */}
                {/* desc - textArea*/}

                {/* place - 주소 입력 및 지도 API 연동 */}

                {/* memo - textArea */}
                {/* </DetailDiv> */}

                {/* 등록 날짜 & 업뎃 날짜 */}

                {/* reg_date */}

                {/* update_date */}
            </RegistForm>
        </>
    );

    // 컴포넌트 DIV
    <div></div>;
};

export default ScheduleAdd;
