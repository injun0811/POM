import React from "react";
import { UserDiv } from "../../styled/page/User";
import { HoldingHeaderDiv } from "../../styled/common/HoldingHeader";

const Admin = () => {
    return (
        <UserDiv>
            <HoldingHeaderDiv>
                <div className="inner">
                    <h1>Admin Page</h1>
                </div>
            </HoldingHeaderDiv>
        </UserDiv>
    );
};

export default Admin;
