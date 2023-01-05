import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useHook } from "../hooks/useHook";
import AuthService from "../services/auth.service";

import img from "../pics/logIn.svg";

import "../css/register.css";

const Register = () => {
  const { displayStatus } = useHook();
  const [username, setUsername] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    AuthService.register(username, account, password)
      .then(() => {
        console.log("Registeration succeeds");
        displayStatus({ type: "success", msg: "Registeration succeeds" });
        navigate("/login");
      })
      .catch((e) => {
        console.log(e.response);
        displayStatus({ type: "error", msg: e.response.data });
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
                  <h3>註冊</h3>
                  <p className="mb-4">成為買家或賣家</p>
                </div>

                <div className="form-group  first field--not-empty">
                  <label htmlFor="name">姓名</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group  field--not-empty">
                  <label htmlFor="username">電子郵件</label>
                  <input
                    type="email"
                    className="form-control"
                    id="username"
                    onChange={(e) => {
                      setAccount(e.target.value);
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
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                {/* <div className="form-group last mb-4 field--not-empty">
                  <label htmlFor="passwordTwo">再次輸入密碼</label>
                  <input type="password" className="form-control" id="passwordTwo" />
                </div> */}

                <input type="submit" value="Regist" className="btn btn-block btn-primary" onClick={handleRegister} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
