import React from 'react'
import MenuItems from '../header/menuItems'
import { useNavigate } from 'react-router-dom'

import { Table, Space, Tag, Button, Row, Col } from 'antd'
import '../../scss/user.scss'
import LABELS from '../../constants/label'

const {
  USER: {
    USER_NAME,
    USER_EMAIL,
    DEPARTMENT,
    DESIGNATION,
    ROLE,
    STATUS,
    ADD_NEW,
    ACTION
  },
} = LABELS
const User = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: USER_NAME,
      dataIndex: USER_NAME,
      key: USER_NAME,
    },
    {
      title: USER_EMAIL,
      dataIndex: USER_EMAIL,
      key: USER_EMAIL,
    },
    {
      title: DEPARTMENT,
      dataIndex: DEPARTMENT,
      key: DEPARTMENT,
    },
    {
      title: DESIGNATION,
      dataIndex: DESIGNATION,
      key: DESIGNATION,
    },
    {
      title: ROLE,
      dataIndex: ROLE,
      key: ROLE,
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
    <div className="user-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className='oneBox'>
        <div>
          <h1 className="heading">USER</h1>
        </div>
        <div className="userTable">
          <Row>
            <Col span={23} style={{ textAlign: 'end', margin: '10px' }}>
              <Button
                className="primary-btn"
                onClick={() => {
                  navigate('/UserTab')
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
export default User
