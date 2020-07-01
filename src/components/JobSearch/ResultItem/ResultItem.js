import React, { Component } from "react";
import moment from "moment";
import mapboxgl from "mapbox-gl";
// import "./SearchPage.css";

class ResultItem extends Component {
  state = {
    showDetails: false,
  };

  // handleClick = () => {
  //   console.log("clicked!");
  //   this.setState({
  //     showDetails: !this.state.showDetails
  //   })
  //   console.log(this.state.showDetails)
  // };

  render() {
    return (
      <div>
        <div
          onClick={this.props.click.bind(
            this,
            this.props.title,
            this.props.farmName,
            this.props.description,
            this.props.state,
            this.props.city,
            this.props.type,
            this.props.paymentPeriod,
            this.props.paymentAmount,
            this.props.lat,
            this.props.long,
            this.props.jobProficiencies,
            this.props.startDate,
            this.props.endDate,
            this.props.match,
            this.props.userId
          )}
        >
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
        {/* {this.state.showDetails === true && 
          <p>{this.props.description}</p>
        }  */}
      </div>
    );
  }
}

export default ResultItem;
