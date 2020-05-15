import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from '../../Redux/Store'
import Auth from './Auth'

describe('Auth: ', () => {
  it('route testing', () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <Provider store={Store}>
          <Auth/>
        </Provider>
      </BrowserRouter>
    )

    expect(container.innerHTML).toMatch('Войти')

    const regLink = getByText('Зарегистрируйтесь')
    expect(regLink).toBeTruthy()

    fireEvent.click(regLink)

    expect(container.innerHTML).toMatch('Зарегистрироваться')

    const authLink = getByText('Войти')
    expect(authLink).toBeTruthy()

    fireEvent.click(authLink)

    expect(container.innerHTML).toMatch('Войти')
  })
})
