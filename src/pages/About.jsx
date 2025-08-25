import React from "react";
import { Outlet } from "react-router-dom";
import { MainDiv } from "../styled/page/About";
import { HoldingHeaderDiv } from "../styled/common/HoldingHeader";

const About = () => {
    return (
        <MainDiv>
            <HoldingHeaderDiv>
                <div className="inner">
                    <Outlet />
                </div>
            </HoldingHeaderDiv>
        </MainDiv>
    );
};

export default About;
