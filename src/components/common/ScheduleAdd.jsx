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

                    {/* memo - textArea */}
                    <TextBox desc={"Memo"} width={"200px"} height={"60px"} subDiv={true} setSubDiv={setSubDiv} popupWidth={"1170px"} popupHeight={"200px"} popupTop={"690px"} popupLeft={"370px"} />

                    {/* place */}
                    <TextBox desc={"place"} width={"400px"} height={"60px"} />
                </div>

                <button class="button" type="button">
                    <span class="button__text">Download</span>
                    <span class="button__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg">
                            <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                            <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                            <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                        </svg>
                    </span>
                </button>

                <button class="button" type="button">
                    <span class="button__text">Download</span>
                    <span class="button__icon">
                        <svg viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                        </svg>
                    </span>
                </button>

                <button class="button" type="button">
                    <span class="button__text">Download</span>
                    <span class="button__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M23 12c0 1.042-.154 2.045-.425 3h-2.101c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9-1.706 0-3.296.484-4.655 1.314l1.858 2.686h-6.994l2.152-7 1.849 2.673c1.684-1.049 3.659-1.673 5.79-1.673 6.074 0 11 4.925 11 11zm-6.354 7.692c-1.357.826-2.944 1.308-4.646 1.308-4.962 0-9-4.038-9-9 0-1.053.191-2.06.525-3h-2.1c-.271.955-.425 1.958-.425 3 0 6.075 4.925 11 11 11 2.127 0 4.099-.621 5.78-1.667l1.853 2.667 2.152-6.989h-6.994l1.855 2.681z" />
                        </svg>
                    </span>
                </button>

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
