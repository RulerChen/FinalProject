import React from "react";
import { Button } from "antd";
import { UserOutlined, MailOutlined, KeyOutlined, PoundCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Profile = () => {
  return (
    <div>
      <main className="container">
        <div className="d-flex align-items-center p-3 my-3 bg-light rounded shadow-sm">
          <UserOutlined className="me-3" style={{ fontSize: "2rem" }} />
          <div className="lh-1">
            <h1 className="h6 mb-0 lh-1">Bootstrap</h1>
            <small>Since 2011</small>
          </div>
        </div>

        <div className="my-3 p-3 bg-light rounded shadow-sm">
          <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
          <div className="d-flex text-muted pt-3">
            <MailOutlined className="me-3" style={{ fontSize: "2rem" }} />
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">Full Name</strong>
                <a href="#">Edit</a>
              </div>
              <span className="d-block">@username</span>
            </div>
          </div>
          <div className="d-flex text-muted pt-3">
            <KeyOutlined className="me-3" style={{ fontSize: "2rem" }} />
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">Full Name</strong>
                <a href="#">Edit</a>
              </div>
              <span className="d-block">@username</span>
            </div>
          </div>
          <div className="d-flex text-muted pt-3">
            <PoundCircleOutlined className="me-3" style={{ fontSize: "2rem" }} />
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">Full Name</strong>
              </div>
              <span className="d-block">@username</span>
            </div>
          </div>
        </div>

        <div className="my-3 p-3 bg-light rounded shadow-sm">
          <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
          <div className="d-flex text-muted pt-3">
            <ShoppingCartOutlined className="me-3" style={{ fontSize: "2rem" }} />
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">Full Name</strong>
                <a href="#">Show</a>
              </div>
              <span className="d-block">@username</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
