import React, { useEffect, useState } from "react";
import supabase from "../../services/supabaseClient";

const GuideLine = () => {
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
                <h1>서비스 가이드</h1>
                <h2>Guideline</h2>
                loading...
            </>
        );
    else {
        return (
            <>
                <h1>서비스 가이드</h1>
                <h2>Guideline</h2>
                <ul>
                    {scheduleList.map((schedule) => (
                        <li key={schedule.idx}>
                            <div>
                                {schedule.idx} / {schedule.title} / {schedule.desc}
                            </div>
                            <div>
                                {schedule.memo} / {schedule.user_id}
                            </div>
                            <div>
                                {schedule.category} / {schedule.reg_date}
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
};

export default GuideLine;
