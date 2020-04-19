import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../AuthContext/AuthContext'

const Header = (props) => {
  const { setActiveComponent, setActiveMap } = props
  const obj = useContext(AuthContext)

  return (
    <section
      style={{
        height: '60px',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 2,
        backgroundColor: '#fff',
      }}
      >
      <div className="">Logo</div>
      <button onClick={() => setActiveComponent('map')}>Карта</button>
      <button onClick={() => setActiveComponent('profile')}>Профиль</button>
      <button
        onClick={() => {
          if (obj.objLogin.isLoggedIn) {
            obj.objLogin.logout()
            setActiveComponent('default')
            setActiveMap(false)
          } else {
            obj.objLogin.login()
          }
        }}
      >
        {obj.objLogin.isLoggedIn ? 'Выйти' : 'Войти'}
      </button>
    </section>
  )
}

Header.propTypes = {
  setActiveComponent: PropTypes.func,
  setActiveMap: PropTypes.func
}

export default Header
