import React from "react";
import {
  UserOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";

const Tab = ({ id, tabArray, tabState, setTabState }) => (
  //id = lol, ...
  <Tabs
    defaultActiveKey={tabState}
    onTabClick={(key) => {
      setTabState(key);
    }}
    items={[UserOutlined, CreditCardOutlined].map(
      (Icon, i) => {
        return {
          label: (
            <span>
              <Icon />
              {tabArray[i]}
            </span>
          ),
          key: i,
          // children: `Tab ${i}`,
        };
      }
    )}
  />
);
export default Tab;
