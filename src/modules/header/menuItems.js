import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import { useNavigate } from "react-router-dom";

import {
  AppstoreOutlined,
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons';

import LABELS from '../../constants/label';
import "../../scss/menu.scss"

const { MENUITEMS: {
  HOME, ORGANIZATION, PROFILE, USERMANAGEMNT, WORKFLOW, MAPPINGS
} } = LABELS
const { SubMenu } = Menu;

const MenuItems = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()

  const toggleCollapsed = () => {
    setCollapsed(state => !state)
  }

  const handleClick = (e) => {
    const { key } = e
   if(key === "1") {
    navigate("/home")
   }
   else{
     navigate("/profile")
   }
  }

  return (
    <div className="menu-items">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onClick = {handleClick}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            {HOME}
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title={ORGANIZATION}>
            <Menu.Item key="2">{PROFILE}</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title={USERMANAGEMNT}>
          </SubMenu>
          <SubMenu key="sub3" icon={<AppstoreOutlined />} title={WORKFLOW}>
          </SubMenu>
          <SubMenu key="sub4" icon={<AppstoreOutlined />} title={MAPPINGS}>
          </SubMenu>
        </Menu> 

    </div>
  )

}
export default MenuItems;