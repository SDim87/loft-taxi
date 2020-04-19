/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import PropTypes, { object } from 'prop-types'
import { AuthContext } from '../AuthContext/AuthContext'

const Login = (props) => {
  const obj = useContext(AuthContext)
  // console.log('Login -> stateLogin', stateLogin)

  const { setActiveComponent, setActiveMap } = props
  return (
    <article>
      <h2>Войти</h2>
      <form action="#">
        <div className="">
          <label htmlFor="login">Имя пользователя*</label>
          <input type="text" name="login" id="login" />
        </div>
        <div className="">
          <label htmlFor="pass">Пароль*</label>
          <input type="password" name="pass" id="pass" />
        </div>
        <button
          onClick={(evt) => {
            evt.preventDefault()
            obj.objLogin.login()
            setActiveComponent('map')
            setActiveMap(true)
          }}
        >
          Войти
        </button>
      </form>
    </article>
  )
}

Login.propTypes = {
  setActiveComponent: PropTypes.func,
  setActiveMap: PropTypes.func,
}

export default Login
