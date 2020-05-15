import React from 'react'
import { render } from '@testing-library/react'
// import { BrowserRouter } from 'react-router-dom'
// import Auth from '../Auth'
import { Provider } from 'react-redux'
import Authentication from './Authentication'
import { Store } from '../../Redux/Store'

describe('Authentication: ', () => {
  it('renders correctly', () => {
    const { queryAllByText } = render(
      <Provider store={Store}>
        <Authentication/>
      </Provider>
    )

    expect(queryAllByText('Войти')).toBeTruthy()
  })
})
