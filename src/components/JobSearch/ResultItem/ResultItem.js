import React, { Component } from "react";
import moment from 'moment';

class ResultItem extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.farmName}</p>
        <p>{this.props.city}, {this.props.state}</p>
        <p>{this.props.type}</p>
        <p>{moment(this.props.startDate).format("MMM Do, YYYY")} - {moment(this.props.endDate).format("MMM Do, YYYY")}</p>
        <p>${this.props.paymentAmount} {this.props.paymentPeriod}</p>
      </div>
    );
  }
}

export default ResultItem;
