import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <section style={{ height: '60px' }}>
        <div className="">Logo</div>
        <button onClick={() => this.props.setActiveComponent('map')}>Карта</button>
        <button onClick={() => this.props.setActiveComponent('profile')}>Профиль</button>
        <button onClick={() => this.props.setActiveComponent('login')}>Войти</button>
      </section>
    )
  }
}

export default Header
