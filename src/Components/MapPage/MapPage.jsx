import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%',
}

export class MapPage extends Component {
  render() {
    return (
      <>
        <div className="map" style={{ width: '400px', height: '100%' }}>
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 53.19446, lng: 45.013211 }}
          >
            <Marker position={{ lat: 53.19446, lng: 45.013211 }} />
          </Map>
        </div>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD0jTqK70RYSqw8hcMvxc5SRzP79l9-GWo',
})(MapPage)
