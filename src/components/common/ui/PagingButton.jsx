import React from "react";
import { PagingButtonBtn } from "../../../styled/common/ui/PagingButton";

// Button 컴포넌트 (바인딩 변수)

// name : 내용
// onClick : 클릭 시 호출될 함수

const PagingButton = ({ name, onClick }) => {
    return <PagingButtonBtn onClick={onClick}>{name}</PagingButtonBtn>;
};

export default PagingButton;
