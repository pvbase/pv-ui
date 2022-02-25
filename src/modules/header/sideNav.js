import React from "react"
import { Form, Input, Button, Space } from 'antd';
import LABELS from "../../constants/label";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "../../scss/sideNav.scss"

const { REGISTRATION: {
    COMPANY_NAME, ALIAS, CONTACT_NAME, CONTACT_EMAIL, CONTACT_PHONE, REGISTRATION_BTN, REGISTRATION_TITLE
} } = LABELS

const SideNav = () => {

    return (
        <>

            <div className="sideNav">
                <div className= "content">
                    <h3 className="register-title">{REGISTRATION_TITLE}</h3>

                    <div className="form">

                        <Form
                            name="basic"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 15 }}
                            autoComplete="off"
                            className="register-form"
                        >

                            <Form.Item
                                label={COMPANY_NAME}
                                name={COMPANY_NAME}
                            // wrapperCol={{ span: 17 }}

                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label={ALIAS}
                                name={ALIAS}


                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label={CONTACT_NAME}
                                name={CONTACT_NAME}

                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label={CONTACT_EMAIL}
                                name={CONTACT_EMAIL}

                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label={CONTACT_PHONE}
                                name={CONTACT_PHONE}

                            >
                                <Input />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                                <Button htmlType="submit" className="register-btn">
                                    {REGISTRATION_BTN}
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>


            </div>
        </>
    )
}
export default SideNav