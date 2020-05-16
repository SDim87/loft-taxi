import React from 'react'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'
import { drawRoute } from './DrawRoute'

const ACCESS_TOKEN = 'pk.eyJ1IjoiZG1pdHJpeS1seW5rYWdlIiwiYSI6ImNrOHpoOXRiajBycG0zZXRhZ256aTUxaG8ifQ.kd3Zw0dq9lwmO03qe9y1ew'

const styles = {
  position: 'absolute',
  top: '60px',
  left: 0,
  right: 0,
  bottom: 0,
}

class Map extends React.Component {
  map = null;

  mapContainer = React.createRef();

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      accessToken: ACCESS_TOKEN,
      zoom: 10,
      center: [30.27, 60]
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.map.getLayer('route')) {
      this.map.removeLayer('route')
      this.map.removeSource('route')
    }
    drawRoute(this.map, this.props.route)
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    return (
      <div id="page">
        <div id="mapBox" style={styles} ref={this.mapContainer}></div>
      </div>
    )
  }
}

const mapStateToProps = ({ MapData }) => {
  return {
    route: MapData.routeAddresses
  }
}

export default connect(mapStateToProps)(Map)
