import React from "react";
import styled from "styled-components";

const SVG = () => {
    return (
        <StyledWrapper>
            <div className="loader" />
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .loader {
        width: 80px;
        height: 80px;
        background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
        animation: spin 3s infinite;
    }

    .loader::before {
        content: "";
        z-index: -1;
        position: absolute;
        inset: 0;
        background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
        transform: translate3d(0, 0, 0) scale(0.95);
        filter: blur(20px);
    }

    @keyframes spin {
        0% {
            transform: rotate(-45deg);
        }

        50% {
            transform: rotate(-360deg);
            border-radius: 50%;
        }

        100% {
            transform: rotate(-45deg);
        }
    }
`;

export default SVG;
