import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from '../Auth'
import MapPage from '../MapPage'
import Profile from '../Profile'
import { useStyles } from './styles'
import PrivateRoute from '../PrivateRoute'
import Header from '../Header'

const App = ({ authStatus }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.App}>
        {authStatus ? <Header/> : null}
        <Switch>
          {!authStatus && <Route path="/" component={Auth}/>}
          <PrivateRoute path="/map" components={<MapPage/>} />
          <PrivateRoute path="/profile" components={<Profile/>} />
          <Redirect to="/map" />
        </Switch>
      </div>
    </>
  )
}

const mapStateToProps = ({ SystemData }) => {
  return {
    authStatus: SystemData.authStatus,
  }
}

export default connect(mapStateToProps)(App)
