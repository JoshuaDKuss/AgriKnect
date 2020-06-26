import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <p>{this.props.user.first_name}</p>
        <div className="getStartedContainer">
            <p>Looking for an agriculture job?</p>
            <p>Find jobs that match your skills</p>
            <p>-- or --</p>
            <p>Hiring for a farm?</p>
            <p>Find qualified workers to fill your open positions</p>
          <Link className="getStartedBtn" to="/about">
            Get Started
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomePage);
