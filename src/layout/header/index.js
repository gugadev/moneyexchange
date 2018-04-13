import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'antd'
import Logo from '~/layout/header/logo'
import Menu from '~/layout/header/menu'

export default () => (
  <header className="layout__header">
    <Logo />
    <Menu />
    {/* <Row>
      <Col xs={8} sm={8} md={24} lg={24}>
        <Logo />
      </Col>
      <Col xs={8} sm={8} md={24} lg={24}>
        <Menu />
      </Col>
    </Row> */}
  </header>
)
