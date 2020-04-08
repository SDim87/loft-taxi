import React, { Component } from 'react'
import ContextExample from '../ContextExample/ContextExample'

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
              this.props.setActiveComponent('map')
              this.props.setActiveMap(true)
            }}
          >
            Войти
          </button>
          <ContextExample />
        </form>
      </article>
    )
  }
}

export default Login
