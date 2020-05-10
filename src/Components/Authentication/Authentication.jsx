import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useStyles } from './styles'
import Input from '../Input'
import actions from '../../Redux/Actions'
import Button from '../Button'
import { data } from './data'

const Authentication = ({ isActiveForm }) => {
  const classes = useStyles()
  const { changeAuthStatus, changeActiveForm } = actions
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

const mapStateToProps = ({ SystemData }) => {
  return {
    isActiveForm: SystemData.isActiveForm,
  }
}

export default connect(mapStateToProps)(Authentication)
