import React from "react";
import { useNavigate } from "react-router-dom";
import AccessButton from "../components/AccessButton";
import { CoverContainer } from "../styled/Cover";
import { HoldingHeaderDiv } from "../styled/common/HoldingHeader";

const Cover = () => {
    const navigate = useNavigate();

    const handleAccess = () => {
        navigate("/pom");
    };

    return (
        <CoverContainer>
            <HoldingHeaderDiv>
                <div className="inner">
                    <h1>Cover Page</h1>
                    <AccessButton onClick={handleAccess} />
                </div>
            </HoldingHeaderDiv>
        </CoverContainer>
    );
};

export default Cover;
