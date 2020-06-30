import React, { Component } from "react";
import moment from "moment";
import mapboxgl from "mapbox-gl";
// import "./SearchPage.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2phY2sxOTkyIiwiYSI6ImNrYm1vbDE2dDFqMzkyc2swcmV0dWM5ZHAifQ.Z54W_clJ0v_qZQU026H65w";

class ResultItem extends Component {
  state = {
    showDetails: false,
  };

  handleClick = () => {
    console.log("clicked!");
    this.setState({
      showDetails: !this.state.showDetails
    })
    console.log(this.state.showDetails)
  };

  render() {
    return (
      <div>
        <div onClick={this.props.click.bind(this, this.props.title, this.props.farmName, this.props.description, this.props.lat, this.props.long)}>
          <h1>{this.props.title}</h1>
          <p>{this.props.farmName}</p>
          <p>
            {this.props.city}, {this.props.state}
          </p>
          <p>{this.props.type}</p>
          <p>
            {moment(this.props.startDate).format("MMM Do, YYYY")} -{" "}
            {moment(this.props.endDate).format("MMM Do, YYYY")}
          </p>
          <p>
            ${this.props.paymentAmount} {this.props.paymentPeriod}
          </p>
          <p>{this.props.match}</p>
        </div>
        {this.state.showDetails === true && 
          <p>{this.props.description}</p>
        } 
      </div>
    );
  }
}

export default ResultItem;
