import React from 'react'
import '../styles/login.scss'
import { theme, Row, Layout } from 'antd'

import LoginSideForm from '../components/Login/LoginSideForm'
import LoginSideContent from '../components/Login/LoginSideContent'

const App = () => {
  const { token } = theme.useToken()

  return (
    <Layout className='App' style={{ '--bg': token.colorPrimary }}>
      <Layout.Content>
        <Row className='login-panel' gutter={[0, 0]}>
          <LoginSideForm />
          <LoginSideContent />
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default App