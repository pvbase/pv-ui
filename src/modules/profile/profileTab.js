import React from 'react';
import { Tabs, Form, Row, Col, Input, Select, Button } from 'antd';
import LABELS from '../../constants/label';
import MenuItems from '../header/menuItems';
import "../../scss/profile.scss"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;
const { PROFILE: {
    COMPANY_NAME, TYPE_OF_BUSSINESS, ADDRESS1, ADDRESS2, CITY, COUNTRY_STATE, COUNTRY, POSTCODE, TAX, INDUSTRY, CONTACT_NAME, DESIGNATION, EMAIL_1, EMAIL_2, PHONE_1, PHONE_2, TAB_LEGAL, TAB_CONTACT, TAB_BTN
} } = LABELS

const ProfileTab = () => {
    const navigate = useNavigate()

    const gotoProfile = () => {
        navigate("/profile") 
    }
    return (
        <div className='profile-tab-wrap'>
            <div className='menu'>
                <MenuItems />

            </div>
            <Tabs defaultActiveKey="1" type="card" size="Medium">
                <TabPane tab={TAB_LEGAL} key="1">
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 15 }}
                        autoComplete="off"
                        className="form"
                    // onFinish={onSubmit}

                    >
                        <Row justify="center">
                            <Col span={12}>
                                <Form.Item label={COMPANY_NAME} name={COMPANY_NAME}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={TYPE_OF_BUSSINESS} name={TYPE_OF_BUSSINESS}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={ADDRESS1} name={ADDRESS1}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={ADDRESS2} name={ADDRESS2}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={CITY} name={CITY}>
                                    <Select />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={COUNTRY_STATE} name={COUNTRY_STATE}>
                                    <Select />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={COUNTRY} name={COUNTRY}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={POSTCODE} name={POSTCODE}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={TAX} name={TAX}>
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item label={INDUSTRY} name={INDUSTRY}>
                                    <Select />
                                </Form.Item>
                            </Col>
                            <Col span={20} style={{ textAlign: "right" }}>
                                <Form.Item wrapperCol={{ offset: 20, span: 2 }}>

                                    <Button onClick={gotoProfile} htmlType="submit" className="secondary-btn">
                                        Cancel
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item wrapperCol={{ span: 4 }}>
                                    <Button onClick={gotoProfile} htmlType="submit" className="primary-btn">
                                        {TAB_BTN}
                                    </Button>
                                </Form.Item>
                            </Col>

                        </Row>
                    </Form>
                </TabPane>
                <TabPane tab={TAB_CONTACT} key="2">
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 15 }}
                        autoComplete="off"
                        className="form"
                    // onFinish={onSubmit}

                    >
                        <Row justify="center">
                            <Col span={12}>
                                <Form.Item label={CONTACT_NAME} name={CONTACT_NAME}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={DESIGNATION} name={DESIGNATION}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={EMAIL_1} name={EMAIL_1}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={EMAIL_2} name={EMAIL_2}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={PHONE_1} name={PHONE_1}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={PHONE_2} name={PHONE_2}>
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={20} style={{ textAlign: "right" }}>
                                <Form.Item wrapperCol={{ offset: 20, span: 2 }}>

                                    <Button onClick={gotoProfile} htmlType="submit" className="secondary-btn">
                                        Cancel
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item wrapperCol={{ span: 4 }}>
                                    <Button onClick={gotoProfile} htmlType="submit" className="primary-btn">
                                        {TAB_BTN}
                                    </Button>
                                </Form.Item>
                            </Col>

                        </Row>
                    </Form>                </TabPane>

            </Tabs>

        </div>
    )

}
export default ProfileTab