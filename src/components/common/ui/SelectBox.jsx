import React, { useEffect, useRef, useState } from "react";
import { SelectBoxDiv } from "../../../styled/common/ui/SelectBox";

// SelectBox 컴포넌트 (바인딩 변수)

// list : 선택 배열 리스트
// onChange : 선택 시 호출될 함수

// 바인딩 예시
// <SelectBox list={category}> [{idx:1, value:'', text:''}, {idx:2, value:'', text:''}...]
// idx : key 값
// value : 선택 시 input에 들어가는 값
// text : 리스트에 보여지는 값

const SelectBox = ({ list = [], onChange }) => {
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = useState(false);
    const containerRef = useRef();

    // li 클릭 시 value 반영
    const handleItemClick = (item) => {
        setInputValue(item.text);
        setOpen(false);
        if (onChange) onChange(item);
    };

    // focus 이벤트
    const handleFocus = () => {
        setOpen(true);
    };

    // blur 또는 외부 클릭 처리
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <SelectBoxDiv ref={containerRef}>
            <input className="chosenValue" type="text" value={inputValue} placeholder={open ? "Choice.." : "Category "} onFocus={handleFocus} readOnly autoComplete="off" />
            {open && (
                <ul className="valueList open">
                    {list.length > 0 ? (
                        list.map((item) => (
                            <li key={item.idx} value={item.value} onClick={() => handleItemClick(item)}>
                                {item.text}
                            </li>
                        ))
                    ) : (
                        <li style={{ padding: "5px 10px" }}> No result</li>
                    )}
                </ul>
            )}
        </SelectBoxDiv>
    );
};

export default SelectBox;
