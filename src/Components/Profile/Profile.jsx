import React, { Component } from 'react'

class Profile extends Component {
  render() {
    return (
      <>
        <div
          style={{
            position: 'absolute',
            top: '100px',
            backgroundColor: '#fff',
            width: '100px',
            height: '100px',
          }}
          >
          <h1 style={{ fontSize: '20px' }}>This Profile</h1>
        </div>
      </>
    )
  }
}

export default Profile