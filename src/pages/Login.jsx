import React from 'react'
import { Form, Space, Input, Button } from 'antd'

const Login = () => {
  const onFinishHandler = values => {
    console.log({ values })
  }
  
  return (
    <div className='login page'>
      <div className="login__panel">
        <Space 
          direction='horizontal' 
          block={true} 
          align='center'
          wrap={true}
        >
          <Form 
            autoComplete='off'
            onFinish={onFinishHandler}
          >
            <Form.Item 
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
            <Button htmlType='submit' type='primary'>Увійти</Button>
          </Form>
          <div>
            qqq
          </div>
        </Space>
      </div>
    </div>
  )
}

export default Login