import React, { useEffect, useState } from "react";
import Year from "../../components/common/Year";
import supabase from "../../services/supabaseClient";

const SM = () => {
    const [scheduleList, setScheduleList] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div>
            <h1>일정 관리</h1>
            <h2>schedule management</h2>
            <div>
                <Year year={2025} scheduleList={scheduleList} loading={loading} />
            </div>
        </div>
    );
};

export default SM;
