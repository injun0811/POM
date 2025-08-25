import React from "react";
import { Outlet } from "react-router-dom";
import { ContactDiv } from "../styled/page/Contact";
import { HoldingHeaderDiv } from "../styled/common/HoldingHeader";

const Contact = () => {
    return (
        <ContactDiv>
            <HoldingHeaderDiv>
                <div className="inner">
                    <Outlet />
                </div>
            </HoldingHeaderDiv>
        </ContactDiv>
    );
};

export default Contact;
