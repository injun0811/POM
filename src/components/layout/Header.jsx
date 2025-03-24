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
                                {/* 나에 대해서 */}
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
                                {/* 소규모 기능 ETC */}
                                <Link to="/services/ETC">ETC</Link>
                                {/* 추 후에 해당 페이지에만 사이드바 추가
                                기능 1. 음력, 양력 변환 기능 (lunar/solar converter)
                                기능 2. 그림 파일 확장자 변환 (heic → 기타 확장자) (heicTo)
                            */}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/contact/board">Board</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </SubMenuDiv>
        </div>
    );
};

export default Header;
