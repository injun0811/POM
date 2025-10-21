import React from "react";
import { MiniTextBoxDiv } from "../../../styled/common/ui/MiniTextBox";

// textBox 컴포넌트 (바인딩 변수)
// * 텍스트가 input 창의 길이보다 길면 자동 슬라이딩 기능 적용

// width : 너비길이
// placeholder : 미 입력 시, 설명내용
// value : 상위 컴포넌트에 전달할 값 (주소 데이터)
// readOnly : 읽기전용 여부

const MiniTextBox = ({ width, placeholder, value, readOnly }) => {
    return (
        <MiniTextBoxDiv>
            <div className="input-wrapper" style={{ width }}>
                <input className="input-box" type="text" placeholder={placeholder} value={value} readOnly={readOnly} />
                <span className="underline"></span>
            </div>
        </MiniTextBoxDiv>
    );
};

export default MiniTextBox;
