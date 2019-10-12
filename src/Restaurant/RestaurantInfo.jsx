import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./RestaurantContainer.css";
class RestaurantInfo extends Component {
  render() {
    return (
      <Card className="card">
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.category} - {this.props.rate} / 10
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default RestaurantInfo;
