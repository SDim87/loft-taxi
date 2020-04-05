import React from 'react'

// const links = [
//   {}
// ]

const Header = (props) => {
  const { setActiveComponent } = props

  return (
    <section style={{ height: '60px' }}>
      <div className="">Logo</div>
      <button onClick={() => setActiveComponent('map')}>Карта</button>
      <button onClick={() => setActiveComponent('profile')}>Профиль</button>
      <button onClick={() => setActiveComponent('login')}>Войти</button>
    </section>
  )
}

export default Header
