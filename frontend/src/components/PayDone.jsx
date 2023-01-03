import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useHook } from "../hooks/useHook";

const PayDone = () => {
  const data = useLocation().state;
  const navigate = useNavigate();
  console.log(data);
  const { goodAccount, goodPassword, point } = data;
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="card">
          <div className="card-body">
            <div className="row d-flex justify-content-center pb-5">
              <div className="py-4 d-flex justify-content-end">
                <button
                  className="btn btn-secondary btn-sm active"
                  onClick={() => navigate("/")}
                >
                  回到頁面
                </button>
              </div>
              <div className="col-md-7 col-xl-5 mb-4 mb-md-0">
                <div className="py-4 d-flex flex-row"></div>
                <h4 className="text-success text-center">{`交易成功 `}</h4>
                <div
                  className="rounded d-flex"
                  style={{ backgroundColor: "#f8f9fa" }}
                ></div>
                <hr />
                <div className="p-2">商品帳號: {goodAccount}</div>
                <div className="p-2">商品密碼: {goodPassword}</div>
                <hr />
                <div className="pt-2">
                  <div className="d-flex pb-2">
                    <div>
                      <b>
                        帳戶餘額:
                        <span className="text-success">{` $NT ${point}`}</span>
                      </b>
                    </div>
                    <div className="ms-auto"></div>
                  </div>
                  <br />
                </div>
              </div>
              {/* <div className="col-md-5 col-xl-4 offset-xl-1">
                <div
                  className="rounded d-flex flex-column p-2"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="p-2 me-3">
                    <h4>訂單</h4>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">定價</div>
                    <div className="ms-auto">$NT </div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">數量</div>
                    <div className="ms-auto"></div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">小計</div>
                    <div className="ms-auto">$NT </div>
                  </div>
                  <div className="border-top px-2 mx-2" />
                  <div className="p-2 d-flex">
                    <div className="col-8">折價</div>
                    <div className="ms-auto">$NT -0</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">手續費</div>
                    <div className="ms-auto">$NT </div>
                  </div>

                  <div className="border-top px-2 mx-2" />
                  <div className="p-2 d-flex pt-3">
                    <div className="col-8">
                      <b>Total</b>
                    </div>
                    <div className="ms-auto">
                      <b className="text-success">$NT </b>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayDone;
