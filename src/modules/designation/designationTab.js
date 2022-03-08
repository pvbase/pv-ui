import React from 'react'
import { Tabs, Form, Row, Col, Input, Select, Button } from 'antd'
import LABELS from '../../constants/label'
import MenuItems from '../header/menuItems'
import '../../scss/designation.scss'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { useNavigate } from 'react-router-dom'
const { Option } = Select
const { TabPane } = Tabs
const {
  DESIGNATION: {
    DESIGNATION_NAME,
    DEPARTMENT,
    DESIGNATION_CODE,
    DESC,
    STATUS,
    TAB_BTN,
  },
} = LABELS

const DesignationTab = () => {
  const navigate = useNavigate()

  const gotoProfile = () => {
    navigate('/designation')
  }
  function onChange(value) {
    console.log(`selected ${value}`)
  }

  function onSearch(val) {
    console.log('search:', val)
  }
  return (
    <div className="designation-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className="oneBox">
        <div>
          <h1 className="heading">DESIGNATION</h1>
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
                <Form.Item label={DESIGNATION_NAME} name={DESIGNATION_NAME}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={DEPARTMENT} name={DEPARTMENT}>
                  <Select
                    placeholder="Select Branch"
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
                    <Option value="department3">DEPARTMENT3</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={DESIGNATION_CODE} name={DESIGNATION_CODE}>
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
export default DesignationTab
