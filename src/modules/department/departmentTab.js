import React from 'react'
import { Tabs, Form, Row, Col, Input, Select, Button } from 'antd'
import LABELS from '../../constants/label'
import MenuItems from '../header/menuItems'
import '../../scss/department.scss'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { useNavigate } from 'react-router-dom'
const { Option } = Select
const { TabPane } = Tabs
const {
  DEPARTMENT: {
    DEPARTMENT_NAME,
    BRANCH,
    PARENTDEP,
    DEPARTMENT_CODE,
    DESC,
    STATUS,
    TAB_BTN,
  },
} = LABELS

const DepartmentTab = () => {
  const navigate = useNavigate()

  const gotoProfile = () => {
    navigate('/department')
  }
  function onChange(value) {
    console.log(`selected ${value}`)
  }

  function onSearch(val) {
    console.log('search:', val)
  }
  return (
    <div className="department-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className="oneBox">
        <div>
          <h1 className="heading">DEPARTMENT</h1>
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
                <Form.Item label={DEPARTMENT_NAME} name={DEPARTMENT_NAME}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={BRANCH} name={BRANCH}>
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
                    <Option value="branch1">BRANCH1</Option>
                    <Option value="branch2">BRANCH2</Option>
                    <Option value="branch3">BRANCH3</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={PARENTDEP} name={PARENTDEP}>
                  <Select
                    placeholder="Select Parent Department"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="parentDep1">Parent Department 1</Option>
                    <Option value="parentDep2">Parent Department 2</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={DEPARTMENT_CODE} name={DEPARTMENT_CODE}>
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
export default DepartmentTab