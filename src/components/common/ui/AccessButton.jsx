import React from "react";
import { AccessBtn } from "../../../styled/common/ui/AccessButton";

const AccessButton = ({ onClick }) => {
    return (
        <AccessBtn>
            <a className="button" onClick={onClick}>
                Push
            </a>
        </AccessBtn>
    );
};

export default AccessButton;
