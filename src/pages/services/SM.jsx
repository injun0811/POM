import React, { useEffect, useState } from "react";
import Year from "../../components/common/Year";
import ScheduleAdd from "../../components/common/ScheduleAdd";
import supabase from "../../api/supabaseClient";
import PagingButton from "../../components/common/ui/PagingButton";
import { SMDiv } from "../../styled/page/services/SM";

const SM = () => {
    const [scheduleList, setScheduleList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAdd, setShowAdd] = useState(false);

    // 일정 리스트 가져오기
    useEffect(() => {
        const fetchScheduleList = async () => {
            const { data, error } = await supabase.from("schedule_list").select("*");
            if (error) console.error("Error fetching items:", error);
            else {
                setScheduleList(data || []);
            }
            setLoading(false);
        };
        fetchScheduleList();
    }, []);

    // 일정 등록 버튼 함수
    const scheduleAddFunc = () => {};

    // 초기화 버튼 함수
    const reset = () => {};

    return (
        <SMDiv>
            <div>
                <h1>일정 관리</h1>
                <h2>schedule management</h2>

                <div className="btnFlex">
                    {showAdd ? <PagingButton name={"일정 등록"} onclick={() => scheduleAddFunc()} /> : null}
                    {showAdd ? <PagingButton name={"초기화"} onclick={() => reset()} /> : null}
                    <PagingButton name={showAdd ? "등록 취소" : "일정 등록"} onClick={() => setShowAdd((v) => !v)} />
                </div>
                <div>
                    <Year year={2025} scheduleList={scheduleList} loading={loading} />
                </div>
            </div>
            {<ScheduleAdd open={showAdd} />}
        </SMDiv>
    );
};

export default SM;
