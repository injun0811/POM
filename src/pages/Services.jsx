import React from "react";
import { Outlet } from "react-router-dom";
import { ServiceDiv } from "../styled/page/Services";
import { HoldingHeaderDiv } from "../styled/common/HoldingHeader";

const Services = () => {
    return (
        <ServiceDiv>
            <HoldingHeaderDiv>
                <div className="inner">
                    <Outlet />
                </div>
            </HoldingHeaderDiv>
        </ServiceDiv>
    );
};

export default Services;
