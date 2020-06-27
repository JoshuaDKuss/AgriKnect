import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <h1 className="homeStatement">Connecting farmers and agriculture workers</h1>
        {this.props.user.id ? 
        <h1>Welcome, {this.props.user.first_name}!</h1> 
        :
        <div>
          <h1 className="homeTitle">Get Started</h1>
          <div className="getStarted">
            <p className="question">Looking for an agriculture job?</p>
            <p>Find jobs that match your skills</p>
            <p style={{color: '#419B2A'}}>-- or --</p>
            <p className="question">Hiring for a farm?</p>
            <p>Find qualified workers to fill your open positions</p>
            <Link className="getStartedBtn" to="/register">
              Create Account
            </Link>
          </div>
        </div>
    }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  login: state.loginMode
});

export default connect(mapStateToProps)(HomePage);
