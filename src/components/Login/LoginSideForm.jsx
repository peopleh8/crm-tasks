import React from 'react'
import { Col } from 'antd'

import Logo from '../Logo'
import LoginFormTypography from './LoginFormTypography'
import LoginForm from './LoginForm'

const LoginSideForm = () => {
  return (
    <Col className='login-panel__side login-panel__side-form' xl={12} lg={12} md={14} sm={14} xs={24}>
      <Logo />
      <LoginFormTypography />
      <LoginForm />
    </Col>
  )
}

export default LoginSideForm