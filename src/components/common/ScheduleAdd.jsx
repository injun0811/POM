import React, { useState, useEffect, useCallback } from "react";
import { useSchedule } from "../../contexts/ScheduleContext";
import { BtnFlexDiv, RegistForm } from "../../styled/common/ScheduleAdd";
import SelectBox from "../common/ui/SelectBox";
import TextBox from "../common/ui/TextBox";
import LocMapAPI from "../LocMapAPI";
import supabase from "../../api/supabaseClient";
import SideCheckBox from "../../components/common/ui/SideCheckBox";
import PagingButton from "../../components/common/ui/PagingButton";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";

// ScheduleAdd 컴포넌트 (바인딩 변수)

// open : 등록 폼 열기 여부

const ScheduleAdd = ({ open }) => {
    const { scheduleData, setScheduleData } = useSchedule();
    const [category, setCategory] = useState([]);
    const [subDiv, setSubDiv] = useState(true);
    const [addressData, setAddressData] = useState({
        postcode: "",
        address: "",
        detailAddress: "",
        extraAddress: "",
    });
    // 완료 체크 상태값
    const [isCompleted, setIsCompleted] = useState(false);
    const [completedDate, setCompletedDate] = useState(null);
    // 알람 체크 상태값
    const [isAlerted, setIsAlerted] = useState(false);
    const [alertDate, setAlertDate] = useState(null);
    // // 시작 체크 상태값
    const [startDate, setStartDate] = useState(null);
    // // 종료 체크 상태값
    const [endDate, setEndDate] = useState(null);
    // 하루 종일 상태 값
    const [isAllday, setIsAllday] = useState(false);
    // Address
    const fullAddress = `${addressData.postcode} ${addressData.address} ${addressData.detailAddress} ${addressData.extraAddress}`.trim();

    const handleAddressChange = useCallback((newData) => {
        setAddressData(newData);
        setScheduleData((prev) => ({
            ...prev,
            address: {
                postcode: newData.postcode,
                address: newData.address,
                detailAddress: newData.detailAddress,
                extraAddress: newData.extraAddress,
            },
        }));
    }, []);

    useEffect(() => {
        console.log("update Schedule Data:", scheduleData);
    }, [scheduleData]);

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

    // 일정 등록 버튼 함수
    const scheduleAddFunc = async () => {
        // 1. 전체 주소 조합
        const fullAddress = [scheduleData.address?.postcode, scheduleData.address?.address, scheduleData.address?.detailAddress, scheduleData.address?.extraAddress].filter(Boolean).join(" ");
        // 2-1. 날짜 필드 포맷 변환
        const formatDate = (date) => (date ? dayjs(date).format("YYYY-MM-DD HH:mm:ss") : null);
        // 2-2. 필요한 모든 날짜 필드에 적용
        const formattedScheduleData = {
            ...scheduleData,
            completedDate: formatDate(scheduleData.completedDate),
            startDate: formatDate(scheduleData.startDate),
            endDate: formatDate(scheduleData.endDate),
            alertDate: formatDate(scheduleData.alertDate),
        };

        console.log("등록 데이터 : " + JSON.stringify(formattedScheduleData, null, 2));
        console.log("등록 주소 : " + fullAddress);

        // // 3. supabase insert
        // await supabase.from("schedule_list").insert([
        //     {
        //         ...formattedScheduleData,
        //         address: fullAddress,
        //     },
        // ]);
    };

    // 초기화 버튼 함수
    const reset = () => {};

    return (
        <>
            <BtnFlexDiv>
                {open ? <PagingButton name={"일정 등록"} onClick={() => scheduleAddFunc()} /> : null}
                {open ? <PagingButton name={"초기화"} onClick={() => reset()} /> : null}
            </BtnFlexDiv>

            <RegistForm $open={open}>
                <div className="textTab">
                    {/* title - textBox */}
                    <TextBox
                        desc={"Title"}
                        width={"200px"}
                        height={"60px"}
                        subDiv={false}
                        value={scheduleData.title || ""}
                        onChange={(e) => setScheduleData((prev) => ({ ...prev, title: e.target.value }))}
                    />

                    {/* desc - textArea (open div) */}
                    <TextBox
                        desc={"Desc"}
                        width={"200px"}
                        height={"60px"}
                        subDiv={true}
                        setSubDiv={setSubDiv}
                        popupWidth={"1170px"}
                        popupHeight={"200px"}
                        popupTop={"690px"}
                        popupLeft={"370px"}
                        value={scheduleData.desc || ""}
                        onChange={(e) => setScheduleData((prev) => ({ ...prev, desc: e.target.value }))}
                    />

                    {/* memo - textArea (open div) */}
                    <TextBox
                        desc={"Memo"}
                        width={"200px"}
                        height={"60px"}
                        subDiv={true}
                        setSubDiv={setSubDiv}
                        popupWidth={"1170px"}
                        popupHeight={"200px"}
                        popupTop={"690px"}
                        popupLeft={"370px"}
                        value={scheduleData.memo || ""}
                        onChange={(e) => setScheduleData((prev) => ({ ...prev, memo: e.target.value }))}
                    />

                    {/* place - API (open div) */}
                    <LocMapAPI onAddressUpdate={handleAddressChange} AddressText={fullAddress} />

                    {/* category */}
                    <SelectBox list={category} onChange={(selected) => setScheduleData((prev) => ({ ...prev, category: selected.value }))} />
                </div>

                <div className="textTab">
                    <div className="sectionDiv">
                        {/* is_allday (true / false) */}
                        <SideCheckBox
                            color={"Blue"}
                            label={"하루종일"}
                            width={"130px"}
                            onChange={(checked) => {
                                if (checked) setStartDate(null);
                                if (checked) setEndDate(null);
                                setIsAllday(checked);
                                setScheduleData((prev) => ({ ...prev, isAllday: checked }));
                            }}
                        />

                        {/* start_date */}
                        <div>
                            <DatePicker
                                className="date"
                                selected={startDate}
                                onChange={(d) => {
                                    setStartDate(d);
                                    setScheduleData((prev) => ({ ...prev, startDate: d }));
                                }}
                                showTimeSelect
                                dateFormat="yyyy-MM-dd HH:mm"
                                timeFormat="HH:mm"
                                disabled={isAllday}
                                placeholderText="시작 날짜"
                            />
                            <input type="hidden" name="startDate" id="startDate" value={dayjs(startDate).format("YYYY-MM-DD HH:mm")} readOnly />
                        </div>

                        {/* end_date */}
                        <div>
                            <DatePicker
                                className="date"
                                selected={endDate}
                                onChange={(d) => {
                                    setEndDate(d);
                                    setScheduleData((prev) => ({ ...prev, endDate: d }));
                                }}
                                showTimeSelect
                                dateFormat="yyyy-MM-dd HH:mm"
                                timeFormat="HH:mm"
                                disabled={isAllday}
                                placeholderText="종료 날짜"
                            />
                            <input type="hidden" name="endDate" id="endDate" value={dayjs(endDate).format("YYYY-MM-DD HH:mm")} readOnly />
                        </div>
                    </div>

                    {/* is_holiday (true / false) */}
                    <SideCheckBox color={"Pink"} label={"휴일"} width={"90px"} onChange={(checked) => setScheduleData((prev) => ({ ...prev, is_holiday: checked }))} />

                    <div className="sectionDiv">
                        {/* is_completed (true / false) */}
                        <SideCheckBox
                            color={"Green"}
                            label={"완료"}
                            width={"90px"}
                            onChange={(checked) => {
                                setIsCompleted(checked);
                                if (!checked) setCompletedDate(null);
                                else setCompletedDate(new Date());
                                setScheduleData((prev) => ({ ...prev, isCompleted: checked }));
                            }}
                        />

                        {/* completed_date */}
                        <div>
                            <DatePicker
                                className="date"
                                selected={completedDate}
                                onChange={(d) => {
                                    setCompletedDate(d);
                                    setScheduleData((prev) => ({ ...prev, completedDate: d }));
                                }}
                                showTimeSelect
                                dateFormat="yyyy-MM-dd HH:mm"
                                timeFormat="HH:mm"
                                disabled={!isCompleted}
                                placeholderText="시간을 선택하세요"
                            />
                            <input type="hidden" name="completedDate" id="completedDate" value={dayjs(completedDate).format("YYYY-MM-DD HH:mm")} readOnly />
                        </div>
                    </div>

                    <div className="sectionDiv">
                        {/* is_alert (true / false) */}
                        <SideCheckBox
                            color={"Orange"}
                            label={"알람"}
                            width={"90px"}
                            onChange={(checked) => {
                                setIsAlerted(checked);
                                if (!checked) setAlertDate(null);
                                setScheduleData((prev) => ({ ...prev, isAlerted: checked }));
                            }}
                        />

                        {/* alert_date */}
                        <div>
                            <DatePicker
                                className="date"
                                selected={alertDate}
                                onChange={(d) => {
                                    setAlertDate(d);
                                    setScheduleData((prev) => ({ ...prev, alertDate: d }));
                                }}
                                showTimeSelect
                                dateFormat="yyyy-MM-dd HH:mm"
                                timeFormat="HH:mm"
                                disabled={!isAlerted}
                                placeholderText="시간을 선택하세요"
                            />
                            <input type="hidden" name="alertDate" id="alertDate" value={dayjs(alertDate).format("YYYY-MM-DD HH:mm")} readOnly />
                        </div>
                    </div>
                </div>
            </RegistForm>
        </>
    );

    // 컴포넌트 DIV
    <div></div>;
};

export default ScheduleAdd;
