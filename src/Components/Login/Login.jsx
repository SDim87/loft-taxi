import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../AuthContext/AuthContext'
import { useStyles } from './styles'
import Input from '../Input'
import logo from '../../assets/img/logo.png'

const user = {
  login: 'user',
  pass: 'user',
}

const Login = (props) => {
  const classes = useStyles()
  const { login } = useContext(AuthContext)

  const [dateLogin, setDateLogin] = useState()
  const [datePass, setDatePass] = useState()

  const { setActiveComponent, setActiveMap } = props

  const onClickBtnLogin = (evt) => {
    evt.preventDefault()
    if (dateLogin === user.login && datePass === user.pass) {
      login()
      setActiveComponent('map')
      setActiveMap(true)
    }
  }

  return (
    <article className={classes.login}>
      <img className={classes.logo} src={logo} alt="Логотип"/>
      <div className={classes.popup}>
        <h1>Войти</h1>
        <p className={classes.newUser}>
          Новый пользователь? <span className={classes.link}>Зарегистрируйтесь</span>
        </p>
        <form action="#">
          <div className={classes.groupInput}>
            <Input
              testId="input-login"
              funcOnChange={setDateLogin}
              type={'text'}
              name={'login'}
              label={'Имя пользователя*'}
              />
            <Input
              testId="input-pass"
              funcOnChange={setDatePass}
              type={'password'}
              name={'pass'}
              label={'Пароль*'}
            />
          </div>
          <button onClick={onClickBtnLogin} data-testid="submit">Войти</button>
        </form>
      </div>
    </article>
  )
}

Login.propTypes = {
  setActiveComponent: PropTypes.func,
  setActiveMap: PropTypes.func,
}

export default Login
