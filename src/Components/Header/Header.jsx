import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../AuthContext/AuthContext'
import { useStyles } from './styles'
import logoDark from '../../assets/img/logo-dark.png'

const Header = (props) => {
  const { setActiveComponent, setActiveMap } = props
  const { isLoggedIn, login, logout } = useContext(AuthContext)
  const classes = useStyles()

  return (
    <section className={classes.header}>
      <div className={classes.container}>
        <img src={logoDark} alt="Логотип"/>
        <div className={classes.header_menu}>
          <button onClick={() => setActiveComponent('map')}>Карта</button>
          <button onClick={() => setActiveComponent('profile')}>Профиль</button>
          <button
            onClick={() => {
              if (isLoggedIn) {
                logout()
                setActiveComponent('default')
                setActiveMap(false)
              } else {
                login()
              }
            }}
          >
            {isLoggedIn ? 'Выйти' : 'Войти'}
          </button>
        </div>
      </div>
    </section>
  )
}

Header.propTypes = {
  setActiveComponent: PropTypes.func,
  setActiveMap: PropTypes.func
}

export default Header
