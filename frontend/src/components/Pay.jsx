import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api";
const Pay = () => {
  const data = useLocation().state;
  const navigate = useNavigate();
  console.log(data);
  const {
    title,
    price,
    // detail,
    // intro,
    // url,
    // stock,
    username,
    account,
    point,
    category,
    game,
  } = data.mainData;
  const { number } = data;
  const payHandler = async () => {
    // const {
    //     data: { cardData },
    //   } = await axios.get("/cards", {
    //     params: {
    //       game,
    //     },
    //   });
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
                <h4 className="text-success">{`NT$ ${price}`}</h4>
                <h4>{title}</h4>
                {category === "點數卡" && <h4>{`${game}點數卡 ${point} 點`}</h4>}
                <div>數量: {number}</div>
                <div className="rounded d-flex" style={{ backgroundColor: "#f8f9fa" }}></div>
                <hr />
                <div className="p-2">
                  賣家: {username}&emsp;&emsp;&emsp;&emsp;gmail: {account}
                </div>
                <hr />
                <div className="pt-2">
                  <div className="d-flex pb-2">
                    <div>
                      <b>
                        帳戶餘額:
                        <span className="text-success">{` $NT ${"[todo]"}`}</span>
                      </b>
                    </div>
                    <div className="ms-auto"></div>
                  </div>
                  <br />
                  <input type="button" defaultValue="付款" className="btn btn-primary btn-block btn-lg" onClick={payHandler} />
                </div>
              </div>
              <div className="col-md-5 col-xl-4 offset-xl-1">
                <div className="py-4 d-flex justify-content-end">
                  <button className="btn btn-secondary btn-sm active" onClick={() => navigate(-1)}>
                    取消並回前頁
                  </button>
                </div>
                <div className="rounded d-flex flex-column p-2" style={{ backgroundColor: "#f8f9fa" }}>
                  <div className="p-2 me-3">
                    <h4>訂單</h4>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">定價</div>
                    <div className="ms-auto">$NT {price}</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">數量</div>
                    <div className="ms-auto">{number}</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">小計</div>
                    <div className="ms-auto">$NT {price * number}</div>
                  </div>
                  <div className="border-top px-2 mx-2" />
                  <div className="p-2 d-flex">
                    <div className="col-8">折價</div>
                    <div className="ms-auto">$NT -0</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">手續費( 0.1% )</div>
                    <div className="ms-auto">$NT +{Math.floor(0.1 * price)}</div>
                  </div>

                  <div className="border-top px-2 mx-2" />
                  <div className="p-2 d-flex pt-3">
                    <div className="col-8">
                      <b>Total</b>
                    </div>
                    <div className="ms-auto">
                      <b className="text-success">$NT {price + Math.floor(0.1 * price)}</b>
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