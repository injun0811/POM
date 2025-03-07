import styled from "styled-components";

export const AccessBtn = styled.div`
    .button {
        display: inline-block; // float 대신 inline-block 사용
        width: 120px;
        padding: 15px 0; // 패딩으로 높이 조절
        margin: 10px 20px 10px 0;
        font-weight: 600;
        text-align: center;
        color: #f5f5dc;
        background: #4caf50;
        border-radius: 5px;
        transition: all 0.5s;
        position: relative;
        top: 0; // 초기 위치
        cursor: pointer; // 커서 스타일 변경
        text-decoration: none; // 링크 밑줄 제거
    }

    .button:hover {
        color: #4caf50;
        background: #f5f5dc; // 호버 시 색상 변경
    }
`;
