import React from 'react'
import MenuItems from '../header/menuItems'
import { useNavigate } from 'react-router-dom'

import { Table, Space, Tag, Button, Row, Col } from 'antd'
import '../../scss/designation.scss'
import LABELS from '../../constants/label'

const {
  DESIGNATION: {
    DESIGNATION_NAME,
    DESIGNATION_CODE,
    DESC,
    STATUS,
    ADD_NEW,
    ACTION
  },
} = LABELS
const Designation = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: DESIGNATION_NAME,
      dataIndex: DESIGNATION_NAME,
      key: DESIGNATION_NAME,
    },
    {
      title: DESIGNATION_CODE,
      dataIndex: DESIGNATION_CODE,
      key: DESIGNATION_CODE,
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
    <div className="designation-tab-wrap">
      <div className="menu">
        <MenuItems />
      </div>
      <div className='oneBox'>
        <div>
          <h1 className="heading">DESIGNATION</h1>
        </div>
        <div className="designationTable">
          <Row>
            <Col span={23} style={{ textAlign: 'end', margin: '10px' }}>
              <Button
                className="primary-btn"
                onClick={() => {
                  navigate('/DesignationTab')
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
export default Designation
