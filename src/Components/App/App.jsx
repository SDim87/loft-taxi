import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../Login'
import MapPage from '../MapPage'
// import Header from '../Header'
import Profile from '../Profile'
import { useStyles } from './styles'

const PageNotFound = () => {
  return (
    <div>
      <h1 style={{ fontSize: '24px', color: '#fff', textAlign: 'center' }}>Страница не найдена</h1>
    </div>
  )
}

const App = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.App}>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/map" component={MapPage} />
          <Route path="/profile" component={Profile} />
          <Route path="*" component={PageNotFound} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  )
}

export default App
