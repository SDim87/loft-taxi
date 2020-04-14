import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    setActiveComponent: PropTypes.func,
    setActiveMap: PropTypes.func,
    obj: PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    obj: {
      name: 'Vasia',
      lastName: 'Ivanov',
    },
  }

  render() {
    return (
      <section
        style={{
          height: '60px',
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
          zIndex: 2,
          backgroundColor: '#fff'
        }}
        >
        <div className="">Logo</div>
        {console.log(this.props.obj)}
        <button onClick={() => this.props.setActiveComponent('map')}>Карта</button>
        <button onClick={() => this.props.setActiveComponent('profile')}>Профиль</button>
        <button
          onClick={() => {
            this.props.setActiveComponent('default')
            this.props.setActiveMap(false)
          }}
        >
          Войти
        </button>
      </section>
    )
  }
}

export default Header
