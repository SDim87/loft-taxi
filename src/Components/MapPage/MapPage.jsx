import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZG1pdHJpeS1seW5rYWdlIiwiYSI6ImNrOHpoOXRiajBycG0zZXRhZ256aTUxaG8ifQ.kd3Zw0dq9lwmO03qe9y1ew'

class MapPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 44.9877,
      lat: 53.1923,
      zoom: 10.25,
    }
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })
  }

  render() {
    return (
      <>
        <div className="map" style={{ width: '100%', height: '100%', backgroundColor: '#eee' }}>
          <h1>This Map</h1>
          <div
            className="mapContainer"
            ref={(el) => (this.mapContainer = el)}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
          </div>
        </div>
      </>
    )
  }
}

export default MapPage
