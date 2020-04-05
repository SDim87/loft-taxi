import React from 'react'
// import MapPage from '../MapPage'

const Login = (props) => {
  const { setActiveMap } = props

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
            setActiveMap(true)
          }}
        >
          Войти
        </button>
      </form>
    </article>
  )
}

export default Login
