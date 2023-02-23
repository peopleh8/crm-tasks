import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import './styles/index.scss'
import 'normalize.css'
import App from './pages/App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorText: 'rgba(0, 0, 0, 0.85)',
            colorPrimary: '#00b96b',
            colorBgLayout: '#F3F6F4',
            colorLink: '#00b96b',
            colorLinkHover: '#20c77c',
            colorLinkActive: '#00945b',
            colorBgBase: '#fff',
            colorBorder: '#D9D9D9',
            colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
            fontSizeHeading1: 30,
            fontSizeHeading1: 24,
            lineHeightHeading1: '40px',
            colorTextHeading: '#fff',
          },
          components: {
            Typography: {
              colorText: '#fff',
              fontSize: 14,
            },
            Button: {
              fontSize: 16,
            },
            Input: {
              fontSize: 16,
            },
            Checkbox: {
              fontSize: 14,
            }
          }
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()