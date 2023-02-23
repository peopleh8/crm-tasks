import React from 'react'
import { Checkbox, Button, Row } from 'antd'

const FormControls = () => {
  return (
    <Row className='login-panel__controls' wrap={false}>
      <Checkbox className='login-panel__check'>Запам’ятати мене</Checkbox>
      <Button className='login-panel__reset' htmlType='buttom' type='link' href='https://google.com'>Забули пароль?</Button>
    </Row>
  )
}

export default FormControls