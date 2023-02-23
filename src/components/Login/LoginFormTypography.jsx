import React from 'react';
import { theme } from 'antd'

import LoginTypography from './LoginTypography'

const LoginFormTypography = () => {
  const { token } = theme.useToken()
  
  return (
    <div className="login-panel__side-mob">
      <LoginTypography
        titleText={'Welcome to Plastiker!'}
        descText={'Plastiker is the place to grow your business. Everything yuo need in one place'}
        titleLevel={1}
        titleColor={token.colorPrimary}
        descColor={token.colorText}
      />
    </div>
  )
}

export default LoginFormTypography