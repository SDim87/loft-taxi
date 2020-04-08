import React, { Component } from 'react'
import Login from '../Login'
import MapPage from '../MapPage'
import Header from '../Header'
import Profile from '../Profile'

class App extends Component {
  state = {
    activeMap: false,
    activeComponent: '',
  }

  setActiveMap = (value) => {
    this.setState({ activeMap: value })
  }

  setActiveComponent = (value) => {
    this.setState({ activeComponent: value })
  }

  routing = () => {
    switch (this.state.activeComponent) {
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

  render() {
    return (
      <>
        {this.state.activeMap ? null : <Login setActiveMap={this.setActiveMap} />}
        {this.state.activeMap ? (
          <>
            <Header setActiveComponent={this.setActiveComponent} setActiveMap={this.setActiveMap}/>
            <MapPage />
          </>
        ) : null}
        {this.routing()}
      </>
    )
  }
}

export default App
