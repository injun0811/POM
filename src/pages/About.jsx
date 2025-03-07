import React from "react";
import { MainDiv } from "../styled/page/About";
import { HoldingHeaderDiv } from "../styled/common/HoldingHeader";

const About = () => {
    return (
        <MainDiv>
            <HoldingHeaderDiv>
                <div className="inner">
                    <h1>About Page</h1>
                </div>
            </HoldingHeaderDiv>
        </MainDiv>
    );
};

export default About;
