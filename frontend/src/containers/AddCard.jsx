import React, { useState } from "react";
import { Form, Input, Button, Radio, InputNumber, Upload, message } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";

import { useHook } from "../hooks/useHook.jsx";
import CardService from "../services/card.service.js";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const AddCard = () => {
  const [form] = Form.useForm();
  const { username, account, displayStatus } = useHook();
  const [categoryState, setCategoryState] = useState("");
  const [previewDetail, setPreviewDetail] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const {
      game,
      category,
      price,
      image,
      title,
      intro,
      detail,
      goodAccount,
      goodPassword,
      cardPoint,
    } = values;
    const url = image[0].thumbUrl;
    console.log(goodPassword)
    CardService.addGameCard(
      {game,
      category,
      price,
      url, //todo: enable uploading without img
      title,
      intro,
      detail,
      username, //seller's username
      account, //seller's email
      goodAccount, //good info
      goodPassword, //good info
      cardPoint}
    ).then((response) => {
      // console.log(response);
      displayStatus({ type: "success", msg: response.data.message });
      navigate(`/store/${game}`);
    })
  };

  const tmpPrice = Form.useWatch("price", form);
  const tmpImage = Form.useWatch("image", form);
  const tmpTitle = Form.useWatch("title", form);
  const tmpIntro = Form.useWatch("intro", form);
  const tmpDetail = Form.useWatch("detail", form);
  const [pvPrice, setpvPrice] = useState("");
  const [pvImage, setpvImage] = useState("");
  const [pvTitle, setpvTitle] = useState("");
  const [pvIntro, setpvIntro] = useState("");
  const [pvDetail, setpvDetail] = useState("");

  const previewDetailHandler = () => {
    setpvPrice(tmpPrice ? tmpPrice : "定價");
    setpvImage(tmpImage? tmpImage[0].thumbUrl : "null");
    setpvTitle(tmpTitle ? tmpTitle : "標題");
    setpvIntro(tmpIntro ? tmpIntro : "簡介");
    setpvDetail(tmpDetail ? tmpDetail : "詳細介紹");
    setPreviewDetail(true);
  };

  //image upload
  const [loading, setLoading] = useState(false);
  const [mainImageUrl, setMainImageUrl] = useState();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setMainImageUrl(url);
      });
    }
  };

  return previewDetail === true ? (
    <>
      {/* Navigation*/}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav> */}
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setPreviewDetail(false)}
        >
          繼續填寫
        </button>
      </div>
      {/* Product section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0" src={pvImage} />
            </div>
            <div className="col-md-6">
              <p>
                {`seller: ${username}`}&ensp;&ensp; {`account: ${account}`}
              </p>

              <h1 className="display-5 fw-bolder">{pvTitle}</h1>
              <div className="fs-5 mb-5">
                <span>{`NT$ ${pvPrice}`}</span>
              </div>
              <h4 className="lead">{pvIntro}</h4>
              <p className="lead">{pvDetail}</p>
              <button
                className="btn btn-outline-dark flex-shrink-0 mt-2"
                type="button"
              >
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
    </>
  ) : (
    <>
      <Form
        form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={onFinish}
      >
        {/* id,url,text,tag */}
        <Form.Item
          label="遊戲類別"
          name={"game"}
          rules={[{ required: true, message: "必填" }]}
        >
          <Radio.Group>
            <Radio value="新楓之谷"> 新楓之谷 </Radio>
            <Radio value="英雄聯盟LOL"> 英雄聯盟LOL </Radio>
            <Radio value="Valorant"> Valorant </Radio>
            <Radio value="Garena傳說對決"> Garena傳說對決 </Radio>
            <Radio value="神魔之塔"> 神魔之塔 </Radio>
            <Radio value="怪物彈珠"> 怪物彈珠 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="商品類別"
          name={"category"}
          rules={[{ required: true, message: "請填寫商品類別" }]}
        >
          <Radio.Group onChange={(e) => setCategoryState(e.target.value)}>
            <Radio value="帳號"> 帳號 </Radio>
            <Radio value="點數卡"> 點數卡 </Radio>
          </Radio.Group>
        </Form.Item>

        {categoryState === "點數卡" && (
          <Form.Item
            label="點數卡點數"
            name={"cardPoint"}
            rules={[
              { required: true, message: "請填寫點數數量" },
              { type: "string", min: 1, message: "點數數量不可小於等於0" },
            ]}
          >
            <Input placeholder="請填寫欲上架的點數卡所含的點數數量" />
          </Form.Item>
        )}

        <Form.Item
          label={`商品帳號`}
          name={"goodAccount"}
          rules={[
            { required: true, message: `請填寫商品帳號` },
            { type: "string", min: 1, message: `請填寫商品帳號` },
          ]}
        >
          <Input placeholder="請輸入欲上架的帳號/點數卡的帳號" />
        </Form.Item>
        <Form.Item
          label={`商品密碼`}
          name={"goodPassword"}
          rules={[
            { required: true, message: `商品密碼` },
            { type: "string", min: 1, message: `商品密碼` },
          ]}
        >
          <Input placeholder="請輸入欲上架的帳號/點數卡的密碼" />
        </Form.Item>

        <Form.Item
          label="定價(NTD)"
          name={"price"}
          rules={[
            { required: true, message: "請填寫定價" },
            { type: "integer", min: 0, message: "價格不得小於等於0" },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="上傳封面圖"
          valuePropName="fileList"
          name={"image"}
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
          rules={[{ required: true, message: "請上傳封面圖" }]}
        >
          <Upload
            // should be fixed
            action="http://localhost:4000/api/cards/image"
            listType="picture-card"
            maxCount={1} //one image only
            showUploadList={{ showPreviewIcon: false }} // remove preview
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            <div>
              {mainImageUrl ? <ReloadOutlined /> : <PlusOutlined />}
              <div
                style={{
                  marginTop: 8,
                }}
              >
                {mainImageUrl ? "Reupload" : "Upload"}
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          name={"title"}
          label="標題"
          rules={[
            { required: true, message: "必填" },
            {
              type: "string",
              min: 1,
              max: 15,
              message: "請輸入1~15個字作為標題",
            },
          ]}
        >
          <TextArea rows={1} placeholder="請輸入商品內容1~15字" />
        </Form.Item>

        <Form.Item
          name={"intro"}
          label="商品簡介"
          rules={[
            { required: true, message: "必填" },
            { type: "string", min: 1, message: "123" },
          ]}
        >
          <TextArea rows={3} placeholder="請簡單介紹您的商品" />
        </Form.Item>

        <Form.Item
          label="詳細商品內容"
          name={"detail"}
          rules={[
            { required: true, message: "必填" },
            { type: "string", min: 1, message: "123" },
          ]}
        >
          <TextArea rows={3} placeholder="請詳細介紹您的商品" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={previewDetailHandler}>
            預覽
          </Button>
          <span>&emsp;&emsp;</span>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddCard;
