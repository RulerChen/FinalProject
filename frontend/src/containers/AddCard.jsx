import React, { useState } from "react";
import { Form, Input, Button, Radio, InputNumber, Upload, message } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import axios from "axios";

const { TextArea } = Input;
const AddCard = () => {
  const instance = axios.create({
    baseURL: `http://localhost:4000/`,
  });
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const a = 23;
    const {
      data: { message },
    } = await instance.post("/api/cards", {"data": values});
    console.log(message);
  };

  //image upload
  const [loading, setLoading] = useState(false);
  const [mainImageUrl, setMainImageUrl] = useState();
  //   useEffect(()=>{
  //     console.log(mainImageUrl);
  //   },[mainImageUrl])

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
          rules={[{ required: true, message: "必填" }]}
        >
          <Radio.Group>
            <Radio value="遊戲幣"> 遊戲幣 </Radio>
            <Radio value="帳號"> 帳號 </Radio>
            <Radio value="點數卡"> 點數卡 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="定價"
          name={"price"}
          rules={[
            { required: true, message: "必填" },
            { type: "integer", min: 0, message: "價格不得小於等於0" },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="上傳封面圖"
          valuePropName="fileList"
          name={"picture"}
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
        >
          <Upload
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
          name={"intro"}
          label="商品簡介"
          rules={[
            { required: true, message: "必填" },
            { type: "string", min: 1, message: "123" },
          ]}
        >
          <TextArea rows={3} />
        </Form.Item>
        <Form.Item label="詳細商品內容" name={"detail"}>
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
