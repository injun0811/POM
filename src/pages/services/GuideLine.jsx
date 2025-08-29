import React, { useEffect, useState } from "react";
import supabase from "../../services/supabaseClient";

const GuideLine = () => {
    const [tests, setTest] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTest = async () => {
            const { data, error } = await supabase.from("testTable").select("*");
            if (error) console.error("Error fetching items:", error);
            else {
                console.log("data:", data);
                setTest(data || []);
                setLoading(false);
            }
        };
        fetchTest();
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
                    {tests.map((test) => (
                        <li key={test.seq_no}>
                            {test.seq_no} / {test.text}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
};

export default GuideLine;
