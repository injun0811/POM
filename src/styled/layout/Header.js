import styled from "styled-components";

export const HeaderDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: rgb(198, 240, 181);
    z-index: 1000;
    display: flex;
    justify-content: center;

    .inner {
        width: 70%;
        max-width: 1200px;
        height: 100%;
        padding: 20px 20px 0 20px;
        background: white;
    }

    .LogoSection {
        position: absolute;
        padding-top: 20px;
        img {
            height: 80px;
            cursor: pointer;
        }
    }

    nav {
        height: 85%;
        align-content: center;
        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 헤더 메뉴 항목 개수만큼 반복 */
            justify-items: center; /* 각 항목을 가운데 정렬 */
            li {
                position: relative; /* 중메뉴와 연결을 위한 상대 위치 */
                a {
                    font-size: 1.5rem;
                    text-decoration: none;
                    color: #333;
                    padding: 30px 20px; /* 클릭 가능한 영역 확장 */
                    display: inline-block; /* padding 적용을 위해 inline-block 사용 */
                    transition: color 0.3s ease-in-out;

                    &:hover {
                        color: #007bff; /* hover 시 색상 변경 */
                    }
                }
            }
        }
    }

    .AuthSection {
        display: flex;
        gap: 1rem;
        justify-content: end;
        a {
            text-decoration: none;
            color: #333;
        }
    }
`;

export const SubMenuDiv = styled.div`
    position: fixed;
    top: 120px;
    left: 0;
    right: 0;
    //height: ${(props) => (props.$isHovered ? "auto" : "0")};
    max-height: ${(props) => (props.$isHovered ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    display: flex;
    justify-content: center;

    .inner {
        width: 70%;
        max-width: 1200px;
        padding: 20px 20px 0 20px;
        background: white;
        opacity: ${(props) => (props.$isHovered ? "1" : "0")}; /* 투명도 추가 */
        transition: opacity 0.3s ease-in-out; /* 컨텐츠 페이드 효과 */
    }

    .submenu-container {
        display: flex;
        justify-content: center;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33.33%; // 3등분
        transform: ${(props) => (props.$isHovered ? "translateY(0)" : "translateY(-10px)")};
        transition: transform 0.3s ease-in-out; /* 추가적인 움직임 효과 */
    }

    li {
        padding: 15px 0;
        font-size: 1.2rem;
        text-align: center;
        opacity: ${(props) => (props.$isHovered ? "1" : "0")};
        transition: opacity 0.2s ease-in-out; /* 개별 항목 페이드 효과 */

        a {
            text-decoration: none;
            color: #333;
        }
    }
`;
