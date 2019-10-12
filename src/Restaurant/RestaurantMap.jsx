import React, { Component } from 'react';
import GoogleMapReact from "google-map-react";
import Marker from "../OtherComponents/Marker";


class RestaurantMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          center={{ lat: this.props.center.lat, lng: this.props.center.lng }}
          zoom={11}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            color='#00cae9'
            name="My Marker"
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
   
  }
  
}
 
export default RestaurantMap;