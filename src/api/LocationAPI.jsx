import React, { useEffect, useRef, useState } from "react";
import MiniTextBox from "../components/common/ui/MiniTextBox";
import FormButton from "../components/common/ui/FormButton";
import { LocationAPIDiv } from "../styled/api/LocaitionAPI";

const LocationAPI = () => {
    const layerRef = useRef(null);
    const [postcode, setPostcode] = useState("");
    const [address, setAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");
    const [extraAddress, setExtraAddress] = useState("");

    // 다음 주소 API 스크립트 로드
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const closeDaumPostcode = () => {
        if (layerRef.current) layerRef.current.style.display = "none";
    };

    const execDaumPostcode = () => {
        const elementLayer = layerRef.current;
        if (!elementLayer || !window.daum?.Postcode) return;

        new window.daum.Postcode({
            oncomplete: (data) => {
                let addr = "";
                let extraAddr = "";

                if (data.userSelectedType === "R") {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }

                if (data.userSelectedType === "R") {
                    if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    if (data.buildingName !== "" && data.apartment === "Y") {
                        extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
                    }
                    if (extraAddr !== "") {
                        extraAddr = " (" + extraAddr + ")";
                    }
                    setExtraAddress(extraAddr);
                } else {
                    setExtraAddress("");
                }

                setPostcode(data.zonecode);
                setAddress(addr);
                closeDaumPostcode();
            },
            width: "100%",
            height: "100%",
            maxSuggestItems: 5,
        }).embed(elementLayer);

        elementLayer.style.display = "block";
        initLayerPosition(elementLayer);
    };

    const initLayerPosition = (element) => {
        const width = 315;
        const height = 427;
        const borderWidth = 5;

        element.style.top = "250px";
        element.style.left = "370px";
        element.style.width = width + "px";
        element.style.height = height + "px";
        element.style.border = borderWidth + "px solid";
    };

    return (
        <LocationAPIDiv>
            <div className="spaceEvenly">
                <MiniTextBox width={"400px"} placeholder={"참고항목"} value={extraAddress} readOnly />
                <MiniTextBox width={"600px"} placeholder={"주소"} value={address} readOnly />
            </div>
            <div className="flex">
                <div className="spaceEvenly left">
                    <MiniTextBox width={"140px"} placeholder={"우편번호"} value={postcode} readOnly />
                    <MiniTextBox width={"300px"} placeholder={"상세주소"} onChange={(e) => setDetailAddress(e.target.value)} />
                </div>
                <div className="spaceEvenly right">
                    <FormButton onClick={execDaumPostcode} text={"우편번호 찾기"} width={"150px"} height={"50px"} fontSize={"19px"} />
                    <FormButton text={"입력"} width={"150px"} height={"50px"} fontSize={"19px"} />
                </div>
            </div>

            <div
                ref={layerRef}
                style={{
                    display: "none",
                    justifyItems: "center",
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 1,
                    WebkitOverflowScrolling: "touch",
                }}
            >
                <img
                    src="//t1.daumcdn.net/postcode/resource/images/close.png"
                    alt="닫기 버튼"
                    onClick={closeDaumPostcode}
                    style={{
                        cursor: "pointer",
                        position: "absolute",
                        right: "-3px",
                        top: "-3px",
                        zIndex: 1,
                    }}
                />
            </div>
        </LocationAPIDiv>
    );
};

export default LocationAPI;
