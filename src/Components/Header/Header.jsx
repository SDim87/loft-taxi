import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useStyles } from './styles'
import logoDark from '../../assets/img/logo-dark.png'
import Button from '../Button'
import { logout } from '../../Redux/Actions/Actions'

const Header = ({ changeAuthStatus, logout }) => {
  // const { setActiveComponent, setActiveMap } = props
  // const { isLoggedIn, login, logout } = useContext(AuthContext)
  const classes = useStyles()

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
          <Button tag={'link'} to="/" handlerClick={() => logout()}>
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

const mapDispathToProps = { logout }

export default connect(null, mapDispathToProps)(Header)
