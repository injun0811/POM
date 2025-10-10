import React from "react";
import { PagingButtonBtn } from "../../../styled/common/ui/PagingButton";

const PagingButton = ({ name, onClick }) => {
    return <PagingButtonBtn onClick={onClick}>{name}</PagingButtonBtn>;
};

export default PagingButton;
