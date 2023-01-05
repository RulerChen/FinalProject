import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Google  } from "react-bootstrap-icons";

import { useHook } from "../hooks/useHook";
import AuthService from "../services/auth.service";

import img from "../pics/logIn.svg";

import "../css/register.css";

const LogIn = () => {
  const { setSignedIn, setUsername, setAccount, setPoint, displayStatus } = useHook();
  const [tempAccount, setTempAccount] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    AuthService.login(tempAccount, tempPassword)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        displayStatus({ type: "success", msg: "Login succeeds" });
        setUsername(AuthService.getCurrentUser().user.username);
        setAccount(AuthService.getCurrentUser().user.email);
        setPoint(AuthService.getCurrentUser().user.point);
        setSignedIn(true);
        navigate("/");
      })
      .catch((error) => {
        displayStatus({ type: "error", msg: error.response.data });
      });
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt="img" className="img-fluid" />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>登入</h3>
                  <p className="mb-4">請輸入您的帳號密碼</p>
                </div>
                <div className="form-group first field--not-empty">
                  <label htmlFor="username">帳號</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={(e) => {
                      setTempAccount(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group last mb-4 field--not-empty">
                  <label htmlFor="password">密碼</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => {
                      setTempPassword(e.target.value);
                    }}
                  />
                </div>

                <input type="submit" value="Log In" className="btn btn-block btn-primary" onClick={handleLogin} />

                <span className="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>

                <div className="social-login">
                  <a href="http://localhost:4000/api/user/google" className="google pr-3">
                    <span className="icon-google mr-3">
                      <Google />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
