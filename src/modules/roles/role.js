import React from 'react'
import MenuItems from '../header/menuItems'
import { useNavigate } from 'react-router-dom'

import { Table, Space, Tag, Button, Row, Col } from 'antd'
import '../../scss/role.scss'
import LABELS from '../../constants/label'

const {
  ROLE: {
    ROLE_NAME,
    ROLE_CODE,
    DESC,
    STATUS,
    ADD_NEW,
    ACTION
  },
} = LABELS
const Role = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: ROLE_NAME,
      dataIndex: ROLE_NAME,
      key: ROLE_NAME,
    },
    {
      title: ROLE_CODE,
      dataIndex: ROLE_CODE,
      key: ROLE_CODE,
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
    <div className="role-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className='oneBox'>
        <div>
          <h1 className="heading">ROLE</h1>
        </div>
        <div className="roleTable">
          <Row>
            <Col span={23} style={{ textAlign: 'end', margin: '10px' }}>
              <Button
                className="primary-btn"
                onClick={() => {
                  navigate('/RoleTab')
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
export default Role
