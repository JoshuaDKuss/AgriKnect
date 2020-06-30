import React, { Component } from "react";
import moment from "moment";

class ResultItem extends Component {
  componentDidMount() {
   
  }

  render() {
    // let proficiencyCount = 0;
    // console.log(this.props.jobProficiencies.length)
    // console.log(this.props.userProficiencies)

    // for (let i = 0; i < this.props.jobProficiencies.length; i++) {
    //   let jobProficiency = this.props.jobProficiencies[i];
    //   for (let j = 0; j < this.props.userProficiencies.length; j++) {
    //     let userProficiency = this.props.userProficiencies[j];
    //     if (jobProficiency === userProficiency) {
    //       proficiencyCount += 1;
    //     }
    //   }
    // }
    // console.log(proficiencyCount)
    // console.log(this.props.jobProficiencies.length);
    // let result = proficiencyCount / this.props.jobProficiencies.length;
    // console.log(result);
    // let match;
    // if (result > 0.8) {
    //   match = "Strong Match";
    // } else if (result > 0.5 && result < 0.8) {
    //   match = "Good Match";
    // } else {
    //   match = "Weak Match";
    // }
    // console.log(match);
    return (
      <div>
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
        {/* <p>{this.props.jobProficiencies}</p> */}
        <p>{this.props.match}</p>
        {/* <p>{match} {parseInt(result * 100)}%</p> */}
      </div>
    );
  }
}

export default ResultItem;
