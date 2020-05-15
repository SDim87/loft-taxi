
import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import Reducers from '../../Redux/Reducers'

describe('App: ', () => {
  const Store = createStore(Reducers)

  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={Store}>
          <App />
        </Provider>
      </BrowserRouter>
    )

    expect(container.innerHTML).toMatch('Войти')
  })
})
