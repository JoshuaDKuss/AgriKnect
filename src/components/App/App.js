import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Home from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage'; //currently not shown anywhere because was at /home
import InfoPage from '../InfoPage/InfoPage';
import TalentForm from '../Talent/TalentForm/TalentForm'; 
import FarmForm from '../Farm/FarmForm/FarmForm';
import TalentProfile from '../TalentProfile/TalentProfile'
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'}); 
    this.props.dispatch({
      type: 'FETCH_PROFICIENCIES'
    })
  }

 

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <Route
              exact
              path="/home"
              component={Home}
            />
             <Route
              exact
              path="/register"
              component={RegisterPage}
            />
              <Route
              exact
              path="/login"
              component={LoginPage}
            />
            <ProtectedRoute
              exact
              path="/talentForm"
              component={TalentForm}
            />
            <ProtectedRoute
              exact
              path="/farmForm"
              component={FarmForm}
            />
            <ProtectedRoute
              exact
              path="/talentProfile/:id"
              component={TalentProfile}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
