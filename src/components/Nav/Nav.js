import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import Logo from "./Agriknect_logo.png";

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <img src={Logo} alt="AgriKnect logo" id="navLogo" />
    </Link>
    <div className="nav-right">
      {/* <Link className="nav-link" to="/home"> */}
      {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {/* {props.user.id ? "Home" : "Login / Register"}
      </Link> */}
      {props.user.type === 'talent' ? 
          <Link className="nav-link" to="/SearchPage">
          Search Jobs
        </Link>
        :
        null
      }
      {props.user.type === 'employer' ? 
          <Link className="nav-link" to="/jobPosting">
          Post a Job
        </Link>
        :
        null
      }
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id ? (
        <>
          {props.user.type === 'talent' ?
          <Link className="nav-link" to={`/talentProfile/${props.user.id}`}>
            Profile
          </Link>
          :
          props.user.type === 'employer' &&
          <Link className="nav-link" to={`/farmProfile/${props.user.id}`}>
            Profile
          </Link>
          }

          <LogOutButton className="nav-link" />
        </>
      ) : (
        <Link className="nav-link" to="/login">
          Login
        </Link>
      )}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
