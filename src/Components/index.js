import React from 'react'
import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'
import { AuthContext } from './AuthContext/AuthContext'

const objLogin = {
  isLoggedIn: false,
  login() {
    this.isLoggedIn = true
  },
  logout() {
    this.isLoggedIn = false
  },
}

ReactDOM.render(
  <>
    <Reset />
    <AuthContext.Provider value={{ objLogin }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContext.Provider>
  </>,
  document.getElementById('root')
)

// webpack
function importAll(el) {
  el.keys().forEach(el)
}

importAll(require.context('./', true, /\.(js|css)$/))
