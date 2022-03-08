import React from 'react'
import MenuItems from '../header/menuItems'
import { useNavigate } from 'react-router-dom'

import { Table, Space, Tag, Button, Row, Col } from 'antd'
import '../../scss/group.scss'
import LABELS from '../../constants/label'

const {
  GROUP: {
    GROUP_NAME,
    GROUP_EMAIL,
    DESC,
    USER,
    STATUS,
    ADD_NEW,
    ACTION
  },
} = LABELS
const Group = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: GROUP_NAME,
      dataIndex: GROUP_NAME,
      key: GROUP_NAME,
    },
    {
      title: GROUP_EMAIL,
      dataIndex: GROUP_EMAIL,
      key: GROUP_EMAIL,
    },
    {
      title: DESC,
      dataIndex: DESC,
      key: DESC,
    },
    {
      title: USER,
      dataIndex: USER,
      key: USER,
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
    <div className="group-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className='oneBox'>
        <div>
          <h1 className="heading">GROUP</h1>
        </div>
        <div className="groupTable">
          <Row>
            <Col span={23} style={{ textAlign: 'end', margin: '10px' }}>
              <Button
                className="primary-btn"
                onClick={() => {
                  navigate('/GroupTab')
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
export default Group
