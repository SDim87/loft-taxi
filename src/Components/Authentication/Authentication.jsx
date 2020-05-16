import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useStyles } from './styles'
import Input from '../Input'
import { changeAuthStatus, changeActiveForm, login } from '../../Redux/Actions/Actions'
import Button from '../Button'
import { data } from './data'

const Authentication = ({
  isActiveForm, changeAuthStatus, changeActiveForm, login
}) => {
  const classes = useStyles()
  const [valueInput, setValueInput] = useState({})

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
      <h1>Войти</h1>
      <p className={classes.newUser}>
        Новый пользователь?{' '}
        <span className={classes.link} onClick={() => changeActiveForm(!isActiveForm)}>
          Зарегистрируйтесь
        </span>
      </p>
      <form action="#" method="POST">
        <div className={classes.groupInput}>{generateInputs(data)}</div>
        <div className={classes.btn__wrap}>
          <Button
            style={'brand'}
            handlerClick={(evt) => {
              evt.preventDefault()
              login(valueInput)
            }}
            testId="btn-login"
          >
            Войти
          </Button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ SystemData }) => {
  return {
    isActiveForm: SystemData.isActiveForm,
  }
}

const mapDispatchToProps = { changeAuthStatus, changeActiveForm, login }

Authentication.propTypes = {
  isActiveForm: PropTypes.bool,
  changeAuthStatus: PropTypes.func,
  changeActiveForm: PropTypes.func,
  login: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)
