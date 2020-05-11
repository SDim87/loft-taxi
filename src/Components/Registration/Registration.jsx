import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useStyles } from './styles'
import Input from '../Input'
import { changeAuthStatus, changeActiveForm, registration } from '../../Redux/Actions/Actions'
import Button from '../Button'
import { data } from './data'

const Registration = ({
  isActiveForm,
  changeAuthStatus,
  changeActiveForm,
  registration,
  isRegistration,
  authStatus
}) => {
  const classes = useStyles()
  const [valueInput, setValueInput] = useState({})
  // console.log('Registration -> valueInput', valueInput)

  useEffect(() => {
    if (isRegistration) {
      changeAuthStatus(!authStatus)
    }
  }, [isRegistration])

  const generateInputs = (arr) => {
    return arr.map((el, i) => {
      return (
        <Input
          key={`${el.testId}${i}`}
          testId={el.testId}
          type={el.type}
          name={el.name}
          label={el.label}
          required={'required'}
          valueInput={valueInput}
          setValueInput={setValueInput}
        />
      )
    })
  }

  return (
    <div className={classes.popup}>
      <h1>Регистрация</h1>
      <p className={classes.newUser}>
        Уже зарегистрирован?{' '}
        <span className={classes.link} onClick={() => changeActiveForm(!isActiveForm)}>
          Войти
        </span>
      </p>
      <form action="#" method="POST">
        <div className={classes.groupInput}>{generateInputs(data)}</div>
        <div className={classes.btn__wrap}>
          <Button
            tag="link"
            style={'brand'}
            to={'/map'}
            handlerClick={() => {
              registration(valueInput)
            }}
            data-testid="submit"
          >
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ SystemData }) => {
  return {
    isRegistration: SystemData.registration.success,
    isActiveForm: SystemData.isActiveForm,
    authStatus: SystemData.authStatus,
  }
}

const mapDispatchToProps = { changeAuthStatus, changeActiveForm, registration }

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
