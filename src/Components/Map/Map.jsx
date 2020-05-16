import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
// import Header from '../Header'
import { connect } from 'react-redux'
import { fetchAddressList } from '../../Redux/Actions/Actions'


mapboxgl.accessToken = 'pk.eyJ1IjoiZG1pdHJpeS1seW5rYWdlIiwiYSI6ImNrOHpoOXRiajBycG0zZXRhZ256aTUxaG8ifQ.kd3Zw0dq9lwmO03qe9y1ew'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 30.2656505,
      lat: 59.8029127,
      zoom: 10,
    }
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })

    // this.props.fetchAddressList()
  }

  render() {
    return (
      <>
        <div
          className="map"
          style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#eee',
            position: 'relative',
          }}
          >
          <div
            className="mapContainer"
            ref={(el) => (this.mapContainer = el)}
            style={{
              position: 'absolute',
              top: '60px',
              right: 0,
              left: 0,
              bottom: 0,
            }}
          ></div>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = { fetchAddressList }

export default connect(null, mapDispatchToProps)(Map)
