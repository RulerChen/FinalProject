import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHook } from "../hooks/useHook";
import { UserOutlined, MailOutlined, KeyOutlined, PoundCircleOutlined, ShoppingCartOutlined, CrownOutlined } from "@ant-design/icons";

const Profile = () => {
  const { username, account, point } = useHook();
  const [merchandise, setMerchandise] = useState([]);
  useEffect(() => {}, []);
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
          <div className="d-flex text-muted pt-3">
            <ShoppingCartOutlined className="me-3" style={{ fontSize: "2rem" }} />
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">商品名稱</strong>
                <Link to="#">View</Link>
              </div>
              <span className="d-block">seller or buyer</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
