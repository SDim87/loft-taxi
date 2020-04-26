import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import { Input } from '@material-ui/core'
import { AuthContext } from '../AuthContext/AuthContext'
import { useStyles } from './styles'
import Input from '../Input'

const user = {
  login: 'user',
  pass: 'user',
}

const Login = (props) => {
  const classes = useStyles()
  const obj = useContext(AuthContext)
  const [dateLogin, setDateLogin] = useState()
  const [datePass, setDatePass] = useState()

  const { setActiveComponent, setActiveMap } = props

  const onClickBtnLogin = (evt) => {
    evt.preventDefault()
    if (dateLogin === user.login && datePass === user.pass) {
      obj.objLogin.login()
      setActiveComponent('map')
      setActiveMap(true)
    }
  }

  return (
    <article className={classes.login}>

      <div className={classes.popup}>
        <h1>Войти</h1>
        <p className={classes.newUser}>
          Новый пользователь? <span className={classes.link}>Зарегистрируйтесь</span>
        </p>
        <form action="#">
          <div className={classes.groupInput}>
            <Input
              funcOnChange={setDateLogin}
              type={'text'}
              name={'login'}
              label={'Имя пользователя*'}
            />
            <Input
              funcOnChange={setDatePass}
              type={'password'}
              name={'pass'}
              label={'Пароль*'}
            />
          </div>
          <button onClick={onClickBtnLogin}>Войти</button>
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
