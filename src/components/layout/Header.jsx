import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderDiv, SubMenuDiv } from "../../styled/layout/Header";
import SVG from "../SVG";
import Button from "../../components/common/ui/MechanicalButton";

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <HeaderDiv>
                <div className="inner">
                    <div className="LogoSection">
                        <Link to="/">
                            <SVG />
                        </Link>
                    </div>
                    <div className="AuthSection">
                        <Button desc={"Signup"} url={"/signup"} $height={"40"} $width={"26"} />
                        <Button desc={"Login"} url={"/login"} $height={"40"} $width={"26"} />
                        {/* <Button desc={"Admin"} url={"/admin"} $height={"3"} $width={"2"} /> */}
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/about/intro" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    Set me up
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/guideline" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact/board" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    Contact
                                </Link>
                            </li>
                            {/* <li>
                            <Link to="/"></Link>
                        </li> */}
                        </ul>
                    </nav>
                </div>
            </HeaderDiv>
            <SubMenuDiv $isHovered={isHovered} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="inner">
                    <div className="submenu-container">
                        <ul>
                            <li>
                                {/* 웹 사이트 소개 */}
                                <Link to="/about/intro">Intro</Link>
                            </li>
                            <li>
                                {/* 제작자 소개 */}
                                <Link to="/about/aboutMe">About Me</Link>
                            </li>
                            <li>
                                {/* 개발 이력 */}
                                <Link to="/about/career">Career</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {/* service (기능)에 대한 간단한 가이드 */}
                                <Link to="/services/guideline">GuideLine</Link>
                            </li>
                            <li>
                                {/* 가계부 household account book */}
                                <Link to="/services/HAB">HAB</Link>
                            </li>
                            <li>
                                {/* 식비 관리 food cost management */}
                                <Link to="/services/FCM">FCM</Link>
                            </li>
                            <li>
                                {/* 휴가 관리 vacation management */}
                                <Link to="/services/VM">VM</Link>
                            </li>
                            <li>
                                {/* 일정 관리 schedule management */}
                                <Link to="/services/SM">SM</Link>
                            </li>
                            <li>
                                {/* 소규모 기능 ETC */}
                                <Link to="/services/ETC">ETC</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {/* 간단 게시판 */}
                                <Link to="/contact/board">Board</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </SubMenuDiv>
        </>
    );
};

export default Header;
