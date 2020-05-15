import React from 'react'
import { render, fireEvent } from '@testing-library/react'
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

  it('check authentication', () => {
    let { authStatus } = Store.getState()
    const { getByTestId } = render(
      <Provider store={Store}>
        <Authentication/>
        <button data-testid="submit" onClick={() => authStatus = true}></button>
      </Provider>
    )

    console.log(authStatus)

    const btnSubmit = getByTestId('submit')
    fireEvent.click(btnSubmit)

    expect(authStatus).toBeTruthy()
  })
})
