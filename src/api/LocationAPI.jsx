import React, { useEffect, useRef, useState } from "react";
import MiniTextBox from "../components/common/ui/MiniTextBox";
import FormButton from "../components/common/ui/FormButton";
import { LocationAPIDiv } from "../styled/api/LocaitionAPI";
import AlertModal from "../components/common/ui/AlertModal";

const LocationAPI = ({ addressData = {}, onAddressChange, setIsActive, setSubDiv }) => {
    const layerRef = useRef(null);

    const [postcode, setPostcode] = useState(addressData.postcode || "");
    const [address, setAddress] = useState(addressData.address || "");
    const [detailAddress, setDetailAddress] = useState(addressData.detailAddress || "");
    const [extraAddress, setExtraAddress] = useState(addressData.extraAddress || "");

    const [showMap, setShowMap] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false); // AlertModal

    // 주소 검색 완료 시, 상위에 addressData 전달!
    const handleCompleteAddress = (newPostcode, newAddress, newDetailAddress, newExtraAddress) => {
        if (onAddressChange) {
            onAddressChange({
                postcode: newPostcode,
                address: newAddress,
                detailAddress: newDetailAddress,
                extraAddress: newExtraAddress,
            });
        }
    };

    // 상위 전달 함수 (변경 시 자동 호출)
    useEffect(() => {
        setPostcode(addressData.postcode || "");
        setAddress(addressData.address || "");
        setDetailAddress(addressData.detailAddress || "");
        setExtraAddress(addressData.extraAddress || "");
    }, [addressData]);

    const closeDaumPostcode = () => {
        if (layerRef.current) layerRef.current.style.display = "none";
    };

    useEffect(() => {
        // 다음 주소 API 스크립트 로드
        const addressScript = document.createElement("script");
        addressScript.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        document.body.appendChild(addressScript);

        return () => {
            document.body.removeChild(addressScript);
        };
    }, []);

    // 다음 주소 API 실행
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

                handleCompleteAddress(data.zonecode, addr, "", extraAddr);
            },
            width: "100%",
            height: "100%",
            maxSuggestItems: 5,
        }).embed(elementLayer);

        elementLayer.style.display = "block";
        initLayerPosition(elementLayer);
    };

    // 다음 주소 API 레이어 위치 초기화
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

    // 지도 API 실행
    const execMapAPI = () => {
        // 도로명번호 및 주소 입력 확인
        if (!postcode || !address) {
            setAlertOpen(true);
            return;
        }
        // Kakao API 로드 여부 및 객체 정의 여부 확인
        if (!window.kakao || !window.kakao.maps) {
            alert("지도 API 준비 중입니다. 새로고침 후 다시 시도해주세요.");
            return;
        }

        // 주소 문자열 조합
        const fullAddress = `${address}`;

        setShowMap((prev) => !prev);

        // 즉시 지도 생성
        const container = document.getElementById("map");
        const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // Geocoder 객체 생성
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소 지오코딩
        geocoder.addressSearch(fullAddress, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                // 위도 : result[0].y, 경도 : result[0].x
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                // 마커 추가
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: coords,
                });

                // 중심좌표를 해당 좌표로 이동
                map.setCenter(coords);
            } else {
                alert("주소 좌표 검색에 실패했습니다.");
            }
        });
    };

    return (
        <LocationAPIDiv>
            <div className="spaceEvenly">
                <MiniTextBox width={"400px"} placeholder={"참고항목"} value={extraAddress || ""} readOnly />
                <MiniTextBox width={"600px"} placeholder={"주소"} value={address || ""} readOnly />
            </div>
            <div className="flex">
                <div className="spaceEvenly left">
                    <MiniTextBox width={"140px"} placeholder={"우편번호"} value={postcode || ""} readOnly />
                    <MiniTextBox
                        width={"300px"}
                        placeholder={"상세주소"}
                        value={detailAddress || ""}
                        onChange={(e) => {
                            const newDetail = e.target.value;
                            setDetailAddress(newDetail);
                            handleCompleteAddress(postcode, address, newDetail, extraAddress);
                        }}
                    />
                </div>
                <div className="spaceEvenly right">
                    <FormButton onClick={execDaumPostcode} text={"우편번호 찾기"} width={"150px"} height={"50px"} fontSize={"19px"} />
                    <FormButton onClick={execMapAPI} text={"지도로 보기"} width={"150px"} height={"50px"} fontSize={"19px"} />
                    <FormButton
                        onClick={() => {
                            setIsActive(false);
                            if (setSubDiv) setSubDiv(false);
                        }}
                        text={"입력"}
                        width={"150px"}
                        height={"50px"}
                        fontSize={"19px"}
                    />
                </div>
            </div>

            {/* 주소 API div */}
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

            {/* 지도 API div */}
            <div className={`mapAPI ${showMap ? "active" : ""}`}>
                <div id="map" style={{ width: "100%", height: "100%" }} />
            </div>

            {/* 모달창 */}
            <AlertModal func={"Cancel"} desc={"주소를 먼저 검색해야 합니다."} open={alertOpen} onClose={() => setAlertOpen(false)} />
        </LocationAPIDiv>
    );
};

export default LocationAPI;
