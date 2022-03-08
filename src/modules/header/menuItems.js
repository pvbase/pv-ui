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
  HOME, ORGANIZATION, PROFILE,BRANCH,DEPARTMENT,DESIGNATION,ROLE,PERMISSION, USERMANAGEMNT,USER,GROUP, WORKFLOW, MAPPINGS
} } = LABELS
const { SubMenu } = Menu;
debugger
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
   }else if(key === "2"){
    navigate("/profile")
   }else if(key === "3"){
    navigate("/branch")
   }else if(key === "4"){
    navigate("/department")
   }else if(key === "5"){
    navigate("/designation")
   }else if(key === "6"){
    navigate("/role")
   }else if(key === "7"){
    navigate("/permission")
   }else if(key === "8"){
    navigate("/user")
   }else if(key === "9"){
    navigate("/group")
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
            <Menu.Item key="3">{BRANCH}</Menu.Item>
            <Menu.Item key="4">{DEPARTMENT}</Menu.Item>
            <Menu.Item key="5">{DESIGNATION}</Menu.Item>
            <Menu.Item key="6">{ROLE}</Menu.Item>
            <Menu.Item key="7">{PERMISSION}</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title={USERMANAGEMNT}>
          <Menu.Item key="8">{USER}</Menu.Item>
          <Menu.Item key="9">{GROUP}</Menu.Item>
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