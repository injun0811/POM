import styled from "styled-components";

export const HeaderDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: rgb(198, 240, 181);
    z-index: 1000;
    display: flex;
    justify-content: center;

    .inner {
        width: 70%;
        max-width: 1200px;
        height: 100%;
        padding: 20px;
        background: white;
    }

    .LogoSection {
        position: absolute;
        img {
            height: 80px;
            cursor: pointer;
        }
    }

    nav {
        height: 70%;
        align-content: center;
        ul {
            display: flex;
            justify-content: center;
            li {
                padding: 0 30px;
                a {
                    font-size: 1.2rem;
                    text-decoration: none;
                    color: #333;
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
    top: 150px; // HeaderDiv의 높이와 동일
    left: 0;
    right: 0;
    height: ${(props) => (props.isHovered ? "100px" : "0")};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    background: rgb(198, 240, 181);
    z-index: 999; // HeaderDiv보다 낮은 z-index
    display: flex;
    justify-content: center;

    .inner {
        width: 70%;
        max-width: 1200px;
        height: 100%;
        padding: 20px;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    li a {
        text-decoration: none;
        color: #333;
    }
`;
