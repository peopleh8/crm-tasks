import React from 'react'
import { Typography } from 'antd'

const LoginTypography = ({ titleText, descText, titleLevel = 1, titleColor, descColor }) => {
  return (
    <>
      <Typography.Title 
        className='login-panel__title' 
        level={titleLevel && titleLevel}
        style={{ color: titleColor && titleColor }}
      >
        {titleText}
      </Typography.Title>
      <Typography.Paragraph 
        className='login-panel__text'
        style={{ color: descColor && descColor }}
      >
        {descText}
      </Typography.Paragraph>
    </>
  )
}

export default LoginTypography