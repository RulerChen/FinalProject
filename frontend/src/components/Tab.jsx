import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

const arr = ["遊戲幣", "帳號"];
const Tab = (id) => (
  //id = 英雄聯盟LOL, ...
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
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