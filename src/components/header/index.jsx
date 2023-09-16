import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import imgLogo1 from "../../img/WATCHA_Logo_Main.svg";

function Header() {
  return (
    <>
      <div className="header_container">
        <div className="header_logo_container">
          <img src={imgLogo1} alt="logo_image" />
        </div>
        <div className="header_navbar_container">
          <ul>
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/movielist">
              <span>Movie</span>
            </Link>
            <Link>
              <span>FAQ</span>
            </Link>
          </ul>
        </div>
        <div className="header_welcome_container">
          <ul>
            <Link to='/login'>
              <li>로그인</li>
            </Link>
            <Link to='/register'>
              <li>회원가입</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
