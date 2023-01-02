import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { useHook } from "../hooks/useHook";
import AuthService from "../services/auth.service";

import logo from "../pics/logo.png";

const NavBar = () => {
  const { signedIn, setSignedIn, username, displayStatus } = useHook();
  const onlineGame = ["新楓之谷", "英雄聯盟LOL", "Valorant"];
  const mobileGame = ["Garena傳說對決", "神魔之塔", "怪物彈珠"];
  const navigate = useNavigate();

  const handleLogout = () => {
    setSignedIn(false);
    AuthService.logout();
    displayStatus({ type: "success", msg: "Logout succeeds" });
    navigate("/");
  };
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
                {onlineGame.map((e) => (
                  <li key={e}>
                    <Link to={`/store/${e}`} className="dropdown-item">
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                手機遊戲
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {mobileGame.map((e) => (
                  <li key={e}>
                    <Link to={`/store/${e}`} className="dropdown-item">
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                關於我們
              </Link>
            </li>
          </ul>

          {signedIn ? (
            <ul className="navbar-nav mb-lg-0 mb-2" style={{ marginRight: "10rem" }}>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {username}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      個人資料
                    </Link>
                  </li>
                  <li>
                    <Link to="/addCard" className="dropdown-item">
                      刊登商品
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="dropdown-item" onClick={handleLogout}>
                      登出
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginRight: "10rem" }}>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  註冊
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  登入
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
