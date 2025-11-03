import React from "react";
import { IconButtonDiv } from "../../../styled/common/ui/IconButton";
import { iconList } from "../../../utils/IconSvg";

// IconButton 컴포넌트 (바인딩 변수)

// func : src/utils/IconSvg.jsx 내부에 있는 리스트 파일의 func와 같은 데이터를 가져옴

// IconSvg.jsx 의 List 내용
// 1. func : 구분
// 2. color1 : 왼쪽 색상
// 3. color2 : 오른쪽 색상
// 4. icon : 표시될 svg

const IconButton = ({ func }) => {
    const selectedIcon = iconList.find((item) => item.func === func);
    if (!selectedIcon) return null;
    const { color1, color2, icon } = selectedIcon;

    return (
        <IconButtonDiv $color1={color1} $color2={color2}>
            <button className="Btn">
                <div className="sign">
                    <div>{icon}</div>
                </div>
                <div className="text">{func}</div>
            </button>
        </IconButtonDiv>
    );
};

export default IconButton;
