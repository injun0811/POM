import React from "react";
import { TextBoxDiv } from "../../../styled/common/ui/TextBox";

// TextBox 컴포넌트 { desc (label에 표시할 텍스트), width (컴포넌트 가로 길이) }

const TextBox = ({ desc, width }) => {
    return (
        <TextBoxDiv style={{ width: width }}>
            <div className="input">
                <input type="text" required autoComplete="off" />
                <label htmlFor="name">{desc}</label>
            </div>
        </TextBoxDiv>
    );
};

export default TextBox;
