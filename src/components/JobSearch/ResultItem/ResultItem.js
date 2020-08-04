import React, { Component } from "react";
import moment from "moment";
import mapboxgl from "mapbox-gl";
import "./ResultItem.css";
import industry from "./industry.png";
import pay from "./pay.png";
import date from "./date.png";
import rowCrop from "./rowCrop.png";
import livestock from "./livestock.png";
import dairy from "./dairy.png";
import marker from "./marker.png";

class ResultItem extends Component {
  state = {
    showDetails: false,
  };

  componentDidMount() {
    console.log('LOOK!!', this.props.relocation, this.props.housing)
  }
  // handleClick = () => {
  //   console.log("clicked!");
  //   this.setState({
  //     showDetails: !this.state.showDetails
  //   })
  //   console.log(this.state.showDetails)
  // };

  render() {
    {let percentage = this.props.match *  185}

    return (
      <div
        className="jobBox"
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
          this.props.userId,
          this.props.housingDetails,
          this.props.housing,
          this.props.relocation
        )}
      >
        <div className="jobSearchHeader">
          <div className="jobSearchTitle">
            <h3>{this.props.title}</h3>
            <p style={{fontSize: 15}}>{this.props.farmName}</p>

            {/* <p style={{fontSize: 15}}> {this.props.city}, {this.props.state} </p> */}

          </div>
          <div className="match">
            <svg>
              <circle cx="50" cy="50" r="30" ></circle>
              <circle cx="50" cy="50" r="30" strokeDashoffset={`calc((116 * 3.14) - ${this.props.match} * 188)`}></circle>
            </svg>
            <div className="matchLabel">
            <p>{this.props.matchLabel}</p>
            </div>
            
          </div>
        </div>
        <div className="jobSearchInfo">
          <div className="jobSearchDetail">
          <img src={marker} style={{ width: 26 }}/>
            {/* {this.props.type === "Row Crop" ? (
              <img src={rowCrop} style={{ width: 45 }}/>
            ) : this.props.type === "Livestock" ? (
              <img src={livestock} style={{ width: 45 }} />
            ) : (
              <img src={dairy} style={{ width: 45 }} />
            )} */}

            {/* <p style={{ marginTop: 10 }}>{this.props.type}</p> */}
            <p style={{ marginTop: 10 }}>{this.props.city}, {this.props.state}</p>
          </div>
          <div className="jobSearchDetail">
            <img src={date} />
            <p>
              {moment(this.props.startDate).format("MMM Do, YYYY")} -{" "}
              {moment(this.props.endDate).format("MMM Do, YYYY")}
            </p>
          </div>
          <div className="jobSearchDetail">
            <img src={pay} />
            <p>
              ${this.props.paymentAmount} {this.props.paymentPeriod}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultItem;
