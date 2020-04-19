import React from 'react'
import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'
import App from './App/App'
import { AuthContext } from './AuthContext/AuthContext'

const objLogin = {
  isLoggedIn: false,
  login: () => {
    objLogin.isLoggedIn = true
  },
  logout: () => {
    objLogin.isLoggedIn = false
  },
}

ReactDOM.render(
  <>
    <Reset />
    <AuthContext.Provider value={{ objLogin }}>
      <App />
    </AuthContext.Provider>
  </>,
  document.getElementById('root')
)

// webpack
function importAll(el) {
  el.keys().forEach(el)
}

importAll(require.context('./', true, /\.(js|css)$/))
