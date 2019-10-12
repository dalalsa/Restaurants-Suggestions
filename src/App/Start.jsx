import React, { Component } from "react";
import RestaurantContainer from "../Restaurant/RestaurantContainer";
import {Button,Image} from "react-bootstrap";
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmptyState: true,

      userlocation: [0, 0]
    };
  }

  componentDidMount() {
    this.getUserLocation();
  }
  triggerStartState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isStartState: true
    });
  };

  getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  };

  showPosition = position => {
    this.setState({
      userlocation: [position.coords.latitude, position.coords.longitude]
    });
  };

  render() {
    return (
     
        
          <div >
           
            {this.state.isEmptyState && (
              <StartButton start={this.triggerStartState} />
            )}

            {this.state.isStartState && (
              <RestaurantContainer userlocation1={this.state.userlocation} />
            )}
          </div>
      
    );
  }
}

export default Start;

export const StartButton = props => {
  return (
    <div>
      <Image src="logo512.png" thumbnail />

      <h1>Wain Nakel</h1>
      <Button variant="info" size="lg" onClick={props.start}>
        Suggest Restaurant
      </Button>
    </div>
  );
};
