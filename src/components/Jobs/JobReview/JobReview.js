import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { withRouter } from "react-router";
import { Typography, TextField, Button, Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import './JobReview.css';
import moment from 'moment';


export class JobReview extends Component {
    sendJobPosting = () => {
        this.props.dispatch({ type: 'SET_JOB_POSTING', payload: { job: this.props.job, id: this.props.user.id }, history: this.props.history })
        console.log('in jobPosting')
        // this.props.dispatch({ type: 'SET_JOB_POSTING', 
        //                     payload: { job: this.props.job, 
        //                     id: this.props.user.id }
        //                     // , history: this.props.history 
        // })
        // this.props.history.push('/ThankYouPageJob');
    }

    render() {
        const { classes } = this.props; //need this for cards 
       let housingProvided = "Housing not provided"
        if (this.props.job.housingProvided) {
            housingProvided = `Housing provided. ${this.props.job.housingDetails}`
        }

        let relocationProvided = "Relocation stipend not provided"
        if (this.props.job.relocationProvided) {
            relocationProvided = `Relocation stipend provided`
        }
        return (
         
                <Card >
                    <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="Please review your information" />

                    <CardContent >

                <h2> Job Description </h2>

                <div>
                        <h4 className='label'> Job Title: </h4> 
                        <p className='content'>{this.props.job.jobTitle} </p>
                </div>
                <div>
                    <h4 className='label'> Description: </h4>
                    <p className='content'> {this.props.job.jobDescription}</p>
                    
                
                </div>
                <div>
                        <h4 className='label'> 
                        Job Type: 
                        </h4>
                        <p className='content'> 
                            {this.props.job.jobType} {moment( this.props.job.startDate ).format('MMMM Do YYYY')} - {moment( this.props.job.endDate ).format('MMMM Do YYYY')} 
                        </p>
         
                </div>
                <div>
                        <h4 className='label'> Housing: </h4>
                        <p className='content'> 
                        {housingProvided}
                        </p>
                        <div>
                            <h4 className='label'> 
                            Relocation:
                            </h4>
                            <p className='content'> 
                             {relocationProvided}
                             </p>
                        </div>
       
                </div>
                  <div>
                        <h4 className='label'>
                        Payment: </h4>
                        <p className='content'> 
                        {this.props.job.paymentAmount} {this.props.job.paymentType} 
                    </p>
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
                
                        <Grid container direction="row" alignItems="top" spacing={2}>
                            <Grid item xs={9} />
                            <Grid item xs={2}>
                                <Button color='primary' variant='outlined' onClick={(event) => this.sendJobPosting(event)}> Save Job Posting </Button> 
                            </Grid>
                        </Grid>
                    </CardContent  >
                </Card>
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
