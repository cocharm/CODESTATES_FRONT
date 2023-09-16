import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__content-logo">
          <Link to="/">
            {/* <img src="../../assets/Logo.svg" alt=" tmdb logo" /> */}
          </Link>
        </div>
        <div className="footer__content-menus">
          <div className="footer__content-menu">
            <Link to="https://github.com/FranzCho">조성민</Link>
            <Link to="https://github.com/cchaeyoung">김채영</Link>
            <Link to="https://github.com/cocharm">이동원</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
