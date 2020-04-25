import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext'

const user = {
  login: 'user',
  pass: 'user',
}


const Login = (props) => {
  const obj = useContext(AuthContext)
  const [dateLogin, setDateLogin] = useState()
  const [datePass, setDatePass] = useState()

  const { setActiveComponent, setActiveMap } = props
  return (
    <article>
      <h2>Войти</h2>
      <form action="#">
        <div className="">
          <label htmlFor="login">Имя пользователя*</label>
          <input
            type="text"
            name="login"
            id="login"
            onChange={(evt) => setDateLogin(evt.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="pass">Пароль*</label>
          <input
            type="password"
            name="pass"
            id="pass"
            onChange={(evt) => setDatePass(evt.target.value)}
          />
        </div>
        <button
          onClick={(evt) => {
            evt.preventDefault()
            if (dateLogin === user.login && datePass === user.pass) {
              obj.objLogin.login()
              setActiveComponent('map')
              setActiveMap(true)
            }
          }}
        >
          Войти
        </button>
        <p>
          Новый пользователь? <span to="/registration">Зарегистрируйтесь</span>
        </p>
      </form>
    </article>
  )
}

Login.propTypes = {
  setActiveComponent: PropTypes.func,
  setActiveMap: PropTypes.func,
}

export default Login
