import React, { Component } from "react";
import { connect } from "react-redux";
import ResultItem from "../ResultItem/ResultItem";
import mapboxgl from "mapbox-gl";
import "./SearchPage.css";
import moment from "moment";
import { Link } from "react-router-dom";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2phY2sxOTkyIiwiYSI6ImNrYm1vbDE2dDFqMzkyc2swcmV0dWM5ZHAifQ.Z54W_clJ0v_qZQU026H65w";

class SearchPage extends Component {
  state = {
    search: "",
    showDetails: false,
  };

  submitSearch = () => {
    this.props.dispatch({
      type: "FETCH_JOB_SEARCH",
      payload: this.state.search,
    });
    this.setState({
      search: "",
    });
  };

  handleClick = (
    title,
    farmName,
    description,
    state,
    city,
    type,
    paymentPeriod,
    paymentAmount,
    lat,
    long,
    jobProficiencies,
    startDate,
    endDate,
    match,
    userId
  ) => {
    console.log("clicked!");
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lat],
      zoom: 9,
    });
    new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);
    this.setState({
      title: title,
      farmName: farmName,
      description: description,
      state: state,
      city: city,
      type: type,
      paymentPeriod: paymentPeriod,
      paymentAmount: paymentAmount,
      lat: lat,
      long: long,
      jobProficiencies: jobProficiencies,
      startDate: startDate,
      endDate: endDate,
      match: match,
      userId: userId,
      showDetails: true,
    });
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
    console.log(this.state.search);
  };

  render() {
    const strong = [];
    const good = [];
    const weak = [];

    for (let item of this.props.searchResults) {
      let proficiencyCount = 0;
      for (let i = 0; i < item.proficiencies.length; i++) {
        let jobProficiency = item.proficiencies[i];
        for (let j = 0; j < this.props.userProficiencies.length; j++) {
          let userProficiency = this.props.userProficiencies[j];
          if (jobProficiency === userProficiency) {
            proficiencyCount += 1;
          }
        }
      }
      console.log("count!", proficiencyCount);

      console.log("array length", item.proficiencies.length);
      let matchPercentage = proficiencyCount / item.proficiencies.length;
      console.log(matchPercentage);
      let match;
      if (matchPercentage > 0.8) {
        match = "Strong Match";
        console.log(match);
        strong.push(item);
      } else if (matchPercentage > 0.5 && matchPercentage < 0.8) {
        match = "Good Match";
        console.log(match);
        good.push(item);
      } else {
        match = "Weak Match";
        console.log(match);
        weak.push(item);
      }
      console.log(
        "strong:",
        strong,
        "good:",
        good,
        "weak:",
        weak,
        match,
        matchPercentage
      );
    }
    return (
      <div className={'searchPage'}>
        <div>
          <input
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="title, keyword, location"
          ></input>
        </div>
        <div className="searchBox">
          <div>
            <h1>search all jobs</h1>

            <button onClick={this.submitSearch}>Search</button>

            {strong.map((result) => {
              return (
                <ResultItem
                  click={this.handleClick}
                  key={result.id}
                  city={result.city}
                  endDate={result.end_date}
                  farmName={result.farm_name}
                  paymentAmount={result.payment_amount}
                  paymentPeriod={result.payment_period}
                  startDate={result.start_date}
                  state={result.state}
                  title={result.title}
                  type={result.type}
                  jobProficiencies={result.proficiencies}
                  userProficiencies={this.props.userProficiencies}
                  match="Strong match"
                  lat={result.latitude}
                  long={result.longitude}
                  description={result.description}
                  userId={result.user_id}
                />
              );
            })}
            {good.map((result) => {
              return (
                <ResultItem
                  click={this.handleClick}
                  key={result.id}
                  city={result.city}
                  endDate={result.end_date}
                  farmName={result.farm_name}
                  paymentAmount={result.payment_amount}
                  paymentPeriod={result.payment_period}
                  startDate={result.start_date}
                  state={result.state}
                  title={result.title}
                  type={result.type}
                  jobProficiencies={result.proficiencies}
                  userProficiencies={this.props.userProficiencies}
                  match="Good match"
                  lat={result.latitude}
                  long={result.longitude}
                  description={result.description}
                  userId={result.user_id}
                />
              );
            })}
            {weak.map((result) => {
              return (
                <ResultItem
                  click={this.handleClick}
                  key={result.id}
                  city={result.city}
                  endDate={result.end_date}
                  farmName={result.farm_name}
                  paymentAmount={result.payment_amount}
                  paymentPeriod={result.payment_period}
                  startDate={result.start_date}
                  state={result.state}
                  title={result.title}
                  type={result.type}
                  jobProficiencies={result.proficiencies}
                  userProficiencies={this.props.userProficiencies}
                  match="Weak match"
                  lat={result.latitude}
                  long={result.longitude}
                  description={result.description}
                  userId={result.user_id}
                />
              );
            })}
          </div>

          <div className="additionalDetails">
            {this.state.showDetails && (
              <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.farmName}</h3>
                <p>
                  {this.state.city}, {this.state.state}
                </p>
                <p>{this.state.type}</p>
                <p>
                  ${this.state.paymentAmount} {this.state.paymentPeriod}
                </p>
                <p>
                  {moment(this.state.startDate).format("MMM Do, YYYY")} -{" "}
                  {moment(this.state.endDate).format("MMM Do, YYYY")}
                </p>
                <p>{this.state.match}</p>
                <p>{this.state.description}</p>
                <Link to={`/farmProfile/${this.state.userId}`}>
                  Farm profile
                </Link>
           
                <p>{this.state.userId}</p>
              </div>
            )}
            <div
              ref={(el) => (this.mapContainer = el)}
              className="mapContainer"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResults: state.jobSearch,
  userProficiencies: state.matchData,
});

export default connect(mapStateToProps)(SearchPage);
