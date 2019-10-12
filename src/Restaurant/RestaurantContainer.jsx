import React, { Component } from "react";
import RestaurantMap from "./RestaurantMap";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantImage from "./RestaurantImage";
import { Button, Container} from "react-bootstrap";
import Header from "../App/Header";
import "../App/Header.css";

import "./RestaurantContainer.css";

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: this.props.userlocation1[0],
        lng: this.props.userlocation1[1]
      },
      zoom: 11,
      info: {
        title: "Resturant Name",
        category: "Category",
        rate: 0,
        image: ""
      },
      requestStatus: "faild"
    };
    console.log(this.props.userlocation1[0]);
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid=${
        this.props.userlocation1[0]
      },${this.props.userlocation1[1]}&g et_param=value`,
      {
        method: "GET",
        headers: { Accept: "application/json" }
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          center: { lat: parseFloat(data.lat), lng: parseFloat(data.lon) },

          info: {
            title: data.name,
            category: data.cat,
            rate: data.rating,
            image: data.image
          }
        });
      })

      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.info.image);
    const { requestStatus } = this.state;
    //  if  (requestStatus == 'faild') return <h1>Opps something went wrong with the api</h1>;
    return (
      <Container>
        <div id="box-wrapper">
          <Header />
          <RestaurantInfo
            title={this.state.info.title}
            category={this.state.info.category}
            rate={this.state.info.rate}
          />
        </div>
        <div id="map-wrapper">
          <div id="map">
            <RestaurantMap center={this.state.center} />
          </div>
          <div id="button-wrapper">
            <Button variant="info" size="lg" onClick={this.fetchData}>
              Suggest New
            </Button>
          </div>

          <div id="img-wrapper">
            <RestaurantImage image={this.state.info.image} />
          </div>
        </div>
      </Container>
    );
  }
}

export default RestaurantContainer;
