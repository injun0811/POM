import styled from "styled-components";

export const AlertModalDiv = styled.div`
    left: 50%;
    top: 50%;
    width: 400px;
    transform: translate(-50%, -50%);

    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    position: fixed;
    transition: opacity 0.5s ease, visibility 0.5s ease;

    .modern-success-message {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        background: linear-gradient(135deg, ${({ $color1 }) => $color1}, ${({ $color2 }) => $color2});
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        color: white;
        font-family: "Poppins", sans-serif;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .modern-success-message:hover {
        transform: scale(1.05);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    }

    .close-btn {
        position: absolute;
        top: 12px;
        right: 20px;
        background: none;
        border: none;
        font-size: 30px;
        color: white;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.3s;
    }

    .close-btn:hover {
        opacity: 1;
    }

    .icon-wrapper {
        background-color: rgba(255, 255, 255, 0.15);
        padding: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .success-icon {
        width: 40px;
        height: 40px;
    }

    .text-wrapper .modalTitle {
        text-align: left;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1.2px;
        text-transform: uppercase;
    }

    .text-wrapper .message {
        margin-top: 6px;
        font-size: 14px;
        opacity: 0.85;
    }

    .modern-success-message::before {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        transform: rotate(45deg);
        transition: all 0.5s ease-in-out;
    }

    .modern-success-message:hover::before {
        transform: rotate(90deg);
        opacity: 0.5;
    }
`;
