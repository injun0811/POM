import React, { useState } from "react";
import { SideCheckBoxDiv } from "../../../styled/common/ui/SideCheckBox";

// SideCheckBox 컴포넌트 (바인딩 변수)

// color : 체크될 때 색상
// label : 체크박스 옆 표시될 내용
// width : 전체 너비
// onChange : 바인딩 연동 될 flag 값 (true / false)

const SideCheckBox = ({ color, label, width, checked, onChange }) => {
    const handleChange = (e) => {
        const isChecked = e.target.checked;
        if (onChange) onChange(isChecked);
    };

    return (
        <SideCheckBoxDiv color={color} width={width}>
            <div className="checkbox-container">
                <label className={"ios-checkbox"}>
                    <input type="checkbox" id="labelText" checked={checked} onChange={handleChange} />
                    <div className="checkbox-wrapper">
                        <div className="checkbox-bg"></div>
                        <svg className="checkbox-icon" viewBox="0 0 24 24" fill="none">
                            <path className="check-path" d="M4 12L10 18L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    <span htmlFor="labelText">{label}</span>
                </label>
            </div>
        </SideCheckBoxDiv>
    );
};

export default SideCheckBox;
