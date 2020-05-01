import React from 'react'
import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'
import { AuthProvider } from './AuthContext/AuthContext'

ReactDOM.render(
  <>
    <Reset />
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider >
  </>,
  document.getElementById('root')
)

// webpack
function importAll(el) {
  el.keys().forEach(el)
}

importAll(require.context('./', true, /\^(?!test.js$).(js|css)$/))
