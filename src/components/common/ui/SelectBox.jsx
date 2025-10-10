import React, { useEffect, useRef, useState } from "react";
import { SelectBoxDiv } from "../../../styled/common/ui/SelectBox";

// SelectBox 컴포넌트
// 바인딩 받아야 할 List 형태 [{idx:1, value:'', text:''}, {idx:2, value:'', text:''}...]

const SelectBox = ({ list = [], onChange }) => {
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = useState(false);
    const [filteredList, setFilteredList] = useState(list);
    const containerRef = useRef();

    // input 변화 시 리스트 필터링
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setOpen(true);
        const lowerValue = value.toLowerCase();
        setFilteredList(list.filter((item) => item.text.toLowerCase().startsWith(lowerValue)));
    };

    // li 클릭 시 value 반영
    const handleItemClick = (item) => {
        setInputValue(item.value);
        if (onChange) onChange(item);
    };

    // focus 이벤트
    const handleFocus = () => {
        setOpen(true);
        setFilteredList(list);
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
        <SelectBoxDiv ref={containerRef} style={{ position: "relative", width: "300px" }}>
            <input
                className="chosenValue"
                type="text"
                value={inputValue}
                placeholder={open ? "Type to filter" : "Select state"}
                onFocus={handleFocus}
                onBlur={() => setTimeout(() => setOpen(false), 200)}
                onChange={handleInputChange}
                autoComplete="off"
            />
            {open && (
                <ul className="valueList open" style={{ position: "absolute", background: "#fff", border: "1px solid #ddd", width: "100%", zIndex: 2, margin: 0, padding: 0 }}>
                    {filteredList.length > 0 ? (
                        filteredList.map((item) => (
                            <li key={item.idx} value={item.value} onClick={() => handleItemClick(item)} style={{ listStyle: "none", padding: "5px 10px", cursor: "pointer" }}>
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
