import styled from "styled-components";

export const LocationAPIDiv = styled.div`
    padding: 20px;

    .spaceEvenly {
        display: flex;
        justify-content: left;
    }

    .flex {
        display: flex;
    }

    .right {
        justify-content: end;
        padding-right: 70px;
        width: 100%;
    }

    .mapAPI {
        border: 2px solid rgb(141, 109, 255);
        border-radius: 20px;
        position: fixed;
        top: 26%;
        left: 37%;
        height: 430px;
        width: 43%;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    .mapAPI.active {
        opacity: 1;
        visibility: visible;
    }
`;
