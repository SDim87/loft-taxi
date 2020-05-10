import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'
import Input from '../Input'
import actions from '../../Redux/Actions'
import Button from '../Button'

const Authentication = () => {
  const classes = useStyles()
  const { changeAuthStatus } = actions

  const [dateLogin, setDateLogin] = useState()
  console.log('Authentication -> dateLogin', dateLogin)
  const [datePass, setDatePass] = useState()
  console.log('Authentication -> datePass', datePass)

  return (
    <div className={classes.popup}>
      <h1>Войти</h1>
      <p className={classes.newUser}>
        Новый пользователь?{' '}
        <Link to="/reg" className={classes.link}>
          Зарегистрируйтесь
        </Link>
      </p>
      <form action="#" method="POST">
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
        <div className={classes.btn__wrap}>
          <Button
            tag="link"
            style={'brand'}
            to={'/map'}
            handlerClick={() => changeAuthStatus(true)}
            data-testid="submit"
          >
            Войти
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Authentication
