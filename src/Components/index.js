import React from 'react'
import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App/App'
import { AuthProvider } from './AuthContext/AuthContext'
import { Store } from '../Redux/Store'

ReactDOM.render(
  <>
    <Reset />
    <Provider store={Store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider >
    </Provider>
  </>,
  document.getElementById('root')
)

// webpack
function importAll(el) {
  el.keys().forEach(el)
}

importAll(require.context('./', true, /\^(?!test.js$).(js|css)$/))
