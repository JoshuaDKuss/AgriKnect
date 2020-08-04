import React, { Component } from "react";
import { connect } from "react-redux";
import ResultItem from "../ResultItem/ResultItem";
import mapboxgl from "mapbox-gl";
import "./SearchPage.css";
import moment from "moment";
import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import pay from "../ResultItem/pay.png";
import date from "../ResultItem/date.png";
import rowCrop from "../ResultItem/rowCrop.png";
import livestock from "../ResultItem/livestock.png";
import dairy from "../ResultItem/dairy.png";
import marker from "../ResultItem/marker.png";
import CheckIcon from '@material-ui/icons/Check';

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2phY2sxOTkyIiwiYSI6ImNrYm1vbDE2dDFqMzkyc2swcmV0dWM5ZHAifQ.Z54W_clJ0v_qZQU026H65w";

class SearchPage extends Component {
  state = {
    search: "",
    showDetails: false,
    opacity: 0
  };

  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_INITIAL_JOBS",
    });
    console.log(this.props.searchResults);
    // this.setState({
    //   title: strong[0].title
    // })
  }

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
    userId,
    housingDetails,
    housing,
    relocation
  ) => {
    
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
      housingDetails: housingDetails,
      housing: housing,
      relocation: relocation,
      opacity: 100
    });
    console.log("clicked!", this.state.relocation, this.state.housingDetails);
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
    console.log(this.state.search);
  };

  render() {
    const strong = [];
    const moderate = [];
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
        strong.push({ item: item, matchPercentage: matchPercentage });
      } else if (matchPercentage > 0.5 && matchPercentage < 0.8) {
        moderate.push({ item: item, matchPercentage: matchPercentage });
      } else {
        weak.push({ item: item, matchPercentage: matchPercentage });
      }
      console.log(
        "strong:",
        strong,
        "good:",
        moderate,
        "weak:",
        weak,
        match,
        matchPercentage
      );
    }
    return (
      <div>
        <div className="searchBox">
          <h1>search all jobs</h1>
          <div>
            <TextField
              className="searchInput"
              id="searchInput"
              // label="TextField"
              value={this.state.search}
              onChange={this.handleChange}
              placeholder="title, keyword, location"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* <input value={this.state.search} onChange={this.handleChange} placeholder="title, keyword, location"></input> */}

            <br />
            <br />
          </div>
          <button className="search" onClick={this.submitSearch}>
            Search
          </button>
        </div>
        <div className="searchContainer">
          <div className="searchList">
            {strong
              .sort((a, b) => (a.matchPercentage < b.matchPercentage ? 1 : -1))
              .map((result) => {
                return (
                  <ResultItem
                    click={this.handleClick}
                    key={result.item.id}
                    city={result.item.city}
                    endDate={result.item.end_date}
                    farmName={result.item.farm_name}
                    paymentAmount={result.item.payment_amount}
                    paymentPeriod={result.item.payment_period}
                    startDate={result.item.start_date}
                    state={result.item.state}
                    title={result.item.title}
                    type={result.item.type}
                    jobProficiencies={result.item.proficiencies}
                    userProficiencies={this.props.userProficiencies}
                    match={result.matchPercentage}
                    lat={result.item.latitude}
                    long={result.item.longitude}
                    description={result.item.description}
                    userId={result.item.user_id}
                    matchLabel="Strong match"
                    relocation={result.item.relocation_stipend}
                    housing={result.item.housing}
                    housingDetails={result.item.housing_details}
                  />
                );
              })}
            {moderate
              .sort((a, b) => (a.matchPercentage < b.matchPercentage ? 1 : -1))
              .map((result) => {
                return (
                  <ResultItem
                    click={this.handleClick}
                    key={result.item.id}
                    city={result.item.city}
                    endDate={result.item.end_date}
                    farmName={result.item.farm_name}
                    paymentAmount={result.item.payment_amount}
                    paymentPeriod={result.item.payment_period}
                    startDate={result.item.start_date}
                    state={result.item.state}
                    title={result.item.title}
                    type={result.item.type}
                    jobProficiencies={result.item.proficiencies}
                    userProficiencies={this.props.userProficiencies}
                    match={result.matchPercentage}
                    lat={result.item.latitude}
                    long={result.item.longitude}
                    description={result.item.description}
                    userId={result.item.user_id}
                    matchLabel="Good match"
                    relocation={result.item.relocation_stipend}
                    housing={result.item.housing}
                    housingDetails={result.item.housing_details}
                  />
                );
              })}
            {weak
              .sort((a, b) => (a.matchPercentage < b.matchPercentage ? 1 : -1))
              .map((result) => {
                return (
                  <ResultItem
                    click={this.handleClick}
                    key={result.item.id}
                    city={result.item.city}
                    endDate={result.item.end_date}
                    farmName={result.item.farm_name}
                    paymentAmount={result.item.payment_amount}
                    paymentPeriod={result.item.payment_period}
                    startDate={result.item.start_date}
                    state={result.item.state}
                    title={result.item.title}
                    type={result.item.type}
                    jobProficiencies={result.item.proficiencies}
                    userProficiencies={this.props.userProficiencies}
                    match={result.matchPercentage}
                    lat={result.item.latitude}
                    long={result.item.longitude}
                    description={result.item.description}
                    userId={result.item.user_id}
                    matchLabel=""
                    relocation={result.item.relocation_stipend}
                    housing={result.item.housing}
                    housingDetails={result.item.housing_details}
                  />
                );
              })}
          </div>

          <div className="additionalDetails" style={{opacity: this.state.opacity}}>
            {this.state.showDetails && (
              <div>
                <div className="jobSearchHeader">
                  <div className="jobSearchTitle">
                    <h3>{this.state.title}</h3>
                    <p style={{ fontSize: 15 }}>{this.state.farmName}</p>
                  
                    {/* <p style={{fontSize: 15}}> {this.props.city}, {this.props.state} </p> */}

                  </div>
                  <Link style={{color: '#419B2A'}} to={`/farmProfile/${this.state.userId}`}>
                    View Profile
                  </Link>
                </div>
                <div className="jobSearchInfo">
                  <div className="jobSearchDetail">
                    {this.state.type === "Row Crop" ? (
                      <img src={marker} style={{ width: 26 }} />
                    ) : this.state.type === "Livestock" ? (
                      <img src={livestock} style={{ width: 45 }} />
                    ) : (
                      <img src={dairy} style={{ width: 45 }} />
                    )}

                    {/* <p style={{ marginTop: 10 }}>{this.props.type}</p> */}
                    <p style={{ marginTop: 10 }}>
                      {this.state.city}, {this.state.state}
                    </p>
                  </div>
                  <div className="jobSearchDetail">
                    <img src={date} />
                    <p>
                      {moment(this.state.startDate).format("MMM Do, YYYY")} -{" "}
                      {moment(this.state.endDate).format("MMM Do, YYYY")}
                    </p>
                  </div>
                  <div className="jobSearchDetail">
                    <img src={pay} />
                    <p>
                      ${this.state.paymentAmount} {this.state.paymentPeriod}
                    </p>
                  </div>
                </div>
                <h3>Description:</h3>
                <p>{this.state.description}</p>
                {this.state.relocation && (
                  <p>- Relocation assistance</p>
                )}
                {this.state.housing && (
                  <p>- Housing included ({this.state.housingDetails})</p>
                )}
              
                {/* /* <h1>{this.state.title}</h1>
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
                <h3>Description:</h3>
                <p>{this.state.description}</p>
                <Link to={`/farmProfile/${this.state.userId}`}>
                  Farm profile
                </Link> */} 
              </div>
            )}
            <div className="map">
            <div
              ref={(el) => (this.mapContainer = el)}
              className="mapContainer"
            />
          </div>
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
