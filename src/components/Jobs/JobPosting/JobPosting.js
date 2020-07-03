import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button, Grid } from '@material-ui/core';
import JobDescription from '../JobDescription/JobDescription';
import JobSkills from '../JobSkills/JobSkills';
import JobEquipment from '../JobEquipment/JobEquipment';
import JobRelocation from '../JobRelocation/JobRelocation';
import JobPay from '../JobPay/JobPay';
import JobBrands from '../JobBrands/JobBrands';
import JobReview from '../JobReview/JobReview'; 
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';


export class JobPosting extends Component {
    state = {
        formCounter: 0,

    }

    //changes this.state.formCounter so that the correct part of the form is rendered to the page
    changeFormCounter = (event, property) => {
        if (property === 'add') {
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
        let colorOne = ''
        if (this.state.formCounter === 0 ) {
            colorOne = 'primary'
        } else {
            colorOne = ''
        }

        let colorTwo = ''
        if (this.state.formCounter === 1) {
            colorTwo = 'primary'
        } else {
            colorTwo = ''
        }

        let colorThree = ''
        if (this.state.formCounter === 2 || this.state.formCounter === 3) {
            colorThree = 'primary'
        } else {
            colorThree = ''
        }

        let colorFour = ''
        if (this.state.formCounter === 4 ) {
            colorFour = 'primary'
        } else {
            colorFour = ''
        }

        let colorFive = ''
        if (this.state.formCounter === 5) {
            colorFive = 'primary'
        } else {
            colorFive = ''
        }
        let colorSix = ''
        if (this.state.formCounter === 6) {
            colorSix = 'primary'
        } else {
            colorSix = ''
        }
        let formToShow = <span> </span>
        if (this.state.formCounter === 0) {
            formToShow = <JobDescription />
        } else if (this.state.formCounter === 1) {
            formToShow = <JobSkills />
        } else if (this.state.formCounter === 2) {
            formToShow = <JobEquipment />
        } else if (this.state.formCounter === 3) {
            formToShow = <JobBrands />
        }else if (this.state.formCounter === 4) {
            formToShow = <JobRelocation />
        } else if (this.state.formCounter === 5) {
            formToShow = <JobPay />
        } else if (this.state.formCounter === 6) {
            formToShow = <JobReview />
        } 

        let backButton = <span></span>
        if (this.state.formCounter === 0) {
            backButton = <span> </span>
        } else {
            backButton= <Button outline="variant" onClick={(event) => this.changeFormCounter(event, 'subtract')}> Back </Button> 
        }

        let nextButton = <span></span>
        if (this.state.formCounter === 6) {
            nextButton = <span></span>
        } else {
            nextButton = <Button variant="outlined" onClick={(event) => this.changeFormCounter(event, 'add')}> Next</Button>
        }
        return (
            <Grid container direction="row" alignItems="top" spacing={2}>
                <Grid item xs={4} >

                    <Timeline align="right">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color={colorOne} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Job Description</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color={colorTwo} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Skills</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color={colorThree} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Equipment and <div> Brand Experience </div></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color={colorFour} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Housing</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color={colorFive} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Payment</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color={colorSix} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Review</TimelineContent>
                        </TimelineItem>
                    </Timeline>


                </Grid>

                <Grid item xs={5} >

                {formToShow}
                </Grid>
                  <Grid item container xs={12}></Grid>
                 <Grid item xs={2}>
                {backButton}
                </Grid>
                <Grid item xs={3}>
                {nextButton}
                </Grid>    
                </Grid >
                

                
           
        )
    }
}

export default JobPosting
