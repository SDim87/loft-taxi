import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ authStatus, components, ...props }) => {
  return (
    <>
      {authStatus
        ? <Route {...props} render={() => components}/>
        : <Redirect to="/"/>}
    </>
  )
}

const mapStateToProps = ({ SystemData }) => {
  return {
    authStatus: SystemData.authStatus
  }
}

export default connect(mapStateToProps)(PrivateRoute)
