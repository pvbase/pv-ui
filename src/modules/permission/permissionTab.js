import React from 'react'
import { Tabs, Form, Row, Col, Input, Select, Button } from 'antd'
import LABELS from '../../constants/label'
import MenuItems from '../header/menuItems'
import '../../scss/permission.scss'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { useNavigate } from 'react-router-dom'
const { Option } = Select
const { TabPane } = Tabs
const {
  PERMISSION: {
    PERMISSION_NAME,
    DESC,
    STATUS,
    TAB_BTN,
  },
} = LABELS

const PermissionTab = () => {
  const navigate = useNavigate()

  const gotoProfile = () => {
    navigate('/permission')
  }
  function onChange(value) {
    console.log(`selected ${value}`)
  }

  function onSearch(val) {
    console.log('search:', val)
  }
  return (
    <div className="permission-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className="oneBox">
        <div>
          <h1 className="heading">PERMISSION</h1>
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
                <Form.Item label={PERMISSION_NAME} name={PERMISSION_NAME}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={DESC} name={DESC}>
                  <Input />
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
                    <Option value="active">ACTIVE</Option>
                    <Option value="inactive">INACTIVE</Option>
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
export default PermissionTab
