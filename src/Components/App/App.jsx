import React, { useState } from 'react'
import Login from '../Login'
import MapPage from '../MapPage'
import Header from '../Header'
import Profile from '../Profile'

const App = () => {
  const [activeMap, setActiveMap] = useState(null)
  const [activeComponent, setActiveComponent] = useState()

  const routing = () => {
    switch (activeComponent) {
      case 'map':
        return <MapPage />
      case 'profile':
        return <Profile />
      case 'login':
        return <Login />

      default:
        return null
    }
  }

  return (
    <>
      {activeMap ? null : <Login setActiveMap={setActiveMap} />}
      {activeMap ? (
        <>
          <Header setActiveComponent={setActiveComponent} />
          <MapPage />
        </>
      ) : null}
      {routing()}
    </>
  )
}

export default App
