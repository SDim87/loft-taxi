import React from 'react'
import { render } from '@testing-library/dom'
import Login from './Login'

describe('test to login', () => {
  const user = {
    login: 'user',
    pass: 'user',
  }

  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const login = () => setIsLoggedIn(true)
  // const logout = () => setIsLoggedIn(false)


  it('check login fields', () => {
    expect(user.login).toBe('user')
    expect(user.pass).toBe('user')
  })

  it('check login user', () => {
    const { componentLogin } = render(<Login />)
    expect(componentLogin('login')).toBeTruthy()
    // .expect(user)
    // .toBeTruthy()
  })
})
