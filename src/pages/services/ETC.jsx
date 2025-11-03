import React, { use, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import { ETCDiv } from "../../styled/page/services/ETC";
import IconButton from "../../components/common/ui/IconButton";
import SideCheckBox from "../../components/common/ui/SideCheckBox";
import AlertModal from "../../components/common/ui/AlertModal";

const ETC = () => {
    const [date, setDate] = useState(new Date());
    const [alertOpen, setAlertOpen] = useState(false); // AlertModal

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
                    <DatePicker selected={date} onChange={(d) => setDate(d)} showTimeSelect dateFormat="yyyy-MM-dd HH:mm" timeFormat="HH:mm" />
                    <input type="hidden" name="completedDate" id="completedDate" value={dayjs(date).format("YYYY-MM-DD HH:mm")} readOnly />
                </div>

                <div className="step">
                    <h3>SideCheckBox</h3>
                    <SideCheckBox color={"Green"} label={"테스트 라벨"} width={"100px"} onChange={false} />
                </div>
                <div className="step">
                    <h3>AlertModal</h3>
                    <button className="alert-btn" onClick={() => setAlertOpen(true)}>
                        Cancel - Alert Modal
                    </button>
                    <AlertModal func={"Cancel"} desc={"작업을 취소하시겠습니까?"} open={alertOpen} onClose={() => setAlertOpen(false)} />
                </div>
            </section>
        </ETCDiv>
    );
};

export default ETC;
