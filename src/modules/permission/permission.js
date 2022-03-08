import React from 'react'
import MenuItems from '../header/menuItems'
import { useNavigate } from 'react-router-dom'

import { Table, Space, Tag, Button, Row, Col } from 'antd'
import '../../scss/permission.scss'
import LABELS from '../../constants/label'

const {
  PERMISSION: {
    PERMISSION_NAME,
    DESC,
    STATUS,
    ADD_NEW,
    ACTION
  },
} = LABELS
const Permission = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: PERMISSION_NAME,
      dataIndex: PERMISSION_NAME,
      key: PERMISSION_NAME,
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
    <div className="permission-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className='oneBox'>
        <div>
          <h1 className="heading">PERMISSION</h1>
        </div>
        <div className="permissionTable">
          <Row>
            <Col span={23} style={{ textAlign: 'end', margin: '10px' }}>
              <Button
                className="primary-btn"
                onClick={() => {
                  navigate('/PermissionTab')
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
export default Permission
