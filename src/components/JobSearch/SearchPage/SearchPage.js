import React, { Component } from "react";
import { connect } from "react-redux";
import ResultItem from "../ResultItem/ResultItem";
import mapboxgl from "mapbox-gl";
import './SearchPage.css';
// import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2phY2sxOTkyIiwiYSI6ImNrYm1vbDE2dDFqMzkyc2swcmV0dWM5ZHAifQ.Z54W_clJ0v_qZQU026H65w";

class SearchPage extends Component {
  state = {
    search: "",
    lng: -93,
    lat: 45,
    zoom: 9,
  };



  componentDidMount() {
 
    //   map.on("move", () => {
    //     this.setState({
    //       lng: map.getCenter().lng.toFixed(4),
    //       lat: map.getCenter().lat.toFixed(4),
    //       zoom: map.getZoom().toFixed(2),
    //     });
    //   });
  
      
  }

  submitSearch = () => {
    console.log("submitted!");
    this.props.dispatch({
      type: "FETCH_JOB_SEARCH",
      payload: this.state.search,
    });
    this.setState({
      search: "",
    });
    const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
      });
      
    //   console.log(this.props.searchResults[0])
    //   new mapboxgl.Marker().setLngLat([this.props.searchResults.latitude, this.props.searchResults.longitude]).addTo(map);
    
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
      <div className="searchBox">
        {/* <div className="sidebarStyle">
          Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
          {this.state.zoom}
        </div> */}
        <div>
          <div
            ref={(el) => (this.mapContainer = el)}
            className="mapContainer"
          />
        </div>
        <h1>search all jobs</h1>
        <div>
          <input
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="title, keyword, location"
          ></input>
        </div>
        <button onClick={this.submitSearch}>Search</button>

        {strong.map((result) => {
          return (
            <ResultItem
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
            />
          );
        })}
        {good.map((result) => {
          return (
            <ResultItem
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
            />
          );
        })}
        {weak.map((result) => {
          return (
            <ResultItem
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
            />
          );
        })}
        {JSON.stringify(this.props.matchData)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResults: state.jobSearch,
  userProficiencies: state.matchData,
});

export default connect(mapStateToProps)(SearchPage);
