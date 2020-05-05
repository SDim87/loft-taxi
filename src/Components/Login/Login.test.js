import React, { useContext } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Login from './Login'
import { AuthProvider, AuthContext } from '../AuthContext/AuthContext'

describe('test to login', () => {
  const user = {
    login: 'user',
    pass: 'user',
  }

  const TestComponent = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
      <div data-testid="isLoggedIn-value">{isLoggedIn}</div>
    )
  }

  it('check login fields', () => {
    expect(user.login).toBe('user')
    expect(user.pass).toBe('user')
  })

  it('check login user', () => {
    const { getByTestId } = render(<AuthProvider><Login /><TestComponent/></AuthProvider>)
    const inputLogin = getByTestId('input-login')
    const inputPass = getByTestId('input-pass')
    const btnSubmit = getByTestId('submit')

    fireEvent.change(inputLogin, { target: { value: user.login } })
    fireEvent.change(inputPass, { target: { value: user.pass } })

    fireEvent.click(btnSubmit)
    expect(inputLogin).toBe('user')
  })
})
