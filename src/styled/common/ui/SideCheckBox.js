import styled from "styled-components";

export const SideCheckBoxDiv = styled.div`
    .checkbox-container {
        display: flex;
        gap: 20px;
        padding: 10px;
        background: #f8fafc;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    }

    .ios-checkbox {
        --checkbox-size: 28px;
        --checkbox-color: ${({ color }) => color};
        --checkbox-bg: #dbeafe;
        --checkbox-border: #93c5fd;

        display: flex;
        align-items: center;
        position: relative;
        // display: inline-block;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    .ios-checkbox input {
        display: none;
    }

    .checkbox-wrapper {
        position: relative;
        width: var(--checkbox-size);
        height: var(--checkbox-size);
        border-radius: 8px;
        transition: transform 0.2s ease;
    }

    .checkbox-bg {
        position: absolute;
        inset: 0;
        border-radius: 8px;
        border: 2px solid var(--checkbox-border);
        background: white;
        transition: all 0.2s ease;
    }

    .checkbox-icon {
        position: absolute;
        inset: 0;
        margin: auto;
        width: 80%;
        height: 80%;
        color: white;
        transform: scale(0);
        transition: all 0.2s ease;
    }

    .check-path {
        strokedasharray: 40;
        strokedashoffset: 40;
        transition: strokeDashoffset 0.3s ease 0.1s;
    }

    /* Checked State */
    .ios-checkbox input:checked + .checkbox-wrapper .checkbox-bg {
        background: var(--checkbox-color);
        border-color: var(--checkbox-color);
    }

    .ios-checkbox input:checked + .checkbox-wrapper .checkbox-icon {
        transform: scale(1);
    }

    .ios-checkbox input:checked + .checkbox-wrapper .check-path {
        strokedashoffset: 0;
    }

    /* Hover Effects */
    .ios-checkbox:hover .checkbox-wrapper {
        transform: scale(1.05);
    }

    /* Active Animation */
    .ios-checkbox:active .checkbox-wrapper {
        transform: scale(0.95);
    }

    /* Focus Styles */
    .ios-checkbox input:focus + .checkbox-wrapper .checkbox-bg {
        box-shadow: 0 0 0 4px var(--checkbox-bg);
    }

    /* Animation */
    @keyframes bounce {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }

    .ios-checkbox input:checked + .checkbox-wrapper {
        animation: bounce 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
