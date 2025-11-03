import React, { useEffect, useRef } from "react";
import { AlertModalDiv } from "../../../styled/common/ui/AlertModal";
import { iconList } from "../../../utils/IconSvg";

// Button 컴포넌트 (바인딩 변수)

// open : 모달 알림 여부
// onClose : 닫힘 함수
// desc : 내용
// func : src/utils/IconSvg.jsx 내부에 있는 리스트 파일의 func와 같은 데이터를 가져옴

// IconSvg.jsx 의 List 내용
// 1. func : 구분 (title)
// 2. color1 : 왼쪽 색상
// 3. color2 : 오른쪽 색상
// 4. icon : 표시될 svg

const AlertModal = ({ open, onClose, func, desc }) => {
    const modalRef = useRef();
    const selectedIcon = iconList.find((item) => item.func === func);
    if (!selectedIcon) return null;
    const { color1, color2, icon } = selectedIcon;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (open && modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, onClose]);

    return (
        <AlertModalDiv open={open} $color1={color1} $color2={color2}>
            <div className="modern-success-message" ref={modalRef}>
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>
                <div className="icon-wrapper">{icon}</div>
                <div className="text-wrapper">
                    <div className="modalTitle">{func}</div>
                    <div className="message">{desc}</div>
                </div>
            </div>
        </AlertModalDiv>
    );
};

export default AlertModal;
