import React from 'react'
import { Tabs, Form, Row, Col, Input, Select, Button } from 'antd'
import LABELS from '../../constants/label'
import MenuItems from '../header/menuItems'
import '../../scss/user.scss'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { useNavigate } from 'react-router-dom'
const { Option } = Select
const { TabPane } = Tabs
const {
  USER: {
    USER_NAME,
    USER_EMAIL,
    DEPARTMENT,
    DESIGNATION,
    ROLE,
    STATUS,
    ADD_NEW,
    ACTION,
    TAB_BTN
  },
} = LABELS

const UserTab = () => {
  const navigate = useNavigate()

  const gotoProfile = () => {
    navigate('/user')
  }
  function onChange(value) {
    console.log(`selected ${value}`)
  }

  function onSearch(val) {
    console.log('search:', val)
  }
  return (
    <div className="user-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className="oneBox">
        <div>
          <h1 className="heading">USER</h1>
        </div>
        <div>
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
                <Form.Item label={USER_NAME} name={USER_NAME}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={USER_EMAIL} name={USER_EMAIL}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={DEPARTMENT} name={DEPARTMENT}>
                  <Select
                    placeholder="Select Department"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="department1">DEPARTMENT1</Option>
                    <Option value="department2">DEPARTMENT2</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={DESIGNATION} name={DESIGNATION}>
                  <Select
                    placeholder="Select Designation"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="designation1">DESIGNATION1</Option>
                    <Option value="designation2">DESIGNATION2</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={ROLE} name={ROLE}>
                  <Select
                    placeholder="Select Role"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="role1">ROLE1</Option>
                    <Option value="role2">ROLE2</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={STATUS} name={STATUS}>
                  <Select
                    placeholder="Select Status"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="active">Active</Option>
                    <Option value="inactive">Inactive</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={20} style={{ textAlign: 'right' }}>
                <Form.Item wrapperCol={{ offset: 20, span: 2 }}>
                  <Button
                    onClick={gotoProfile}
                    htmlType="submit"
                    className="secondary-btn"
                  >
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item wrapperCol={{ span: 4 }}>
                  <Button
                    onClick={gotoProfile}
                    htmlType="submit"
                    className="primary-btn"
                  >
                    {TAB_BTN}
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default UserTab
