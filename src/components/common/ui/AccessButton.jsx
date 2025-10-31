import React from "react";
import { AccessBtn } from "../../../styled/common/ui/AccessButton";

// Button 컴포넌트 (바인딩 변수)

// onClick : 클릭여부

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
