import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useHook } from "../hooks/useHook";
import AuthService from "../services/auth.service";

const Pay = () => {
  const data = useLocation().state;
  const navigate = useNavigate();
  const { point, setPoint, displayStatus } = useHook();
  const { title, price, category, game, cardPoint, _id } = data.mainData;
  const buyerAccount = useHook().account;
  const sellerAccount = data.mainData.account;
  const sellerUsername = data.mainData.username;
  const feeRatio = 0.01;
  const buyerPay = price + Math.floor(feeRatio * price);
  const fee = Math.ceil(feeRatio * price);
  const sellerGain = buyerPay - fee;
  const payHandler = async () => {
    if (buyerAccount === sellerAccount) {
      displayStatus({ type: "error", msg: "這是您所上架的商品" });
    }
    else if (point < price + Math.floor(feeRatio * price)) {
      displayStatus({ type: "error", msg: "餘額不足" });
    } else {
      await AuthService.pay(
        buyerAccount,
        sellerAccount,
        buyerPay,
        sellerGain,
        fee,
        _id
      ).then((response) => {
        const BuyerPointLeft = response.data.buyer.point;
        const { goodAccount, goodPassword } = response.data;
        setPoint(BuyerPointLeft);
        navigate("/payment_completed", {
          state: { point: BuyerPointLeft, goodAccount, goodPassword },
        });
      });
    }
  };
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="card">
          <div className="card-body">
            <div className="row d-flex justify-content-center pb-5">
              <div className="col-md-7 col-xl-5 mb-4 mb-md-0">
                <div className="py-4 d-flex flex-row">
                  <h5>
                    <span className="far fa-check-square pe-2" />
                  </h5>
                  <span className="ps-2">| Pay</span>
                </div>
                <h4 className="text-success">{`NT$ ${buyerPay}`}</h4>
                <h4>{title}</h4>
                {category === "點數卡" && (
                  <h4>{`${game}點數卡 ${cardPoint} 點`}</h4>
                )}
                <div
                  className="rounded d-flex"
                  style={{ backgroundColor: "#f8f9fa" }}
                ></div>
                <hr />
                <div className="p-2">
                  賣家: {sellerUsername}&emsp;&emsp;&emsp;&emsp;gmail:{" "}
                  {sellerAccount}
                </div>
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
                  <input
                    type="button"
                    defaultValue="付款"
                    className="btn btn-primary btn-block btn-lg"
                    onClick={payHandler}
                  />
                </div>
              </div>
              <div className="col-md-5 col-xl-4 offset-xl-1">
                <div className="py-4 d-flex justify-content-end">
                  <button
                    className="btn btn-secondary btn-sm active"
                    onClick={() => navigate(-1)}
                  >
                    取消並回前頁
                  </button>
                </div>
                <div
                  className="rounded d-flex flex-column p-2"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="p-2 me-3">
                    <h4>訂單</h4>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">定價</div>
                    <div className="ms-auto">$NT {price}</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">數量</div>
                    <div className="ms-auto">{1}</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">小計</div>
                    <div className="ms-auto">$NT {price}</div>
                  </div>
                  <div className="border-top px-2 mx-2" />
                  <div className="p-2 d-flex">
                    <div className="col-8">折價</div>
                    <div className="ms-auto">$NT -0</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">手續費({feeRatio * 100}% )</div>
                    <div className="ms-auto">$NT +{fee}</div>
                  </div>

                  <div className="border-top px-2 mx-2" />
                  <div className="p-2 d-flex pt-3">
                    <div className="col-8">
                      <b>Total</b>
                    </div>
                    <div className="ms-auto">
                      <b className="text-success">$NT {buyerPay}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pay;
