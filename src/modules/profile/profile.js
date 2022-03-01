import React from "react";
import MenuItems from "../header/menuItems";
import { useNavigate } from "react-router-dom";

import { Table, Space, Tag, Button, Row, Col } from "antd";
import "../../scss/profile.scss"
import LABELS from '../../constants/label';

const { PROFILE: {
    COMPANY_NAME, TYPE_OF_BUSSINESS, ADDRESS1, ADDRESS2, CITY, COUNTRY_STATE, COUNTRY, POSTCODE, TAX, INDUSTRY, CONTACT_NAME, DESIGNATION, EMAIL_1, EMAIL_2, PHONE_1, PHONE_2, TAB_LEGAL, TAB_CONTACT, TAB_BTN,ADD_NEW
} } = LABELS
const Profile = () => {
    const navigate = useNavigate()

    const columns = [
        {
          title: COMPANY_NAME,
          dataIndex: COMPANY_NAME,
          key: COMPANY_NAME,
        },
        {
          title: TYPE_OF_BUSSINESS,
          dataIndex: TYPE_OF_BUSSINESS,
          key: TYPE_OF_BUSSINESS,
        },
        {
          title: ADDRESS1,
          dataIndex: ADDRESS1,
          key: ADDRESS1,
        },
        {
            title: ADDRESS2,
            dataIndex: ADDRESS2,
            key: ADDRESS2,
          },
          {
            title: CITY,
            dataIndex: CITY,
            key: CITY,
          }
      ];
      
      const data = [
    
      ];
    return(
        <div className="profile-tab-wrap">
            <div className="menu">
            <MenuItems />

            </div>
        <div className="profileTable">
            <Row>
                <Col span = {23} style={{textAlign:"end", margin:"10px"}}>
                <Button className = "primary-btn" onClick={() => {navigate("/ProfileTab")}}>{ADD_NEW}</Button>
                </Col>
            </Row>
        <Table columns={columns} dataSource={data} pagination={false} />
        </div>
        </div>
    )
}
export default Profile