import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from '../Auth'
import MapPage from '../MapPage'
import Profile from '../Profile'
import { useStyles } from './styles'
import PrivateRoute from '../PrivateRoute'

const App = ({ authStatus }) => {
  const classes = useStyles()

  // Store.subscribe(() => localStorage.setItem('state', JSON.stringify(Store.getState())))

  return (
    <>
      <div className={classes.App}>
        {authStatus ? (
          <>
            <Switch>
              <PrivateRoute path="/map" components={<MapPage/>} />
              <PrivateRoute path="/profile" components={<Profile/>} />
            </Switch>
            <Redirect to="/map" />
          </>
        ) : (
          <>
            <Route path="/" component={Auth}/>
            <Redirect to="/" />
          </>
        )}
        {/* <Switch>
          <Route path="/" component={Auth} exact />
          <Route path="/map" component={MapPage} />
          <Route path="/profile" component={Profile} />
        </Switch> */}
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
