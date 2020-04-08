import React, { Component } from 'react'
import Login from '../Login'
import MapPage from '../MapPage'
import Header from '../Header'
import Profile from '../Profile'

class App extends Component {
  state = {
    activeMap: false,
    activeComponent: '',
    obj: {
      name: 'Dima',
      lastName: 'Sorokin',
    },
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

      default:
        return (
          <Login setActiveComponent={this.setActiveComponent} setActiveMap={this.setActiveMap} />
        )
    }
  }

  render() {
    return (
      <>
        {this.state.activeMap ? (
          <Header setActiveComponent={this.setActiveComponent} setActiveMap={this.setActiveMap} />
        ) : null}
        {this.routing()}
      </>
    )
  }
}

export default App
