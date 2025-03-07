import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { HeaderDiv } from "../../styled/layout/Header";

const Header = () => {
    return (
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
    );
};

export default Header;
