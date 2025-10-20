import React from "react";
import { IconButtonDiv } from "../../../styled/common/ui/IconButton";
import { iconList } from "../../../utils/IconSvg";

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
