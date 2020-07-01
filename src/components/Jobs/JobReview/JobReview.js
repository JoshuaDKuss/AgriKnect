import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { withRouter } from "react-router";
import { Typography, TextField, Button } from "@material-ui/core";


export class JobReview extends Component {
    sendJobPosting = () => {
        console.log('in jobPosting')
        this.props.dispatch({ type: 'SET_JOB_POSTING', payload: { job: this.props.job, id: this.props.user.id }, history: this.props.history })
    }

    render() {
       let housingProvided = "Housing not provided"
        if (this.props.job.housingProvided) {
            housingProvided = `Housing provided. ${this.props.job.housingDetails}`
        }

        let relocationProvided = "Relocation stipend not provided"
        if (this.props.job.relocationProvided) {
            relocationProvided = `Relocation stipend provided`
        }
        return (
            <div>
                <h1> Please review your information </h1>

                <h2> Job Description </h2>

                <div>
                    <Typography> Job Title {this.props.job.jobTitle} </Typography>
                </div>
                <div>
                <Typography>
                    Description: {this.props.job.jobDescription} 
                </Typography>
                </div>
                <div>
                    <Typography>
                        Job Type: {this.props.job.jobType} {this.props.job.startDate} {this.props.job.endDate}
                    </Typography>
                </div>
                <div>
                    <Typography>
                        Housing: {housingProvided}
                        <div>
                            Relocation: {relocationProvided}
                        </div>
                    </Typography>
                </div>
                  <div>
                    <Typography>
                        Payment: {this.props.job.paymentAmount} {this.props.job.paymentType} 
                    </Typography>
                </div>


                <h2> Desired Experiences and Skills </h2>
                {this.props.job.skills.map((item) => {
                    return (
                        <Typography> {item.proficiency_name}  </Typography>
                    )

                })}

                <h2> Equipment </h2>

                {this.props.job.equipment.map((item) => {
                    return (
                        <Typography> {item.proficiency_name} </Typography>
                    )

                })}

                <h2> Brands </h2>
                {this.props.job.brands.map((item) => {
                    return (
                        <Typography> {item.proficiency_name} </Typography>
                    )

                })}
                <Button onClick={(event) => this.sendJobPosting(event)}> Save Job Posting </Button> 
            </div>
        )
    }
}

JobReview.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        job: reduxState.jobPostingReducer,
        user: reduxState.user
    }
}

export default connect(reduxStateToProps)(withRouter(withStyles(styles)(JobReview))); 
