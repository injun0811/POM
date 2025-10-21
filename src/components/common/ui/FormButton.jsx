import React from "react";
import { FormButtonDiv } from "../../../styled/common/ui/FormButton";

// Button 컴포넌트 (바인딩 변수)

// onClick : 클릭여부
// text : 버튼에 보여줄 내용
// width : 너비길이
// height : 세로길이
// fontSize : 폰트사이즈

// 바인딩 예시
// <FormButton onClick={execDaumPostcode} text={"우편번호 찾기"} width={"100px"} height={"30px"} font-size={"15px"} />

const FormButton = ({ onClick, text, width, height, fontSize }) => {
    return (
        <FormButtonDiv onClick={onClick} $width={width} $height={height} $fontSize={fontSize}>
            <button>{text}</button>
        </FormButtonDiv>
    );
};

export default FormButton;
