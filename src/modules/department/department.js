import React from 'react'
import MenuItems from '../header/menuItems'
import { useNavigate } from 'react-router-dom'

import { Table, Space, Tag, Button, Row, Col } from 'antd'
import '../../scss/department.scss'
import LABELS from '../../constants/label'

const {
  DEPARTMENT: {
    DEPARTMENT_NAME,
    BRANCH,
    PARENTDEP,
    DEPARTMENT_CODE,
    DESC,
    STATUS,
    TAB_BTN,
    ADD_NEW,
    ACTION
  },
} = LABELS
const Department = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: DEPARTMENT_NAME,
      dataIndex: DEPARTMENT_NAME,
      key: DEPARTMENT_NAME,
    },
    {
      title: DEPARTMENT_CODE,
      dataIndex: DEPARTMENT_CODE,
      key: DEPARTMENT_CODE,
    },
    {
      title: DESC,
      dataIndex: DESC,
      key: DESC,
    },
    {
      title: STATUS,
      dataIndex: STATUS,
      key: STATUS,
    },
    {
      title: ACTION,
      dataIndex: ACTION,
      key: ACTION,
    },
  ]
  const data = []
  return (
    <div className="department-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className='oneBox'>
        <div>
          <h1 className="heading">DEPARTMENT</h1>
        </div>
        <div className="departmentTable">
          <Row>
            <Col span={23} style={{ textAlign: 'end', margin: '10px' }}>
              <Button
                className="primary-btn"
                onClick={() => {
                  navigate('/DepartmentTab')
                }}
              >
                {ADD_NEW}
              </Button>
            </Col>
          </Row>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  )
}
export default Department
