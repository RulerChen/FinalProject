import React from "react";
import { Link } from "react-router-dom";

import logo from "../pics/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top" />
          8592 寶物交易網
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                首頁
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                線上遊戲
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="">
                    新楓之谷
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    英雄聯盟LOL
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    魔獸世界
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                手機遊戲
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="">
                    Garena 傳說對決
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    神魔之塔
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    怪物彈珠
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                關於我們
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav me-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="">
                註冊
              </a>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link active">
                登入
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
