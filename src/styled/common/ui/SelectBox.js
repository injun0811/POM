import styled from "styled-components";

export const SelectBoxDiv = styled.div`
    position: relative;
    width: 120px;
    height: 50px;
    margin: 5px;
    padding: 10px;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        position: absolute;
        background: #fff;
        border: 1px solid #ddd;
        width: 100%;
        z-index: 2;
        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: flex-start;
        font-family: "Ek Mukta";
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 4px;
        background: #1d1f20;
    }

    h1 {
        margin-top: 10vh;
        font-size: 2.5rem;
        max-width: 500px;
        letter-spacing: 3px;
        text-align: center;
        line-height: 1.5;
        font-family: "Open Sans";
        text-transform: capitalize;
        font-weight: 800;
        color: white;

        span {
            color: #ff908b;
        }
    }

    .chosenValue {
        font-family: "Ek Mukta";
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        height: 50px;
        font-size: 18px;
        padding: 5px;
        background-color: #fafcfd;
        border: 3px solid transparent;
        transition: 0.3s ease-in-out;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        &::-webkit-input-placeholder {
            color: #333;
        }

        &:hover {
            background-color: #ff908b;
            cursor: pointer;

            &::-webkit-input-placeholder {
                color: #333;
            }
        }

        &:focus,
        &.open {
            box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
            outline: 0;
            background-color: #ff908b;
            color: #000;

            &::-webkit-input-placeholder {
                color: #000;
            }
        }
    }

    .valueList {
        list-style: none;
        margin-top: 50px;
        box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        max-height: 0;
        transition: 0.3s ease-in-out;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        &.open {
            max-height: 320px;
            overflow: auto;
        }

        li {
            list-style: none;
            padding: 5px 10px;

            position: relative;
            height: 50px;
            background-color: #fafcfd;
            // padding: 16px;
            font-size: 18px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s;
            opacity: 1;

            &:hover {
                background-color: #ff908b;
            }

            &.closed {
                max-height: 0;
                overflow: hidden;
                padding: 0;
                opacity: 0;
            }
        }
    }
`;
