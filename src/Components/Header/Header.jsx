/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import { AuthContext } from '../AuthContext/AuthContext'
import { useStyles } from './styles'
import logoDark from '../../assets/img/logo-dark.png'
import Button from '../Button'
import actions from '../../Redux/Actions'

const Header = (props) => {
  // const { setActiveComponent, setActiveMap } = props
  // const { isLoggedIn, login, logout } = useContext(AuthContext)
  const classes = useStyles()
  const { changeAuthStatus } = actions

  return (
    <section className={classes.header}>
      <div className={classes.container}>
        <img src={logoDark} alt="Логотип" />
        <div className={classes.nav}>
          <Button tag={'link'} to="/map">
            Карта
          </Button>
          <Button tag={'link'} to="/profile">
            Профиль
          </Button>
          <Button tag={'link'} to="/" handlerClick={() => changeAuthStatus(false)}>
            Выйти
          </Button>
        </div>
      </div>
    </section>
  )
}

Header.propTypes = {
  setActiveComponent: PropTypes.func,
  setActiveMap: PropTypes.func,
}

export default Header
