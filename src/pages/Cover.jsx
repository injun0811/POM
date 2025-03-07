import React from "react";
import { useNavigate } from "react-router-dom";
import AccessButton from "../components/AccessButton";
import { CoverContainer } from "../styled/Cover";

const Cover = () => {
    const navigate = useNavigate();

    const handleAccess = () => {
        navigate("/pom");
    };

    return (
        <CoverContainer>
            <AccessButton onClick={handleAccess} />
        </CoverContainer>
    );
};

export default Cover;
