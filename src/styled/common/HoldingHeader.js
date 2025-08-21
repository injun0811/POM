import styled from "styled-components";
import { mediaQueries } from "../breakpoints";

export const HoldingHeaderDiv = styled.div`
    min-height: 700px;
    background: var(--main-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .inner {
        flex: 1;
        //width: 70%;
        width: 1200px;
        max-width: 1200px;
        padding: 20px;
        text-align: center;
        background: white;
    }

    h1 {
        // 320px 보다 적을 경우
        font-size: 16px;

        ${mediaQueries("mobile")} {
            font-size: 20px;
        }

        ${mediaQueries("tablet")} {
            font-size: 26px;
        }

        ${mediaQueries("laptop")} {
            font-size: 32px;
        }

        ${mediaQueries("desktop")} {
            font-size: 40px;
        }

        ${mediaQueries("largeDesktop")} {
            font-size: 48px;
        }
    }
`;
