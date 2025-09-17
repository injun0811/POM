import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/*
버튼 컴포넌트
    props : 버튼 내용, 이동 경로, 가로길이(px), 세로딜길이(px)
*/

const Button = ({ desc, url, $hight, $width }) => {
    return (
        <StyledWrapper $hight={$hight} $width={$width}>
            <button className="button">
                <span className="button-content">
                    <Link to={url}>{desc}</Link>
                </span>
            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .button {
        position: relative;
        overflow: hidden;
        height: ${(props) => `${props.$hight}px`};
        padding: 0 ${(props) => `${props.$width}px`};
        border-radius: 24px;
        background: #3d3a4e;
        background-size: 400%;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    .button:hover::before {
        transform: scaleX(1);
    }

    .button-content {
        position: relative;
        z-index: 1;
    }

    .button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: 0 50%;
        width: 100%;
        height: inherit;
        border-radius: inherit;
        background: linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%);
        transition: all 0.475s;
    }
`;

export default Button;
