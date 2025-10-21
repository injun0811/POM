import React, { useState, useRef, useEffect } from "react";
import cancel from "../assets/icons/cancel.png";
import LocationAPI from "../api/LocationAPI";
import { TextBoxDiv, TextAreaDiv } from "../styled/LocMapAPI";

const LocMapAPI = ({ textAreaRef, textAreaDivRef }) => {
    const [isActive, setIsActive] = useState(false);
    const APIDivRef = useRef(null);

    useEffect(() => {
        if (!isActive) return;
        const handleClickOutside = (event) => {
            if (APIDivRef.current && !APIDivRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isActive]);

    return (
        <>
            <TextBoxDiv>
                <div className="input" onClick={() => !isActive && setIsActive(true)}>
                    <input type="text" readOnly style={{ cursor: "pointer" }} onClick={() => setIsActive(true)} />
                    <label htmlFor="name">Address</label>
                </div>
            </TextBoxDiv>
            <TextAreaDiv $active={isActive} ref={textAreaDivRef}>
                <div className="background" onClick={() => setIsActive(false)} />
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <LocationAPI />
                    <button
                        className="title"
                        onClick={() => {
                            setIsActive(false);
                            if (setSubDiv) setSubDiv(false);
                        }}
                    >
                        <img src={cancel} alt="cancel" />
                    </button>
                </div>
            </TextAreaDiv>
        </>
    );
};

export default LocMapAPI;
