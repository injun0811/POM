import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { HeaderDiv, SubMenuDiv } from "../../styled/layout/Header";

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <HeaderDiv>
                <div className="inner">
                    <div className="LogoSection">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="AuthSection">
                        <Link to="/signup">회원가입</Link>
                        <Link to="/login">로그인</Link>
                        <Link to="/admin">관리자</Link>
                    </div>
                    <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <ul>
                            <li>
                                <Link to="/about">소개</Link>
                            </li>
                            <li>
                                <Link to="/services">서비스</Link>
                            </li>
                            <li>
                                <Link to="/contact">문의</Link>
                            </li>
                            {/* <li>
                            <Link to="/"></Link>
                        </li> */}
                        </ul>
                    </nav>
                </div>
            </HeaderDiv>
            <SubMenuDiv isHovered={isHovered} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="inner">
                    <ul>
                        <li>
                            <Link to="/about/intro">Intro</Link>
                        </li>
                        <li>
                            <Link to="/services/test1">Test1</Link>
                        </li>
                        <li>
                            <Link to="/contact/test2">Test2</Link>
                        </li>
                    </ul>
                </div>
            </SubMenuDiv>
        </div>
    );
};

export default Header;
