import React, { Component } from 'react'; 
import Skills from '../Skills/Skills'; 
import ExpertiseLevel from '../ExpertiseLevel/ExpertiseLevel'; 
import Equipment from '../Equipment/Equipment'; 
import Brands from '../Brands/Brands';
import Certifications from '../Certifications/Certifications'; 
import Education from '../Education/Education'; 
import Employment from '../Employment/Employment'; 
import Location from '../Location/Location';
import Bio from '../Bio/Bio'; 
import ReviewPage from '../ReviewPage/ReviewPage';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button } from '@material-ui/core';

export class TalentForm extends Component {
    state = {
        formCounter: 0,
       
    }

    //changes this.state.formCounter so that the correct part of the form is rendered to the page
    changeFormCounter = (event, property) => {
        if(property === 'add') {
            this.setState({
                ...this.state,
                formCounter: this.state.formCounter + 1
            })
            console.log(this.state.formCounter)
        } else {
            this.setState({
                ...this.state,
                formCounter: this.state.formCounter - 1
            })
            console.log(this.state.formCounter)
        }
    }

    render() {
        let formToShow = <span> </span>
        if (this.state.formCounter === 0) {
            formToShow =  <Education />
        } else if (this.state.formCounter === 1) {
            formToShow = <Employment /> 
        } else if (this.state.formCounter === 2) {
            formToShow = <Certifications />
        } else if (this.state.formCounter === 3) {
            formToShow = <Skills /> 
        } else if (this.state.formCounter === 4) {
            formToShow = <ExpertiseLevel /> 
        } else if (this.state.formCounter === 5) {
            formToShow =  <Equipment />
        } else if (this.state.formCounter === 6) {
            formToShow =  <Brands /> 
        } else if (this.state.formCounter === 7) {
            formToShow = <Location />
        } else if (this.state.formCounter === 8) {
            formToShow = <Bio />
        } else if (this.state.formCounter ===9) {
            formToShow = <ReviewPage />
        }
        return (
            <div>
               <h1> Talent Form </h1> 
        
            {formToShow}

            {/* <button onClick={(event) => this.changeFormCounter(event, 'subtract')}> Back </button>  */}
            <Button variant="outlined" onClick={(event) => this.changeFormCounter(event, 'add')}> Next</Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
  });

TalentForm.propTypes = { classes: PropTypes.object.isRequired };

export default connect(mapStateToProps)(withStyles(styles)(TalentForm)); 
