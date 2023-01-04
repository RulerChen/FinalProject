import { message } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useHook } from "../hooks/useHook";
const Detail = () => {
  const { id } = useParams(); //card _id
  const navigate = useNavigate();
  const { displayStatus, signedIn } = useHook();
  const renderCount = useRef(1);
  const mainData = useLocation().state;
  console.log(mainData);
  const { title, price, detail, intro, url, username, account, cardPoint } = mainData;
  const clickBuyhandler = () => {
    if (signedIn === false) displayStatus({ type: "error", msg: `請先登入!` });
    // else if (renderCount.current > stock) displayStatus({ type: "error", msg: `庫存不足，只剩${stock}件!` });
    else navigate(`/Pay/${id}`, { state: { mainData, number: renderCount.current } });
  };
  return (
    <>
      {/* Navigation*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
      {/* Product section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0" src={url} alt="..." />
            </div>
            <div className="col-md-6">
              <p>
                {`seller: ${username}`}&ensp;&ensp; {`account: ${account}`}
              </p>

              <h1 className="display-5 fw-bolder">{title}</h1>
              <div className="fs-5 mb-5">
                <span>{`NT$ ${price}`}</span>
              </div>
              <h4 className="lead">{intro}</h4>
              <p className="lead">{detail}</p>
              <button className="btn btn-outline-dark flex-shrink-0 mt-2" type="button" onClick={clickBuyhandler}>
                <i className="bi-cart-fill me-1" />
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Related items section*/}

      {/* Footer*/}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Website 2023</p>
        </div>
      </footer>
      {/* Bootstrap core JS*/}
      {/* Core theme JS*/}
    </>
  );
};

export default Detail;
