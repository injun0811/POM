import React, { useState, useRef, useEffect } from "react";
import { TextBoxDiv, TextAreaDiv } from "../../../styled/common/ui/TextBox";
import cancel from "../../../assets/icons/cancel.png";

// TextBox 컴포넌트 (바인딩 변수)

// desc : 입력 내용
// width : TextBox 너비
// height : TextBox 높이
// subDiv : TextArea 팝업 여부 (true / false (단순 textBox))
// setSubDiv : TextArea 팝업 상태 변경 함수
// popupWidth : TextArea 팝업 너비
// popupHeight : TextArea 팝업 높이
// popupTop : TextArea 팝업 top 위치
// popupLeft : TextArea 팝업 left 위치

// 바인딩 예시
// <TextBox desc={"Desc"} width={"200px"} height={"60px"} subDiv={true} setSubDiv={setSubDiv} popupWidth={"1170px"} popupHeight={"200px"} popupTop={"690px"} popupLeft={"370px"} />

const TextBox = ({ desc, width, height, subDiv, setSubDiv, popupWidth, popupHeight, popupTop, popupLeft }) => {
    const [isActive, setIsActive] = useState(false);
    const textAreaRef = useRef(null);
    const textAreaDivRef = useRef(null);

    useEffect(() => {
        if (!isActive) return;
        const handleClickOutside = (event) => {
            if (textAreaDivRef.current && !textAreaDivRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isActive]);

    useEffect(() => {
        if (isActive && textAreaRef.current) {
            textAreaRef.current.focus();
        }
    }, [isActive]);

    // not open Div, just TextBox
    if (!subDiv) {
        return (
            <TextBoxDiv style={{ width: width, height: height }}>
                <div className="input">
                    <input type="text" required autoComplete="off" />
                    <label htmlFor="name">{desc}</label>
                </div>
            </TextBoxDiv>
        );
    }
    // TextArea
    if (subDiv) {
        return (
            <>
                <TextBoxDiv style={{ width: width, height: height }}>
                    <div className="input" onClick={() => !isActive && setIsActive(true)}>
                        <input type="text" readOnly style={{ cursor: "pointer" }} onClick={() => setIsActive(true)} />
                        <label htmlFor="name">{desc}</label>
                    </div>
                </TextBoxDiv>
                <TextAreaDiv $active={isActive} ref={textAreaDivRef} $popupWidth={popupWidth} $popupHeight={popupHeight} $popupTop={popupTop} $popupLeft={popupLeft}>
                    <div className="background" onClick={() => setIsActive(false)} />
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="title">
                            <p>{desc}</p>
                            <button
                                onClick={() => {
                                    setIsActive(false);
                                    if (setSubDiv) setSubDiv(false);
                                }}
                            >
                                <img src={cancel} alt="cancel" />
                            </button>
                        </div>
                        <textarea ref={textAreaRef} />
                    </div>
                </TextAreaDiv>
            </>
        );
    }
};

export default TextBox;
