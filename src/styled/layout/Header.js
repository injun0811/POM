import styled from "styled-components";

export const HeaderDiv = styled.div`
    height: 150px;
    background: rgb(198, 240, 181);
    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
        height: 150px;
        width: 70%;
        max-width: 1200px;
        padding: 20px;
        text-align: center;
        background: white;
    }

    img {
        position: absolute;
        height: 80px;
        margin: 35px 10px 10px 10px;
        cursor: pointer;
    }

    nav {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        justify-content: center;
        display: flex;

        li {
            padding: 0 30px;

            a {
                font-size: 1.2rem;
                text-decoration: none;
                color: #333;
            }
        }
    }

    .LogoSection {
        position: absolute;
    }

    .AuthSection {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }
`;
