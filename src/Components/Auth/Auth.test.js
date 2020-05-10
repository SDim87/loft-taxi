// import React, { useContext } from 'react'
// import { render, fireEvent } from '@testing-library/react'
// import Auth from './Auth'
// import { AuthProvider, AuthContext } from '../AuthContext/AuthContext'

// describe('test login', () => {
//   const user = {
//     login: 'user',
//     pass: 'user',
//   }

//   const TestComponent = () => {
//     const { isLoggedIn } = useContext(AuthContext)

//     return (
//       <div data-testid="isLoggedIn">{isLoggedIn}</div>
//     )
//   }

//   it('check login and password', () => {
//     const setActiveComponent = jest.fn()
//     const setActiveMap = jest.fn()
//     const login = jest.fn()

//     const { getByTestId } = render(
//       <AuthProvider>
//         <Auth setActiveComponent={setActiveComponent} setActiveMap={setActiveMap} login={login}/>
//         <TestComponent />
//       </AuthProvider>
//     )

//     const inputLogin = getByTestId('input-login')
//     const inputPass = getByTestId('input-pass')
//     const btnSubmit = getByTestId('submit')
//     const isLoggedIn = getByTestId('isLoggedIn')

//     fireEvent.change(inputLogin, { target: { value: user.login } })
//     fireEvent.change(inputPass, { target: { value: user.pass } })

//     fireEvent.click(btnSubmit)

//     // проверка на значения полей
//     expect(inputLogin.value).toBe('user')
//     expect(inputPass.value).toBe('user')
//     // проверка на login
//     expect(isLoggedIn).toBeTruthy()
//   })
// })
