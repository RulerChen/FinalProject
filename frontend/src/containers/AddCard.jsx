import React, { useState } from "react";
import { Form, Input, Button, Radio, InputNumber, Upload, message } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";

import { useHook } from "../hooks/useHook.jsx";
import CardService from "../services/card.service.js";

const { TextArea } = Input;
const AddCard = () => {
  const [form] = Form.useForm();
  const { username, account, displayStatus } = useHook();
  const [categoryState, setCategoryState] = useState("");
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const { game, category, price, image, title, intro, detail, stock, goodAccount, goodPassport, point } = values;
    const url = image[0].thumbUrl;
    CardService.addGameCard(
      game,
      category,
      price,
      url, //todo: enable uploading without img
      title,
      intro,
      detail,
      stock,
      username, //seller's username
      account, //seller's email
      goodAccount, //good info
      goodPassport, //good info
      point
    ).then((response) => {
      console.log(response);
      displayStatus({ type: "success", msg: response.data.message });
    });
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
      console.log("uploading");
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      console.log("done");

      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setMainImageUrl(url);
      });
    }
  };

  return (
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
        <Form.Item label="遊戲類別" name={"game"} rules={[{ required: true, message: "必填" }]}>
          <Radio.Group>
            <Radio value="新楓之谷"> 新楓之谷 </Radio>
            <Radio value="英雄聯盟LOL"> 英雄聯盟LOL </Radio>
            <Radio value="Valorant"> Valorant </Radio>
            <Radio value="Garena傳說對決"> Garena傳說對決 </Radio>
            <Radio value="神魔之塔"> 神魔之塔 </Radio>
            <Radio value="怪物彈珠"> 怪物彈珠 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="商品類別" name={"category"} rules={[{ required: true, message: "請填寫商品類別!" }]}>
          <Radio.Group onChange={(e) => setCategoryState(e.target.value)}>
            <Radio value="帳號"> 帳號 </Radio>
            <Radio value="點數卡"> 點數卡 </Radio>
          </Radio.Group>
        </Form.Item>

        {categoryState === "點數卡" && (
          <Form.Item
            label="點數卡點數"
            name={"point"}
            rules={[
              { required: true, message: "請填寫點數數量!" },
              { type: "string", min: 1, message: "點數數量不可小於等於0!" },
            ]}
          >
            <Input />
          </Form.Item>
        )}

        <Form.Item
          label={`${categoryState}帳號`}
          name={"goodAccount"}
          rules={[
            { required: true, message: `請填寫${categoryState}帳號` },
            { type: "string", min: 1, message: `請填寫${categoryState}帳號` },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={`${categoryState}密碼`}
          name={"goodPassport"}
          rules={[
            { required: true, message: `${categoryState}密碼` },
            { type: "string", min: 1, message: `${categoryState}密碼` },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="定價"
          name={"price"}
          rules={[
            { required: true, message: "請填寫定價!" },
            { type: "integer", min: 0, message: "價格不得小於等於0!" },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="庫存"
          name={"stock"}
          rules={[
            { required: true, message: "必填" },
            { type: "integer", min: 0, message: "庫存不得小於等於0" },
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
          <TextArea rows={1} />
        </Form.Item>

        <Form.Item
          name={"intro"}
          label="商品簡介"
          rules={[
            { required: true, message: "必填" },
            { type: "string", min: 1, message: "123" },
          ]}
        >
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label="詳細商品內容"
          name={"detail"}
          rules={[
            { required: true, message: "必填" },
            { type: "string", min: 1, message: "123" },
          ]}
        >
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddCard;
