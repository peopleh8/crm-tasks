import React from 'react'
import { Col, theme } from 'antd'

import LoginTypography from './LoginTypography'

const LoginSideContent = () => {
  const { token } = theme.useToken()
  
  return (
    <Col className='login-panel__side login-panel__side-content' style={{ backgroundColor: token.colorPrimary }} xl={12} lg={12} md={10} sm={10} xs={24}>
      <LoginTypography
        titleText={'Welcome to Plastiker!'}
        descText={'Plastiker is the place to grow your business. Everything yuo need in one place'}
        titleLevel={2}
      />
    </Col>
  )
}

export default LoginSideContent