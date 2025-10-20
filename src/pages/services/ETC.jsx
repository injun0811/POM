import React from "react";
import { ETCDiv } from "../../styled/services/ETC";
import IconButton from "../../components/common/ui/IconButton";

const ETC = () => {
    return (
        <ETCDiv>
            <h1>소규모 기능</h1>
            <h2>ETC</h2>

            <IconButton func={"Download"}></IconButton>
            <IconButton func={"Delete"}></IconButton>
            <IconButton func={"Cancel"}></IconButton>
            <IconButton func={"Update"}></IconButton>
            <IconButton func={"Reset"}></IconButton>
            <IconButton func={"Save"}></IconButton>
        </ETCDiv>
    );
};

export default ETC;
