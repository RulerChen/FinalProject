import React from 'react';
import { UserOutlined, PayCircleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

const arr = ["遊戲幣", "帳號", "點數卡"];
const Tab = (id) => (
  //id = 英雄聯盟LOL, ...
  <Tabs
    defaultActiveKey="2"
    items={[PayCircleOutlined, UserOutlined].map((Icon, i) => {
      return {
        label: (
          <span>
            <Icon />
            {arr[i]}
          </span>
        ),
        key: i,
        // children: `Tab ${i}`,
      };
    })}
  />
);
export default Tab;