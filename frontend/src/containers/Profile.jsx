import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserOutlined, MailOutlined, KeyOutlined, PoundCircleOutlined, ShoppingCartOutlined, CrownOutlined } from "@ant-design/icons";

import { useHook } from "../hooks/useHook";
import CardService from "../services/card.service";

const Profile = () => {
  const { username, account, point } = useHook();
  const [goodbuy, setGoodbuy] = useState([]);
  const [goodsell, setGoodsell] = useState([]);

  useEffect(() => {
    if (account) {
      CardService.findHistory(account).then((response) => {
        const { buy, sell } = response.data;
        setGoodbuy(buy);
        setGoodsell(sell);
      });
    }
  });

  return (
    <div>
      <main className="container">
        <div className="d-flex align-items-center p-3 my-3 bg-light rounded shadow-sm">
          <UserOutlined className="me-3" style={{ fontSize: "2rem" }} />
          <div className="lh-1">
            <h1 className="h6 mb-0 lh-1">{username}</h1>
            <small>{account}</small>
          </div>
        </div>

        <div className="my-3 p-3 bg-light rounded shadow-sm">
          <h6 className="border-bottom pb-2 mb-0">個人資料</h6>
          <div className="d-flex text-muted pt-3">
            <CrownOutlined className="me-3" style={{ fontSize: "2rem" }} />
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark ">姓名</strong>
                <a href="#">Edit</a>
              </div>
              <span className="d-block">{username}</span>
            </div>
          </div>
          <div className="d-flex text-muted pt-3">
            <MailOutlined className="me-3" style={{ fontSize: "2rem" }} />
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">帳號</strong>
                <a href="#">Edit</a>
              </div>
              <span className="d-block">{account}</span>
            </div>
          </div>
          <div className="d-flex text-muted pt-3">
            <KeyOutlined className="me-3" style={{ fontSize: "2rem" }} />
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">密碼</strong>
                <a href="#">Edit</a>
              </div>
              <span className="d-block">******</span>
            </div>
          </div>
          <div className="d-flex text-muted pt-3">
            <PoundCircleOutlined className="me-3" style={{ fontSize: "2rem" }} />
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">點數</strong>
              </div>
              <span className="d-block">{point}</span>
            </div>
          </div>
        </div>

        <div className="my-3 p-3 bg-light rounded shadow-sm">
          <h6 className="border-bottom pb-2 mb-0">購買及刊登紀錄</h6>
          {goodsell.map((card, index) => {
            return (
              <div className="d-flex text-muted pt-3" key={index}>
                <ShoppingCartOutlined className="me-3" style={{ fontSize: "2rem" }} />
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">{card.title}</strong>
                  </div>
                  <small>帳號:{card.goodAccount}</small>
                  <br></br>
                  <small>密碼:{card.goodPassport}</small>
                  <span className="d-block">身分:賣家</span>
                </div>
              </div>
            );
          })}
          {goodbuy.map((card, index) => {
            return (
              <div className="d-flex text-muted pt-3" key={index}>
                <ShoppingCartOutlined className="me-3" style={{ fontSize: "2rem" }} />
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">{card.title}</strong>
                  </div>
                  <small>帳號:{card.goodAccount}</small>
                  <br></br>
                  <small>密碼:{card.goodPassport}</small>
                  <span className="d-block">身分:買家</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Profile;
