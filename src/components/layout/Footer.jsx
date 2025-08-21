import React from "react";
import { FooterDiv } from "../../styled/layout/Footer";
import { Background } from "../../styled/Global";

const Footer = () => {
    return (
        <FooterDiv>
            <Background>
                <div className="inner">
                    <h1>Footer</h1>
                </div>
            </Background>
        </FooterDiv>
    );
};

export default Footer;
