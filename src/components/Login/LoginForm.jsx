import React from 'react'
import { Form, Input, Button } from 'antd'

import FormControls from './FormControls'

const LoginForm = () => {
  const onFinishHandler = values => {
    console.log({ values })
  }
  
  return (
    <Form
      className='login-panel__form'
      autoComplete='off'
      onFinish={onFinishHandler}
    >
      <Form.Item 
        className='login-panel__inp-wrapper'
        name={'email'}
        rules={[
          {
            required: true,
            message: 'Будь ласка, введіть свою електронну пошту',
          }
        ]}
      >
        <Input placeholder='Адреса електронної пошти' />
      </Form.Item>
      <Form.Item 
        className='login-panel__inp-wrapper'
        name={'password'}
        rules={[
          {
            required: true,
            message: 'Будь ласка, введіть ваш пароль',
          },
          {
            min: 8,
            message: 'Пароль дуже короткий',
          },
        ]}
      >
        <Input.Password placeholder='Пароль' />
      </Form.Item>
      <FormControls />
      <Button className='login-panel__btn' htmlType='submit' type='primary'>Увійти</Button>
    </Form>
  )
}

export default LoginForm