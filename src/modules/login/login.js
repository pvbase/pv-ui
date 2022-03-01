import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Row, Col } from "antd";
import 'antd/dist/antd.css';
import LABELS from "../../constants/label";
import "../../scss/login.scss"
const { REGISTRATION: {
    CONTACT_EMAIL, LOGIN_TITLE, PASSWORD, LOGIN_BTN
} } = LABELS
const Login = () => {
    const history = useNavigate()
    const goTo = () => {
        history('/registeration')
    }
    const onSubmit = () => {
        history('/home')
    }

    return (
        <>
            <div className="loginForm-wrap">
                <div className="content">
                    <h3 className="register-title">{LOGIN_TITLE}</h3>
                    <div className="form">
                        <Form
                            name="basic"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 15 }}
                            autoComplete="off"
                            className="login-form"
                            onFinish={onSubmit}

                        >
                            <Row justify="center">
                                <Col span={15}>
                                    <Form.Item label={CONTACT_EMAIL} name={CONTACT_EMAIL}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={15}>
                                    <Form.Item label={PASSWORD} name={PASSWORD}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={15}>
                                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                                        <Button htmlType="submit" className="primary-btn">
                                            {LOGIN_BTN}
                                        </Button>
                                    </Form.Item>
                                </Col>
                                <Col span={15}>
                                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                                        <p>Don't have Account? <span style={{ color: "#78028c", cursor: "pointer" }} onClick={goTo}> Register </span> </p>
                                    </Form.Item>
                                </Col>

                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login