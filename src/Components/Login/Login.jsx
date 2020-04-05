import React, { Component } from 'react'

class Login extends Component {
  render() {
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
              this.props.setActiveMap(true)
            }}
          >
            Войти
          </button>
        </form>
      </article>
    )
  }
}

export default Login
