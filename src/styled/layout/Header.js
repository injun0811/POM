import styled from "styled-components";

export const HeaderDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 140px;
    z-index: 1000;
    display: flex;
    justify-content: center;

    .inner {
        width: 70%;
        max-width: 1200px;
        height: 100%;
        padding: 20px 0 0 0;
    }

    .LogoSection {
        padding: 10px 0 0 10px;
        position: absolute;
        img {
            height: 80px;
            cursor: pointer;
        }
    }

    nav {
        width: 100%;
        align-content: center;
        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 헤더 메뉴 항목 개수만큼 반복 */
            justify-items: center; /* 각 항목을 가운데 정렬 */
            li {
                position: relative; /* 중메뉴와 연결을 위한 상대 위치 */
                a {
                    font-size: 24px;
                    text-decoration: none;
                    color: white;
                    padding: 30px 20px; /* 클릭 가능한 영역 확장 */
                    display: inline-block; /* padding 적용을 위해 inline-block 사용 */
                    transition: color 0.3s ease-in-out;
                }
            }
        }
    }

    .AuthSection {
        display: flex;
        gap: 26px;
        justify-content: end;
        a {
            text-decoration: none;
            color: var(--main-border);
        }
    }
`;

export const SubMenuDiv = styled.div`
    position: fixed;
    top: 140px;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;

    .inner {
        width: 70%;
        max-width: 1200px;
        padding: ${(props) => (props.$isHovered ? "20px 20px 0 20px" : "0")};
        background: white;
        max-height: ${(props) => (props.$isHovered ? "500px" : "0")};
        opacity: ${(props) => (props.$isHovered ? "1" : "0")};
        overflow: hidden;
        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
    }

    .submenu-container {
        display: flex;
        justify-content: center;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33.33%;
        transform: translateY(${(props) => (props.$isHovered ? "0" : "-10px")});
        transition: transform 0.3s ease-in-out;
    }

    li {
        padding: ${(props) => (props.$isHovered ? "15px 0" : "0")};
        font-size: ${(props) => (props.$isHovered ? "19px" : "0")};
        text-align: center;
        opacity: ${(props) => (props.$isHovered ? "1" : "0")};
        transition: opacity 0.2s ease-in-out;

        a {
            text-decoration: none;
            color: var(--main-border);
            pointer-events: ${(props) => (props.$isHovered ? "auto" : "none")};
        }
    }
`;
