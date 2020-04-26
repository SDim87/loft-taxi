import React, { useState } from 'react'
import Login from '../Login'
import MapPage from '../MapPage'
import Header from '../Header'
import Profile from '../Profile'
import { useStyles } from './styles'

const App = () => {
  const classes = useStyles()
  const [activeMap, setActiveMap] = useState(false)
  const [activeComponent, setActiveComponent] = useState('')

  const routing = () => {
    switch (activeComponent) {
      case 'map':
        return <MapPage />
      case 'profile':
        return <Profile />

      default:
        return (
          <Login
            setActiveComponent={setActiveComponent}
            setActiveMap={setActiveMap}
            // stateLogin={stateLogin}
          />
        )
    }
  }

  return (
    <>
      <div className={classes.App}>
        {activeMap ? (
          <Header setActiveComponent={setActiveComponent} setActiveMap={setActiveMap} />
        ) : null}
        {routing()}
      </div>
    </>
  )
}

export default App
