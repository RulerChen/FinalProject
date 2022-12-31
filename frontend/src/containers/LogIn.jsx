import React from "react";
import { Google, Facebook } from "react-bootstrap-icons";

import { useHook } from "../hooks/useHook";

import "../css/register.css";
import img from "../pics/logIn.svg";

const LogIn = () => {
  const { setSignedIn } = useHook();

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt="Image" className="img-fluid" />
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
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group last mb-4 field--not-empty">
                  <label htmlFor="password">密碼</label>
                  <input type="password" className="form-control" id="password" />
                </div>

                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-primary"
                  onClick={(e) => {
                    setSignedIn(true);
                  }}
                />

                <span className="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>

                <div className="social-login">
                  <a href="#" className="facebook pr-3">
                    <span className="icon-facebook mr-3">
                      <Facebook />
                    </span>
                  </a>
                  <a href="#" className="google pr-3">
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
