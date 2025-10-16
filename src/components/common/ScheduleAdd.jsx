import React, { useState, useEffect } from "react";
import { RegistForm } from "../../styled/common/ScheduleAdd";
import SelectBox from "../common/ui/SelectBox";
import TextBox from "../common/ui/TextBox";
import supabase from "../../services/supabaseClient";

const ScheduleAdd = ({ open }) => {
    const [category, setCategory] = useState([]);
    const [subDiv, setSubDiv] = useState(true);

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
                <div className="textTab">
                    {/* title - textBox */}
                    <TextBox desc={"Title"} width={"200px"} height={"60px"} subDiv={false} />

                    {/* desc - textArea */}
                    <TextBox desc={"Desc"} width={"200px"} height={"60px"} subDiv={true} setSubDiv={setSubDiv} popupWidth={"1170px"} popupHeight={"200px"} popupTop={"690px"} popupLeft={"370px"} />
                    {/* <DetailDiv Name={Name}></DetailDiv> */}
                </div>

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
