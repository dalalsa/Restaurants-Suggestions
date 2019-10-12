import React, { Component } from 'react';
import { Image } from "react-bootstrap";

class RestaurantImage extends Component {
    render() { 
        console.log( this.props.image );

        return <Image src={this.props.image} thumbnail />;
    }
}
 
export default RestaurantImage;