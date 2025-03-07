import React from "react";
import { ContactDiv } from "../styled/page/Contact";
import { HoldingHeaderDiv } from "../styled/common/HoldingHeader";

const Contact = () => {
    return (
        <ContactDiv>
            <HoldingHeaderDiv>
                <div className="inner">
                    <h1>Contact Page</h1>
                </div>
            </HoldingHeaderDiv>
        </ContactDiv>
    );
};

export default Contact;
