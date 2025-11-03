import React, { useState, useEffect, useCallback } from "react";
import { RegistForm } from "../../styled/common/ScheduleAdd";
import SelectBox from "../common/ui/SelectBox";
import TextBox from "../common/ui/TextBox";
import LocMapAPI from "../LocMapAPI";
import supabase from "../../api/supabaseClient";
import SideCheckBox from "../../components/common/ui/SideCheckBox";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";

// ScheduleAdd 컴포넌트 (바인딩 변수)

// open : 등록 폼 열기 여부

const ScheduleAdd = ({ open }) => {
    const [category, setCategory] = useState([]);
    const [subDiv, setSubDiv] = useState(true);
    const [addressData, setAddressData] = useState({
        postcode: "",
        address: "",
        detailAddress: "",
        extraAddress: "",
    });
    const [isCompleted, setIsCompleted] = useState(false);
    const [completedDate, setCompletedDate] = useState(null);
    const [isAlerted, setIsAlerted] = useState(false);
    const [alertDate, setAlertDate] = useState(null);
    // Address
    const fullAddress = `${addressData.postcode} ${addressData.address} ${addressData.detailAddress} ${addressData.extraAddress}`.trim();

    const handleAddressChange = useCallback((newData) => {
        setAddressData(newData);
    }, []);

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

                    {/* desc - textArea (open div) */}
                    <TextBox desc={"Desc"} width={"200px"} height={"60px"} subDiv={true} setSubDiv={setSubDiv} popupWidth={"1170px"} popupHeight={"200px"} popupTop={"690px"} popupLeft={"370px"} />

                    {/* memo - textArea (open div) */}
                    <TextBox desc={"Memo"} width={"200px"} height={"60px"} subDiv={true} setSubDiv={setSubDiv} popupWidth={"1170px"} popupHeight={"200px"} popupTop={"690px"} popupLeft={"370px"} />

                    {/* place - API (open div) */}
                    <LocMapAPI onAddressUpdate={handleAddressChange} AddressText={fullAddress} />
                </div>

                <div className="textTab">
                    {/* is_allday (true / false) */}
                    <SideCheckBox color={"Blue"} label={"하루종일"} width={"130px"} onChange={false} />

                    {/* is_holiday (true / false) */}
                    <SideCheckBox color={"Pink"} label={"휴일"} width={"90px"} onChange={false} />

                    {/* is_completed (true / false) */}
                    <SideCheckBox
                        color={"Green"}
                        label={"완료"}
                        width={"90px"}
                        onChange={(checked) => {
                            setIsCompleted(checked);
                            if (!checked) setCompletedDate(null);
                            else setCompletedDate(new Date());
                        }}
                    />

                    {/* completed_date */}
                    <div>
                        <DatePicker
                            className="date"
                            selected={completedDate}
                            onChange={(d) => setCompletedDate(d)}
                            showTimeSelect
                            dateFormat="yyyy-MM-dd HH:mm"
                            timeFormat="HH:mm"
                            disabled={!isCompleted}
                            placeholderText="시간을 선택하세요"
                        />
                        <input type="hidden" name="completedDate" id="completedDate" value={dayjs(completedDate).format("YYYY-MM-DD HH:mm")} readOnly />
                    </div>

                    {/* is_alert (true / false) */}
                    <SideCheckBox
                        color={"Orange"}
                        label={"알람"}
                        width={"90px"}
                        onChange={(checked) => {
                            setIsAlerted(checked);
                            if (!checked) setAlertDate(null);
                        }}
                    />

                    {/* alert_date */}
                    <div>
                        <DatePicker
                            className="date"
                            selected={alertDate}
                            onChange={(d) => setAlertDate(d)}
                            showTimeSelect
                            dateFormat="yyyy-MM-dd HH:mm"
                            timeFormat="HH:mm"
                            disabled={!isAlerted}
                            placeholderText="시간을 선택하세요"
                        />
                        <input type="hidden" name="alertDate" id="alertDate" value={dayjs(alertDate).format("YYYY-MM-DD HH:mm")} readOnly />
                    </div>

                    {/* category */}
                    <SelectBox list={category} onChange={(selected) => console.log(selected)} />
                </div>

                {/* start_date */}

                {/* end_date */}

                {/* reg_date */}

                {/* update_date */}
            </RegistForm>
        </>
    );

    // 컴포넌트 DIV
    <div></div>;
};

export default ScheduleAdd;
