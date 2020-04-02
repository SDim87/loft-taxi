import React from 'react'
import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'

import App from './App/App'


ReactDOM.render(
  <>
    <Reset />
    <App />
  </>,
  document.getElementById('root')
)


function importAll(el) {
  el.keys().forEach(el)
}

importAll(require.context('./', true, /\.(js|css)$/))
