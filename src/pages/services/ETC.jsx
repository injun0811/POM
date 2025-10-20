import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import { ETCDiv } from "../../styled/services/ETC";
import IconButton from "../../components/common/ui/IconButton";

const ETC = () => {
    const [date, setDate] = useState(new Date());
    return (
        <ETCDiv>
            <h1>소규모 기능</h1>
            <h2>ETC</h2>

            <section className="flex">
                <div className="step one">
                    <h3>아이콘 활용한 버튼 컴포너트</h3>
                    <IconButton func={"Download"}></IconButton>
                    <IconButton func={"Delete"}></IconButton>
                    <IconButton func={"Cancel"}></IconButton>
                    <IconButton func={"Update"}></IconButton>
                    <IconButton func={"Reset"}></IconButton>
                    <IconButton func={"Save"}></IconButton>
                </div>

                <div className="step">
                    <h3>DatePicker 라이브러리</h3>
                    <DatePicker seleted={date} onChange={(d) => setDate(d)} dateFormat="yyyy-MM-dd" />
                    <p>선택한 날짜 : {dayjs(date).format("YYYY-MM-DD")}</p>
                </div>
            </section>
        </ETCDiv>
    );
};

export default ETC;
